<template>
  <div id="app">


    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <h2>{{ subtitle }}</h2>
        </div>
      </div>
    </section>


    <section class="section chat-container">
      <div class="container">
        <div class="columns">
          <div class="box column is-8 is-offset-2">
            <h2 class="title">Chatbox</h2>
            <div class="chat-messages has-text-left">
              <ul v-for="chat in chats">
                <li><strong>{{chat.name}} : </strong>{{chat.message}}</li>
              </ul>
            </div>
            <form id="form" v-on:submit.prevent="addMessage">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" v-model="newMessage.name">
                </p>
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Add a message" v-model="newMessage.message">
                </p>
                <p class="control">
                  <input type="submit" class="button is-success" value="Post" :disabled="newMessage.message === ''">
                </p>
              </div>
            </form>
          </div>
          <div class="column is-1">
            <span class="tag is-danger clear-chat" v-on:click="clearChat">x</span>
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
import Firebase from 'firebase'
import Hello from './components/Hello'
import config from '../firebase.token'

const app = Firebase.initializeApp(config)
const db = app.database()
let chatsRef = db.ref('chats')

export default {
  name: 'app',

  firebase: {
    chats: chatsRef
  },

  data() {
    return {
      title: 'Vue Chat',
      subtitle: 'Chat Application with Vue.js + Firebase',
      newMessage: {
        name: 'Chuck Norris',
        message: ''
      }
    }
  },

  methods: {
    addMessage() {
      chatsRef.push(this.newMessage)
      this.newMessage.message = ''
    },

    clearChat() {
      chatsRef.remove()
    }
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

.chat-messages ul, form {
  padding: 10px;
}

.clear-chat {
  cursor: pointer;
}
</style>
