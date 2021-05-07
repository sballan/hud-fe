<template>
  <textarea v-model="text" name="" cols="30" rows="5"></textarea>

  <ul>
    <li v-for="message in messages">
      {{message}}
    </li>
  </ul>

  <Doc :doc="{id: 1, children: [{id: 1, content: 'test'}]}"></Doc>

</template>

<script lang="ts">
import { ref, watch, defineComponent } from 'vue'
import Doc from './Doc.vue'

export default defineComponent({
  name: 'Home',
  components: { Doc },
  setup: () => {
    const text = ref<String>("")
    const messages = ref<String[]>([])

    watch(text, (newValue, oldValue) => {
      messages.value = newValue.split("\n\n")
    })
    return { text, messages }
  }
})
</script>

<style scoped>
</style>
