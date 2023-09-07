<template>
  <header>Javascript Frameworks Galore</header>
</template>

<script setup></script>
<style scoped>
/* ******************* */
/* ***** HEADER ****** */
/* ******************* */

header {
  background-color: var(--orange);
  border: 5px solid var(--color-dark);
  font-weight: 900;
  font-size: 2rem;
  width: 70%;
  padding: 24px;
  margin: 30px auto;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 0.8rem 0.8rem var(--color-dark);
  transition: 0.15s all ease-out;
}
header:hover {
  box-shadow: 0 0 0 var(--color-dark);
}
</style>
