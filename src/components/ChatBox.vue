<template>
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
          <span class="tag is-danger clear-chat" v-on:click="$parent.clearChat">x</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: 'ChatBox',
		props: ['chats'],
		data() {
			return {
	      newMessage: {
	        name: 'Chuck Norris',
	        message: ''
	      }
			}
		},
		methods: {
			addMessage() {
				this.$parent.addMessage(this.newMessage)
				this.newMessage.message = ''
			}
		}
	}
</script>

<style>
	
</style>