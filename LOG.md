## 静态页面

- 灵活使用 <input/> 和 <textarea>

## Add resource 按扭逻辑

### 点击 Add resource 后显示 Input 表单，再次点击隐藏

⭐️ 用 v-if 控制组件显示/隐藏，设定一个 boolean 值，因为这个值需要几个组件共用，所以把它放在它们的父组件 App.vue 里

```js
//App.vue
const inputIsAppear = ref(false)
```

然后用 props 传递给子组件

```js
//Child1.vue
const props = defineProps({ inputIsAppear: Boolean })
```

因为 props 是 readonly，要在子组件操作 props 需要借助 emit：声明一个方法把 props 数据作为参数，通过 v-on 传递给 App.vue，在 App.vue 修改源数据，再由 ref 响应给子组件

```js
//Child1.vue
const emit = defineEmits(['toggleBoolean'])
// 点击按扭调用appearInputForm()
function appearInputForm() {
  emit('toggleBoolean', !props.inputIsAppear)
}
```

```js
//App.vue
<ThePanel
  :inputIsAppear="inputIsAppear"//把数据传递给子组件
  @toggleBoolean="toggleBoolean"//从子组件接收方法，利用方法的参数
/>
const toggleBoolean = (value) => {
  inputIsAppear.value = !value
}
```

⭐️ 把 Input 组件（StoredSources）引入 Panel 组件（ThePanel）中并使用（使用 Vue3 的 `<script setup>` 语法糖所以不用注册），`<InputResource v-if="props.inputIsAppear"/>`

### 显示 Input 表单时隐藏 StoredSources 组件

```js
//App.vue
<StoredSources
    :inputIsAppear="inputIsAppear"
    v-if="!inputIsAppear"
/>
```

## Stored sources 按扭逻辑

点击显示 StoredSources 组件

```js
//Child1.vue
<button @click="hideInputForm">Add resource</button>
...
const emit = defineEmits(['falseBoolean'])
function hideInputForm() {
  emit('falseBoolean', props.inputIsAppear)
}

//App.vue
<ThePanel
  @falseBoolean="falseBoolean"//从子组件接收方法，利用方法的参数
/>
const falseBoolean = () => {
  inputIsAppear.value = false
}
```

## Input Form Add 按扭逻辑

### 当任意一个 input/textarea 为空时，出现模态框

### 所有 input/textarea 不为空，把数据添加到储存数据的组件里

Input 组件传值给 Stored 是孙 -> 祖传值，用 Vuex4 的 store 在不同组件中共享数据

⭐️ 更新表单数据
安装 vuex `npm i vuex@4`
新建目录

```js
// src/store/index.js

import { createStore } from 'vuex'

export default createStore({
  // data，储存数据
  state() {
    return {
      title: 'd',
      description: '',
      link: '',
    }
  },
  // methods （同步），修改数据的地方
  mutations: {
    updateStoredValue(state, newValue) {
      state.title = newValue[0]
      state.description = newValue[1]
      state.link = newValue[2]
      console.log('newValue' + newValue)
    },
  },
  // methods 异步
  actions: {},
  // computed
  getters: {},
})
```

## Frameworks 列表

### 渲染已有数据

```js
//StoredSources.vue
```

## 森么

HTML5 <dialog open>元素：用于弹窗对话框，open 意味着可见，否则要借助 JS 让它显示
常配合 js 的 showModal()和 close()使用

```js
const modal = document.querySelector('dialog')

// 添加open属性，阻止用户与其它内容交互
modal.showModal()
// 添加open属性，允许用户与其它内容交互
modal.show()
// 移除open属性
modal.close()
```
