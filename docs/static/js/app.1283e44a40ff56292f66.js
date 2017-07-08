webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(e,t,s){"use strict";t.a={apiKey:"AIzaSyC4ONjHJp_CyeOo90sGwAFMNTNtp9v2xQw",authDomain:"vue-chat-f7918.firebaseapp.com",databaseURL:"https://vue-chat-f7918.firebaseio.com",projectId:"vue-chat-f7918",storageBucket:"vue-chat-f7918.appspot.com",messagingSenderId:"1039141521254"}},,,,,,,,,,,,,function(e,t,s){function a(e){s(42)}var n=s(5)(s(34),s(80),a,null,null);e.exports=n.exports},function(e,t,s){function a(e){s(40)}var n=s(5)(s(35),s(78),a,null,null);e.exports=n.exports},,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(19),n=s.n(a),i=s(17),o=n.a.initializeApp(i.a),c=o.database(),r=c.ref("chats");t.default={name:"app",firebase:{chats:r},data:function(){return{title:"Vue Chat",subtitle:"Chat Application with Vue.js + Firebase",newMessage:{name:"Chuck Norris",message:"",isEditable:!1},editMessage:""}},methods:{addMessage:function(){r.push(this.newMessage),this.newMessage.message=""},clearChat:function(){r.remove()},clickEdit:function(e){r.child(e[".key"]).child("isEditable").set(!0)},editChat:function(e){r.child(e[".key"]).child("message").set(e.message),r.child(e[".key"]).child("isEditable").set(!1)},deleteMessage:function(e){r.child(e[".key"]).remove()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(19),n=(s.n(a),s(17),s(77)),i=s.n(n),o=s(75),c=s.n(o),r=s(76),l=s.n(r);t.default={name:"chatapp",components:{AppHeader:i.a,ChatBox:c.a,AppFooter:l.a},data:function(){return{title:"Vue Chat",subtitle:"Chat Application with Vue.js + Firebase",newMessage:{name:"Chuck Norris",message:""}}},methods:{addMessage:function(e){chatsRef.push(e)},clearChat:function(){chatsRef.remove()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ChatBox",props:["chats"],data:function(){return{newMessage:{name:"Chuck Norris",message:""}}},methods:{addMessage:function(){this.$parent.addMessage(this.newMessage),this.newMessage.message=""}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"appFooter",props:["name"]}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"appHeader",props:["title","subtitle"]}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(32),n=s(33),i=s.n(n),o=s(30),c=s.n(o),r=s(31),l=s.n(r);a.a.config.productionTip=!1,a.a.use(i.a),new a.a({el:"#app",template:"<App />",components:{App:c.a,ChatApp:l.a}})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,s){function a(e){s(43)}var n=s(5)(s(36),s(81),a,null,null);e.exports=n.exports},function(e,t,s){function a(e){s(44)}var n=s(5)(s(37),s(82),a,null,null);e.exports=n.exports},function(e,t,s){function a(e){s(41)}var n=s(5)(s(38),s(79),a,null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("AppHeader",{attrs:{title:e.title,subtitle:e.subtitle}}),e._v(" "),s("ChatBox",{attrs:{chats:e.chats}}),e._v(" "),s("AppFooter",{attrs:{name:"DevAhoy"}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"hero is-success"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),s("h2",[e._v(e._s(e.subtitle))])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"hero is-success"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),s("h2",[e._v(e._s(e.subtitle))])])])]),e._v(" "),s("section",{staticClass:"section chat-container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"box column is-8 is-offset-2"},[s("h2",{staticClass:"title"},[e._v("Chatbox")]),e._v(" "),s("div",{staticClass:"chat-messages has-text-left"},e._l(e.chats,function(t){return s("ul",{key:t},[s("li",{staticClass:"chat-message"},[s("strong",[e._v(e._s(t.name)+" : ")]),e._v(" "),t.isEditable?s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"chat.message"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.message},on:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13))return null;e.editChat(t)},input:function(e){e.target.composing||(t.message=e.target.value)}}}):s("span",[e._v(e._s(t.message))]),e._v(" "),s("span",{staticClass:"tag is-info is-hover",on:{click:function(s){e.clickEdit(t)}}},[e._v("Edit")]),e._v(" "),s("span",{staticClass:"tag is-danger is-hover",on:{click:function(s){e.deleteMessage(t)}}},[e._v("Del")])])])})),e._v(" "),s("form",{attrs:{id:"form"},on:{submit:function(t){t.preventDefault(),e.addMessage(t)}}},[s("div",{staticClass:"field has-addons"},[s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage.name,expression:"newMessage.name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.newMessage.name},on:{input:function(t){t.target.composing||(e.newMessage.name=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"control is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage.message,expression:"newMessage.message"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a message"},domProps:{value:e.newMessage.message},on:{input:function(t){t.target.composing||(e.newMessage.message=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"control"},[s("input",{staticClass:"button is-success",attrs:{type:"submit",value:"Post",disabled:""===e.newMessage.message}})])])])]),e._v(" "),s("div",{staticClass:"column is-1"},[s("span",{staticClass:"tag is-danger clear-chat",on:{click:e.clearChat}},[e._v("Clear")])])])])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[e._v("Powered by "),s("a",{attrs:{href:"https://devahoy.com",target:"_blank"}},[e._v("DevAhoy")])]),e._v(" "),s("p",[e._v("Source Code : "),s("a",{attrs:{href:"https://github.com/Phonbopit/psru-vue-chat-workshop"}},[e._v("https://github.com/Phonbopit/psru-vue-chat-workshop")])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section chat-container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"box column is-8 is-offset-2"},[s("h2",{staticClass:"title"},[e._v("Chatbox")]),e._v(" "),s("div",{staticClass:"chat-messages has-text-left"},e._l(e.chats,function(t){return s("ul",[s("li",[s("strong",[e._v(e._s(t.name)+" : ")]),e._v(e._s(t.message))])])})),e._v(" "),s("form",{attrs:{id:"form"},on:{submit:function(t){t.preventDefault(),e.addMessage(t)}}},[s("div",{staticClass:"field has-addons"},[s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage.name,expression:"newMessage.name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.newMessage.name},on:{input:function(t){t.target.composing||(e.newMessage.name=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"control is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage.message,expression:"newMessage.message"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a message"},domProps:{value:e.newMessage.message},on:{input:function(t){t.target.composing||(e.newMessage.message=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"control"},[s("input",{staticClass:"button is-success",attrs:{type:"submit",value:"Post",disabled:""===e.newMessage.message}})])])])]),e._v(" "),s("div",{staticClass:"column is-1"},[s("span",{staticClass:"tag is-danger clear-chat",on:{click:e.$parent.clearChat}},[e._v("x")])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[e._v("Powered by "),s("a",{attrs:{href:"https://devahoy.com",target:"_blank"}},[e._v(e._s(e.name))])])])])])},staticRenderFns:[]}}],[39]);
//# sourceMappingURL=app.1283e44a40ff56292f66.js.map