<template>
  <TheHeader></TheHeader>
  <ThePanel
    :inputIsAppear="inputIsAppear"
    @toggleBoolean="toggleBoolean"
    @falseBoolean="falseBoolean"
  ></ThePanel>
  <StoredSources v-if="!inputIsAppear" :inputValue="inputValue"></StoredSources>
</template>

<script setup>
import { ref, reactive } from 'vue'

import TheHeader from './components/layouts/TheHeader.vue'
import ThePanel from './components/panel/ThePanel.vue'
import StoredSources from './components/learning-resouces/StoredSources.vue'

/**
 * 是否显示input form
 */
const inputIsAppear = ref(false)
const toggleBoolean = (value) => {
  inputIsAppear.value = !value
}
const falseBoolean = () => {
  inputIsAppear.value = false
}

/**
 * 把input form的数据存入db（StoredSources）
 */
const inputValue = reactive({
  title: '',
  description: '',
  link: '',
})
</script>
