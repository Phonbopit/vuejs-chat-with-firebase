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
              <ul v-bind:key="chat" v-for="chat in chats">
                  <li class="chat-message">
                    <strong>{{ chat.name }} : </strong>
                    <input class="input" type="text" v-if="chat.isEditable" v-on:keyup.enter="editChat(chat)" v-model="chat.message"><span v-else>{{ chat.message }}</span>
                    <span class="tag is-info is-hover" v-on:click="clickEdit(chat)">Edit</span>
                    <span class="tag is-danger is-hover" v-on:click="deleteMessage(chat)">Del</span>
                  </li>
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
            <span class="tag is-danger clear-chat" v-on:click="clearChat">Clear</span>
          </div>
        </div>
      </div>
    </section>


    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>Powered by <a href="https://devahoy.com" target="_blank">DevAhoy</a></p>
          <p>Source Code : <a href="https://github.com/Phonbopit/psru-vue-chat-workshop">https://github.com/Phonbopit/psru-vue-chat-workshop</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Firebase from 'firebase'
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
        message: '',
        isEditable: false
      },
      editMessage: ''
    }
  },

  methods: {
    addMessage() {
      chatsRef.push(this.newMessage)
      this.newMessage.message = ''
    },

    clearChat() {
      chatsRef.remove()
    },

    clickEdit(chat) {
      chatsRef.child(chat['.key']).child('isEditable').set(true);
    },

    editChat(chat) {
      chatsRef.child(chat['.key']).child('message').set(chat.message)
      chatsRef.child(chat['.key']).child('isEditable').set(false)
    },

    deleteMessage(message) {
      chatsRef.child(message['.key']).remove()
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

.is-hover {
  display: none;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
.chat-message:hover .is-hover {
  animation: fadein 1s;
  display: inline;
  cursor: pointer;
}
</style>
