// Copyright (c) 2020 DevilTea
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { AgendaListData, AgendaTableData, Day, RawData, RoomData, Session, SessionBase, SessionData, SpeakerData, TableCell, TagData, TypeData } from './types'
import { groupBy, escape, truncate } from 'lodash'
// import _rawData from '@/../public/json/session.json'
import { PopupData } from '@/services/popup'
import markdown from '@/utils/markdown'

// export const rawData = Object.freeze(_rawData)

/**
 * Return a time zone fixed Date object.
 *
 * @param {Date | string} date Source Date object
 * @param {number} timeZoneOffsetMinutes The time zone difference, in minutes, from current locale (host system settings) to UTC.
 * @returns {Date} Time zone fixed Date object
 */
export function fixedTimeZoneDate (date: Date | string, timeZoneOffsetMinutes: number): Date {
  date = new Date(date)
  date.setMinutes(date.getMinutes() - timeZoneOffsetMinutes + (date.getTimezoneOffset()))
  return date
}

/**
 * Retrieve tuple of [year, month, day] from a date object.
 *
 * @param {Date} dateObj Source Date object
 * @returns {Day} Tuple of [year, month, day]. For example, the Date of '2020/6/21' would get [2020, 6, 21].
 */
export function getYearMonthDate (dateObj: Date): Day {
  return [dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate()]
}

/**
 * Retrieve tuple of [hours, minutes] from a date object.
 *
 * @param {Date} dateObj Source Date object
 * @returns {[number, number]} Tuple of [hours, minutes]. For example, the Date of '18:30' would get [18, 30].
 */
export function getHoursMinutes (dateObj: Date): [number, number] {
  return [dateObj.getHours(), dateObj.getMinutes()]
}

export function formatDateString (date: Date, joinChar = '') {
  return getYearMonthDate(date)
    .map((digit) => digit.toString().padStart(2, '0')).join(joinChar)
}

export function formatTimeString (date: Date, joinChar = '') {
  return getHoursMinutes(date)
    .map((digit) => digit.toString().padStart(2, '0')).join(joinChar)
}

export function getTimePoints (sessions: SessionBase[], fixedTimezone?: (date: Date | string) => Date) {
  const createDate = (date: Date | string) => fixedTimezone ? fixedTimezone(date) : new Date(date)
  return [...new Set([
    ...sessions.flatMap((session) => {
      return [formatTimeString(createDate(session.start)), formatTimeString(createDate(session.end))]
    })
  ])]
    .sort((strA, strB) => parseInt(strA) - parseInt(strB))
    .map((timeStr) => `t-${timeStr}`)
}

export function generateSession (rawData: RawData, sessionData: SessionData, fixedTimezone?: (date: Date | string) => Date): Session {
  const createDate = (date: Date | string) => fixedTimezone ? fixedTimezone(date) : new Date(date)
  const type: TypeData | undefined = rawData.session_types.find((typeData: TypeData) => typeData.id === sessionData.type)
  if (type === undefined) throw new Error(`Session: ${sessionData.id} has an unknown type`)

  const room: RoomData | undefined = rawData.rooms.find((roomData: RoomData) => roomData.id === sessionData.room)
  if (room === undefined) throw new Error(`Session: ${sessionData.id} has an unknown room`)

  const speakers: SpeakerData[] = rawData.speakers.filter((speakerData: SpeakerData) => sessionData.speakers.includes(speakerData.id))

  const tags: TagData[] = rawData.tags.filter((tagData: TagData) => sessionData.tags.includes(tagData.id))

  const start: Date = createDate(sessionData.start)
  if (start.toString() === 'Invalid Date') throw new Error(`Session: ${sessionData.id} has an invalid start date string`)

  const end: Date = createDate(sessionData.end)
  if (end.toString() === 'Invalid Date') throw new Error(`Session: ${sessionData.id} has an invalid end date string`)

  return {
    ...sessionData,
    start,
    end,
    type,
    room,
    speakers,
    tags
  }
}

export function generateSessions (rawData: RawData, fixedTimezone?: (date: Date | string) => Date): Session[] {
  return rawData.sessions.map((sessionData) => generateSession(rawData, sessionData, fixedTimezone))
}

export function generateAgendaTableData (sessions: SessionBase[], fixedTimezone?: (date: Date | string) => Date, roomSequence?: string[]): AgendaTableData {
  const createDate = (date: Date | string) => fixedTimezone ? fixedTimezone(date) : new Date(date)
  const timePoints = getTimePoints(sessions, fixedTimezone)
  let entries = Object.entries(groupBy(sessions, (session) => `r-${session.room}`))
  if (roomSequence && roomSequence.length > 0) {
    entries = entries.sort((entryA, entryB) => {
      const indexA = roomSequence.indexOf(entryA[0].slice(2))
      const indexB = roomSequence.indexOf(entryB[0].slice(2))
      if (indexA === -1) throw new Error(`Room: ${entryA[0].slice(2)} is not exist in roomSequence`)
      if (indexB === -1) throw new Error(`Room: ${entryB[0].slice(2)} is not exist in roomSequence`)

      return indexA - indexB
    })
  }
  const blankCell: TableCell = { type: 'Blank', rowSpan: 1 }
  const spanCell: TableCell = { type: 'Span' }
  const rooms = entries.map((entry) => entry[0].slice(2))
  let rows = new Array<() => TableCell[]>(timePoints.length)
    .fill((): TableCell[] => new Array<TableCell>(rooms.length).fill(blankCell))
    .map((a) => a())
  entries.forEach((entry, columnIndex) => {
    entry[1]
      .sort((sessionA, sessionB) => {
        const indexA = timePoints.indexOf(`t-${formatTimeString(createDate(sessionA.start))}`)
        const indexB = timePoints.indexOf(`t-${formatTimeString(createDate(sessionB.start))}`)
        if (indexA === -1) throw new Error(`Session: ${sessionA.id}'s start time: t-${formatTimeString(createDate(sessionA.start))} is not exist in time points`)
        if (indexB === -1) throw new Error(`Session: ${sessionB.id}'s start time: t-${formatTimeString(createDate(sessionB.start))} is not exist in time points`)

        return indexA - indexB
      })
      .forEach((session) => {
        const indexStart = timePoints.indexOf(`t-${formatTimeString(createDate(session.start))}`)
        const indexEnd = timePoints.indexOf(`t-${formatTimeString(createDate(session.end))}`)
        if (indexStart === -1) throw new Error(`Session: ${session.id}'s start time: t-${formatTimeString(createDate(session.start))} is not exist in time points`)
        if (indexEnd === -1) throw new Error(`Session: ${session.id}'s end time: t-${formatTimeString(createDate(session.end))} is not exist in time points`)
        if (indexStart >= indexEnd) throw new Error(`Session: ${session.id}'s start time: t-${formatTimeString(createDate(session.end))} is later than end time: t-${formatTimeString(createDate(session.end))}`)

        const rowSpan = indexEnd - indexStart

        if (rows[indexStart][columnIndex].type !== 'Blank') {
          console.warn(`Session "${session.id}" conflicts with others, hidden for now.`)
          return
        }
        rows[indexStart][columnIndex] = { type: 'Session', sessionId: session.id, rowSpan }
        for (let i = 1; i < rowSpan; i++) {
          rows[indexStart + i][columnIndex] = spanCell
        }
      })
  })

  rows = rows.map((row) => row.filter((cell) => cell.type !== 'Span'))

  return {
    rooms,
    rows
  }
}

export function generateAgendaListData (sessions: SessionBase[], fixedTimezone?: (date: Date | string) => Date, roomSequence?: string[]): AgendaListData {
  const createDate = (date: Date | string) => fixedTimezone ? fixedTimezone(date) : new Date(date)
  return {
    sections: Object.entries(groupBy(sessions, (session) => `t-${formatTimeString(createDate(session.start))}`))
      .sort((entryA, entryB) => parseInt(entryA[0].slice(2)) - parseInt(entryB[0].slice(2)))
      .map((entry) => {
        const _sessions = roomSequence
          ? entry[1].sort((sessionA, sessionB) => {
            const indexA = roomSequence.indexOf(sessionA.room)
            const indexB = roomSequence.indexOf(sessionB.room)
            if (indexA === -1) throw new Error(`Room: ${sessionA.room} is not exist in roomSequence`)
            if (indexB === -1) throw new Error(`Room: ${sessionB.room} is not exist in roomSequence`)

            return indexA - indexB
          })
          : entry[1]
        return {
          start: createDate(_sessions[0].start),
          sessions: _sessions.map((_session) => _session.id)
        }
      })
      .filter((section) => section.sessions.length > 0)
  }
}

const generateSessionPopupContentHtml = async (session: Session, language: 'en' | 'zh') => `
<article id="session-detail" class="session-detail">
  <header class="detail-header">
    <div class="date">
      ${formatDateString(session.start, ' / ')}
    </div>
    <div class="period">
      ${formatTimeString(session.start, '：')} ~ ${formatTimeString(session.end, '：')}
    </div>
    <div class="track">
      <span class="room">${session.room[language].name.split(' / ')[0]}</span>
      <span>${session.type[language].name}</span>
    </div>
    <div class="title">${session[language].title}</div>
    <div class="speaker-list">
      <span>by</span>
      ${
        session.speakers
          .map((speaker) => `<span class="speaker">${speaker[language].name}</span>`)
          .join('')
      }
    </div>
    <div class="tag-list">
      <span>${session.language}</span>
      ${
        session.tags
          .map((tag) => `<span>${tag[language].name}</span>`)
          .join('')
      }
    </div>
  </header>
  <section class="detail-description markdown">
    ${await markdown(session[language].description)}
  </section>
  <section class="detail-attachment">
    ${
      session.record
        ? `
    <div class="record-container">
      <div class="record-wrapper">
        <iframe
          class="record"
          src="https://www.youtube-nocookie.com/embed/${session.record.split('?v=').pop()}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>`
        : ''
    }
    ${
      session.co_write
        ? `
    <div class="outer-link">
      <span>${language === 'en' ? 'Collaborative note:' : '共筆:'}</span>
      <a href="${session.co_write}" target="_blank" rel="noopener noreferrer">${session.co_write}</a>
    </div>`
        : ''
    }
    ${
      session.slide
        ? `
    <div class="outer-link">
      <span>${language === 'en' ? 'Slide:' : '簡報:'}</span>
      <a href="${session.slide}" target="_blank" rel="noopener noreferrer">${session.slide}</a>
    </div>`
        : ''
    }
  </section>
  <section class="detail-speakers">
    ${(await Promise.all(session.speakers.map(async (speaker) => ({
      avatar: speaker.avatar,
      name: speaker[language].name,
      bio: await markdown(speaker[language].bio)
    })))).map((speaker) => `
    <h2 class="speaker-title">About ${speaker.name}</h2>
    <div class="speaker-content">
      <img class="avatar" alt="Speaker ${speaker.name}'s avatar" src="${speaker.avatar}"></img>
      <div class="bio markdown">
        ${speaker.bio}
      </div>
    </div>
    `.trim()).join('')}
  </section>
</article>
`.trim()

export async function generateSessionPopupData (session: Session, language: 'en' | 'zh'): Promise<PopupData> {
  const languageType = language === 'zh' ? 'zh-TW' : language
  return {
    popupId: `session-${session.id}`,
    metaOptions: {
      title: session[language].title,
      description: escape(truncate(session[language].description, { length: 80 })),
      ogUrl: `${process.env.VUE_APP_PRODUCTION_ORIGIN}${process.env.BASE_URL}${languageType}/agenda/${session.id}`,
      ogImage: session.speakers.length > 0 ? session.speakers[Math.floor(Math.random() * session.speakers.length)].avatar : undefined
    },
    containerData: {
      type: 'session'
    },
    contentData: {
      type: 'general',
      html: await generateSessionPopupContentHtml(session, language)
    }
  }
}
