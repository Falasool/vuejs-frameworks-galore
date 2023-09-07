<template>
  <div>
    <section class="input-form">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          class="title"
          placeholder="Google"
          v-model="store.state.title"
        />
      </div>
      <div>
        <label for="description">description</label>
        <textarea
          name="description"
          id="description"
          rows="6"
          placeholder="The act of searching the internet for absolutely nothing in ones spare time."
          v-model="store.state.description"
        ></textarea>
      </div>
      <div>
        <label for="link">Link</label>
        <input
          type="text"
          class="link"
          placeholder="https://google.com"
          v-model="store.state.link"
        />
      </div>
      <button @click="addSource">Add</button>
    </section>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  watchEffect,
  nextTick,
  toValue,
} from 'vue'
// ref, computed, toRefs
import { useStore } from 'vuex'
// 实例 useStore()，获取 store 对象
const store = useStore()

//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */

function addSource() {
  // 提交 mutation 更新状态

  store.commit('updateStoredValue', [
    store.state.title,
    store.state.description,
    store.state.link,
  ])
  console.log('调用addSource，提交 mutation 更新状态')
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
/* ************************ */
/* ***** INPUT-FORM ****** */
/* ************************ */
.input-form,
.input-form * {
  background-color: var(--color-light);
}
.input-form {
  box-shadow: 0.8rem 0.8rem var(--color-dark);
  transition: 0.15s all ease-out;

  border: var(--color-dark) solid 5px;
  width: 70%;
  padding: 24px;
  margin: 30px auto;
  text-align: left;
}
.input-form:hover {
  box-shadow: 0 0 0 var(--color-dark);
}

.input-form div {
  display: flex;
  flex-direction: column;
}

label {
  text-align: left;
  font-weight: 600;
  margin-bottom: 4px;
}
input,
textarea {
  border: solid 2px var(--gray);
  border-radius: 5px;
  padding: 8px 6px;
  margin-bottom: 8px;
}
.description {
  padding: 30px 6px;
}
input:focus,
textarea:focus {
  outline: none;
  border: solid 2px var(--orange-light);
  background-color: var(--orange-light-2);
}

/* ********************** */
/* ****** BUTTON ******** */
/* ********************** */

.input-form button {
  font-weight: 600;
  border: none;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: var(--orange);
}
.input-form button:hover {
  background-color: var(--orange-light);
}
</style>
