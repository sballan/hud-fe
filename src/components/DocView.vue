<template>
  <div>
    Doc {{ doc.id }}

    <ul>
      <li v-for="note in doc.notes">
        {{note.content}}
        <ul v-for="nestedNote in note.nested">
           <li>
             Nested Content: {{nestedNote.content}}
           </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Doc } from '../models/doc'

export default defineComponent({
  name: 'DocView',
  props: {
    doc: {
      type: Doc as PropType<Doc>,
      required: true
    }
  }
})
</script>