<template>
  <section class="panel">
    <button class="stored" @click="hideInputForm">Stored sources</button>
    <button class="add" @click="appearInputForm">Add resource</button>
  </section>
  <transition name="fade">
    <InputResource v-if="props.inputIsAppear"></InputResource>
  </transition>
</template>

<script setup>
import { onBeforeMount, onMounted, watchEffect } from 'vue'

// reactive, computed, toRefs

import InputResource from '../learning-resouces/InputResource.vue'

//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */

// 声明 inputIsAppear 作为 props
const props = defineProps({
  inputIsAppear: Boolean,
})
const emit = defineEmits(['toggleBoolean', 'falseBoolean'])
function appearInputForm() {
  emit('toggleBoolean', props.inputIsAppear)
  // console.log('调用appearInputForm() | ' + props.inputIsAppear)
}
function hideInputForm() {
  emit('falseBoolean', props.inputIsAppear)
  // console.log('调用hideInputForm() | ' + props.inputIsAppear)
}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(data) }
// defineExpose({
// ...toRefs(data),
// })
</script>
<style scoped>
/* ******************* */
/* ***** PANEL ****** */
/* ******************* */

.panel {
  box-shadow: 0.8rem 0.8rem var(--color-dark);
  transition: 0.15s all ease-out;

  background-color: var(--gray-3);
  border: var(--color-dark) solid 5px;
  width: 70%;
  padding: 24px;
  margin: 30px auto;

  display: flex;
  justify-content: space-between;
}
.panel:hover {
  box-shadow: 0 0 0 var(--color-dark);
}

.panel button {
  padding: 6px 14px;
  border: var(--color-dark) solid 3px;
  font-weight: 600;
}

.panel .stored {
  background-color: var(--gray-3);
}
.panel .add {
  background-color: var(--color-light);
}
.panel .stored,
.panel .add {
  transition: 0.15s all ease-out;
}
.panel .stored:hover,
.panel .add:hover,
.panel .add:focus {
  background-color: var(--orange-light);
}

/* 定义过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在 Vue 2.1.8+ 中可用 */ {
  opacity: 0;
}
</style>
