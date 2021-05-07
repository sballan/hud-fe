<template>
  <div>
    Doc {{ doc.id }}

    <ul>
      <li v-for="note in doc.children">
        {{note.content}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import { ref, watch, defineComponent, PropType } from 'vue'
import { Doc } from '../models/doc'
export default defineComponent({
  name: 'Doc',
  props: {
    doc: {
      type: Doc as PropType<Doc>
    }
  }
})
</script>