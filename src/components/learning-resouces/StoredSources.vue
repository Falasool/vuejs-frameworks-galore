<template>
  <ul class="frameworks">
    <li class="f-item" v-for="stored in data.storedResources" :key="stored.id">
      <div class="f-item-text">
        <div class="title">
          <h3>{{ stored.title }}</h3>
          <p class="description">{{ stored.description }}</p>
        </div>

        <a href="{{ stored.link }}">Goto resource</a>
      </div>
      <div class="del"></div>
    </li>
  </ul>
</template>

<script setup>
import { reactive } from 'vue'




const data = reactive({
  storedResources: [
    {
      id: 'vue-official-guide',
      title: 'Vue Official Guide',
      description: 'The official Vue.js documentation',
      link: 'https://vuejs.org',
    },
    {
      id: 'react-official-guide',
      title: 'React Official Guide',
      description: 'The official React.js documentation',
      link: 'https://reactjs.org',
    },
    {
      id: 'svelte-official-guide',
      title: 'Svelte Official Guide',
      description: 'The official Svelte.js documentation',
      link: 'https://svelte.dev/',
    },
    {
      id: 'angular-official-guide',
      title: 'Angular Official Guide',
      description: 'The official Angular.js documentation',
      link: 'https://angular.io/',
    },
    {
      id: 'jquery-official-guide',
      title: 'jQuery Official Guide',
      description: 'The official jQuery documentation',
      link: 'https://jquery.com/',
    },
  ],
})


</script>
<style scoped>
/* ******************* */
/* *** FRAMEWORKS **** */
/* ******************* */

.frameworks {
  transition: 0.15s all ease-out;

  display: flex;
  flex-direction: column;
}
.f-item,
.f-item * {
  background-color: var(--color-light);
}
.frameworks .f-item {
  box-shadow: 0.8rem 0.8rem var(--color-dark);
  border: var(--color-dark) solid 5px;
  width: 70%;
  padding: 24px;
  margin: 15px auto;
  transition: 0.15s all ease-out;

  display: flex;
  justify-content: space-between;
}

.frameworks .f-item:hover {
  box-shadow: 0 0 0 var(--color-dark);
}

.f-item div {
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.f-item .del {
  margin-right: 16px;
  align-self: flex-start;
  position: relative;
}

/* ********** ❎ *********** */
.f-item .del::before,
.f-item .del::after {
  content: '';
  position: absolute;
  height: 20px;
  width: 4px;
  top: 0;
  right: 0;
  background-color: var(--color-dark);
}
.f-item .del::before {
  transform: rotate(45deg);
}
.f-item .del::after {
  transform: rotate(-45deg);
}
.f-item .del:hover::before,
.f-item .del:hover::after {
  background-color: var(--color-dark);
}
.f-item .title {
  margin-bottom: 30px;
}
.f-item-text {
  position: relative;
}
a {
  text-decoration: none;
  color: var(--color-dark);
}
</style>
