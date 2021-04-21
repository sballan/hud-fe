<template>
  <textarea v-model="text" name="" cols="30" rows="10"></textarea>

  {{text}}

  <ul>
    <li v-for="message in messages">
      {{message}}
    </li>

  </ul>

</template>

<script lang="ts">
import { ref, watch, defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
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
