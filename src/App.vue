<template>
  <div id="app">
    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vue Chat</h1>
          <h2>Vue.js & Firebase Example</h2>
        </div>
      </div>
    </section>
    <section class="section chat-container">
      <div class="container">
        <div class="columns">
          <div class="box column is-half is-offset-one-quarter">
            <h2 class="title">Chatbox</h2>
            <div class="chat-messages has-text-left">
              <ul v-for="chat in chats">
                <li><strong>{{chat.name}} : </strong>{{chat.message}}</li>
              </ul>
            </div>
            <form id="form" v-on:submit.prevent="addMessage">
              <div class="field has-addons">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Add a message" v-model="newMessage.message">
                </p>
                <p class="control">
                  <input type="submit" class="button is-success" value="Post" :disabled="newMessage.message === ''">
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>Powered by <a href="https://devahoy.com" target="_blank">DevAhoy</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',

  components: {
    Hello
  },

  data() {
    return {
      newMessage: {
        name: '',
        message: ''
      },

      chats: [{
        name: 'Jack',
        message: 'Hello How are you?'
      }, {
        name: 'John',
        message: 'What is that?'
      }, {
        name: 'Jim',
        message: "I don't know"
      }]
    }
  },

  methods: {

  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
}

.chat-messages {
  ul, form {
    padding: 10px;
  }
}

</style>
