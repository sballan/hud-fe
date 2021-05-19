<template>
  <div>
    Content: {{note.content}}

    <ul>
      <li v-for="nestedNote in note.nested">
        <NoteComponent :note="nestedNote"></NoteComponent>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Note } from '../models/note'

export default defineComponent({
  name: 'NoteComponent',
  props: {
    note: {
      type: Note as PropType<Note>,
      required: true
    }
  }
})
</script>