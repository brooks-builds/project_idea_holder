<template>
  <section>
    <h1 class="branding">
      <router-link to="/">Project Idea Holder</router-link>
    </h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  height: 50px;
  border-bottom: 1px solid gray;
  line-height: 50px;
}

section > h1 {
  margin-left: 1rem;
}

section > h1 > a {
  text-decoration: none;
  color: black;
}

section > h1 > a:visited,
section {
  color: black;
}
</style>
