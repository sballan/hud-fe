<template>
  <textarea v-model="text" name="" cols="30" rows="5"></textarea>

  <ul>
    <li v-for="message in messages">
      {{message}}
    </li>
  </ul>

  <DocView v-if="doc" :doc="doc"></DocView>

</template>

<script lang="ts">
import { ref, watch, defineComponent, onBeforeMount } from 'vue'
import DocView from './DocView.vue'
import { Doc } from '../models/doc'
import { api } from '../models/api'

export default defineComponent({
  name: 'Home',
  components: { DocView },
  setup: () => {
    const text = ref<String>("")
    const messages = ref<String[]>([])
    watch(text, (newValue, oldValue) => {
      messages.value = newValue.split("\n\n")
    })

    const docRef = ref<Doc>()
    onBeforeMount(async () => {
      const doc = await api.docs.get(1)
      docRef.value = doc
    })

    return { text, messages, doc: docRef }
  }
})
</script>

<style scoped>
</style>
