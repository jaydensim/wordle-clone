<script setup>
const isvercel = process.env.VERCEL_ENV;
const ishash = process.env.VERCEL_GIT_COMMIT_SHA;
const isRepo = process.env.VERCEL_GIT_COMMIT_REF;
</script>

<template>
  <img src="../assets/ARCTICLOGO_SVG.svg" class="arctic" />
  <p class="rev">
    {{ ishash }}
    <br />
    {{ isvercel }} on {{ isRepo }}
  </p>
</template>

<style scoped>
.arctic {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 3rem;
  z-index: 999999999;
}
.rev {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.5rem;
  font-variation-settings: "wght" 700;
  text-align: right;
  z-index: 999999999;
}
</style>
