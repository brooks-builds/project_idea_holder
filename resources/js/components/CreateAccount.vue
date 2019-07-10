<template>
  <section>
    <h1>Create Account</h1>
    <div class="error" v-if="errors.hasError">
      <h3>Error creating account</h3>
      <p v-for="(message, index) in errors.messages" v-bind:key="index">{{message}}</p>
    </div>
    <main>
      <section>
        <h2>With Email / Password</h2>
        <form v-on:submit.prevent="createAccount">
          <div>
            <label for="email">Email</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              v-model="user.email"
              required
              v-bind:class="{'border-error': errors.fields.email}"
            />
          </div>
          <div>
            <label for="name">Display Name</label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              v-model="user.name"
              required
              v-bind:class="{'border-error': errors.fields.name}"
            />
          </div>
          <div>
            <label for="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              v-model="user.password"
              required
              v-bind:class="{'border-error': errors.fields.password}"
            />
          </div>
          <div>
            <button data-testid="create-account">Create Account</button>
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
      },
      errors: {
        hasError: false,
        messages: [],
        fields: {}
      }
    };
  },
  methods: {
    createAccount(event) {
      const user = {
        email: this.user.email,
        name: this.user.name,
        password: this.user.password
      };

      this.errors.hasError = false;
      this.errors.messages = [];
      this.errors.fields = {};

      axios
        .post("/api/users", user)
        .then(response => {
          console.log("response.data");
          const { email, id, name } = response.data;
          this.$store.commit("setUser", { email, id, name });
          this.$router.push("/");
        })
        .catch(error => {
          this.errors.hasError = true;

          for (let field in error.response.data.errors) {
            error.response.data.errors[field].forEach(errorMessage =>
              this.errors.messages.push(errorMessage)
            );

            this.errors.fields[field] = true;
          }
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

.error {
  background-color: lightcoral;
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 5px;
}

.hidden {
  visibility: hidden;
}

.border-error {
  border: 2px solid red;
}
</style>
