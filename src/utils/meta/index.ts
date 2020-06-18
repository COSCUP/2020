enum MetaType {
  Title = 'title',
  Description = 'description',
  OgUrl = 'ogUrl',
  OgImage = 'ogImage',
  OgType = 'ogType',
  OgSiteName = 'ogSiteName'
}

type MetaSetterSet = {
  [name in MetaType]: (value: string) => void;
};

export type MetaOptions = {
  [name in MetaType]?: string;
}

type MetaValues = {
  [name in MetaType]: string;
}

const defaultMetaValues: MetaValues = {
  [MetaType.Title]: 'COSCUP 2020 | Conference for Open Source Coders, Users, and Promoters',
  [MetaType.Description]: 'Conference for Open Source Coders, Users, and Promoters is a free annual conference providing a platform to connect FLOSS folks across Asia since 2006. It\'s a major force of free software movement advocacy in Taiwan.',
  [MetaType.OgUrl]: 'https://coscup.org/2020',
  [MetaType.OgImage]: 'https://coscup.org/2020/img/og.png',
  [MetaType.OgType]: 'website',
  [MetaType.OgSiteName]: 'COSCUP 2020'
}

const metaDomSetterSet: MetaSetterSet = {
  [MetaType.Title]: (value) => {
    const title: string = (value.length === 0 || value === defaultMetaValues.title) ? (defaultMetaValues.title) : (`${value} - ${defaultMetaValues.title}`);
    (document.querySelector('title') as HTMLElement).innerHTML = title;
    (document.querySelector('meta[property="og:title"]') as HTMLElement).setAttribute('content', title)
  },
  [MetaType.Description]: (value) => {
    (document.querySelector('meta[name="description"]') as HTMLElement).setAttribute('content', value);
    (document.querySelector('meta[property="og:description"]') as HTMLElement).setAttribute('content', value)
  },
  [MetaType.OgUrl]: (value) => { (document.querySelector('meta[property="og:url"]') as HTMLElement).setAttribute('content', value) },
  [MetaType.OgImage]: (value) => { (document.querySelector('meta[property="og:image"]') as HTMLElement).setAttribute('content', value) },
  [MetaType.OgType]: (value) => { (document.querySelector('meta[property="og:type"]') as HTMLElement).setAttribute('content', value) },
  [MetaType.OgSiteName]: (value) => { (document.querySelector('meta[property="og:site_name"]') as HTMLElement).setAttribute('content', value) }
}

export interface MetaManager {
  readonly currentMetaValues: MetaValues;
  setMeta: (options: MetaOptions) => void;
  resetMeta: () => void;
}

class MetaManagerConcrete implements MetaManager {
  private __currentMetaValues: MetaValues = defaultMetaValues

  private set _currentMetaValues (values: MetaValues) {
    this.__currentMetaValues = values
    Object.entries(values)
      .forEach((entry) => {
        const metaDomType: MetaType = entry[0] as MetaType
        const value = entry[1]
        const setter = metaDomSetterSet[metaDomType]
        setter(value)
      })
  }

  public get currentMetaValues (): MetaValues {
    return Object.freeze(this.__currentMetaValues)
  }

  public setMeta (options: MetaOptions): void {
    this._currentMetaValues = {
      ...this.currentMetaValues,
      ...options
    }
  }

  public resetMeta (): void {
    this._currentMetaValues = defaultMetaValues
  }
}

export function createMetaManager (): MetaManager {
  return new MetaManagerConcrete()
}
