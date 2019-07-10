<template>
  <section>
    <h1 class="branding">
      <router-link to="/">Project Idea Holder</router-link>
    </h1>
    <nav>
      <router-link
        to="/users/create"
        v-if="!$store.state.user.name"
        data-testid="create-account-link"
      >Create Account</router-link>
      <router-link to="/users/login" v-if="!$store.state.user.name">Login</router-link>
      <span
        v-if="$store.state.user.name"
        data-testid="logged-in-message"
      >Logged in as {{$store.state.user.name}}</span>
    </nav>
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
  display: flex;
  justify-content: space-between;
}

section > * {
  margin: 0 1rem;
}

section > h1 > a {
  text-decoration: none;
  color: black;
}

section > h1 > a:visited,
section {
  color: black;
}

nav a {
  border: 2px solid cornflowerblue;
  padding: 0.2rem 0.1rem;
  border-radius: 10px;
  background-color: cornflowerblue;
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: lightcyan;
}
</style>
