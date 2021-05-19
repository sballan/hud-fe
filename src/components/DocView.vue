<template>
  <div>
    Doc {{ doc.id }}

    <ul>
      <li v-for="note in doc.notes">
        <NoteComponent :note="note"></NoteComponent>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import NoteComponent from './NoteComponent.vue'

import { Doc } from '../models/doc'

export default defineComponent({
  name: 'DocView',
  components: { NoteComponent },
  props: {
    doc: {
      type: Doc as PropType<Doc>,
      required: true
    }
  }
})
</script>