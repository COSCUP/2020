<template>
  <div class="navbar-item-container" @click="$emit('click', $event)">
    <a
      class="navbar-item external-link"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NavbarItemContent>
        <template v-slot:prefix>
          <slot name="prefix" v-bind="$props"> </slot>
        </template>

        <template v-slot:default>
          <slot name="default" v-bind="$props">
            <span v-text="text"> </span>
          </slot>
        </template>

        <template v-slot:suffix>
          <slot name="suffix" v-bind="$props">
            <Icon :name="'external-link-alt'" class="suffix-icon"> </Icon>
          </slot>
        </template>
      </NavbarItemContent>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarItemContent from './NavbarItemContent.vue'

export default defineComponent({
  name: 'ExternalLink',
  components: {
    NavbarItemContent
  },
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>
