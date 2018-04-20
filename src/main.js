import Vue from 'vue'
import App from './App.vue'
import Main from './components/main'
import VueSocketio from 'vue-socket.io';
import VueRouter from 'vue-router'
import VueChatScroll from 'vue-chat-scroll'
import Admin from './components/admin'

Vue.use(VueChatScroll)

Vue.use(VueSocketio, 'http://localhost:3083');

Vue.use(VueRouter)


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/main', component: Main },
  { path: '/admin', component: Admin },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]


const router = new VueRouter({ routes })

new Vue({
  sockets:{
    connect: function(){
      console.log('socket connected')
    }
  },
  el: '#app',
  router,
  render: h => h(App)
})
