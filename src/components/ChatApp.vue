<template>
	<div class="container" id="app">
		<AppHeader :title="title" :subtitle="subtitle"/>
		<ChatBox :chats="chats" />
		<AppFooter name="DevAhoy"/>
	</div>
</template>

<script>
import Firebase from 'firebase'

import config from '../../firebase.token'
import AppHeader from './Header'
import ChatBox from './ChatBox'
import AppFooter from './Footer'

// const app = Firebase.initializeApp(config)
// const db = app.database()
// let chatsRef = db.ref('chats')

export default {
	name: 'chatapp',
	components: {
		AppHeader,
		ChatBox,
		AppFooter
	},

	// firebase: {
	// 	chats: chatsRef
	// },

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
    addMessage(message) {
      chatsRef.push(message)
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