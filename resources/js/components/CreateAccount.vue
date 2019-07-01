<template>
  <section>
    <h1>Create Account</h1>
    <main>
      <section>
        <h2>With Email / Password</h2>
        <form v-on:submit="createAccount">
          <div>
            <label for="email">Email</label>
          </div>
          <div>
            <input type="email" id="email" v-model="user.email" required />
          </div>
          <div>
            <label for="name">Display Name</label>
          </div>
          <div>
            <input type="text" id="name" v-model="user.name" required />
          </div>
          <div>
            <label for="password">Password</label>
          </div>
          <div>
            <input type="password" id="password" v-model="user.password" required />
          </div>
          <div>
            <button>Create Account</button>
          </div>
        </form>
      </section>
      <section>
        <h2>With GitHub</h2>
      </section>
    </main>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: null,
        name: null,
        password: null
      }
    };
  },
  methods: {
    createAccount() {
      const user = {
        email: this.user.email,
        name: this.user.name,
        password: this.user.password
      };

      axios
        .post("/api/users", user)
        .then(response => {
          const { email, id, name } = response.data;
          this.$store.commit("setUser", { email, id, name });
          this.$router.push("/");
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-evenly;
}

h1 {
  text-align: center;
}

form input {
  width: 100%;
  border-radius: 3px;
  height: 1.5rem;
  margin-bottom: 0.5rem;
}

form button {
  background-color: darkcyan;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
}

form button:hover {
  border: groove;
}
</style>
