<template lang="pug">
  .widget.bot
    .headline Support
    .chat-cont#chat-cont(v-chat-scroll='1')
      .chat
        .message(v-for='message in messages',:class='{ "bot-text": message.from=="bot", "user-text": message.from=="user" }') 
          span {{message.text}}
          .actions(v-if='message.action')
    .enter
      input(type='text' ref='chatInput' placeholder='Type here...' v-model="message" @keyup.enter="submitMessage")
      .hints(v-if='hints')
        .hint(v-for='hint in hints' v-if='hint&&message.toLowerCase()!=hint.name' @click='acceptHint(hint.name)') 
          span.title {{hint.name}}
          span.subtitle(v-if='hint.hint') {{hint.hint}}
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return{
      hints: [],
      message: '',
      messages: [
        {
          from: 'bot',
          text: 'Здравствуйте, Вадим Жданов!'
        },
        {
          from: 'bot',
          text: 'Как я могу вам помочь?'
        }
      ]
    }
  },
  watch:{
    'message': function(){
      this.clickButton(this.message)
      if(!this.message){
        this.hints=[]
      }
    }
  },
  sockets:{
    messages: function(val){
      console.log(val)
    },
    hints: function(val){
      if(val!=null){
        this.hints=val
      }else{
        this.hints=[]
      }
    }
  },
  methods: {
    acceptHint: function(hint){
      this.message=hint.charAt(0).toUpperCase() + hint.slice(1)
      this.$refs.chatInput.focus()
      this.hints=[]
    },
    submitMessage: function(){
      this.messages.push(
        {
          from: 'user',
          text: this.message
        }
      )
      this.message=''
    },
    clickButton: function(val){
      this.$socket.emit('checkMessage', val.toLowerCase());
    }
  },
}
</script>

<style lang="sass" scoped>
.bot
  max-width: 500px
  flex: 1
  height: 500px
  display: flex
  flex-direction: column
  .chat-cont
    flex: 1
    overflow: scroll
    padding-top: 50px
  .chat
    padding: 0 16px
    display: flex
    flex-direction: column
    justify-content: flex-end
    box-sizing: border-box
    padding-bottom: 16px
    flex-grow: 1
    .bot-text
      background: #e0e0e0
      max-width: 80%
      width: fit-content
      padding: 8px 16px
      box-sizing: border-box
      opacity: .7
      border-bottom-left-radius: 10px
      border-top-right-radius: 10px
      border-bottom-right-radius: 10px
      margin-bottom: 32px
      box-shadow: 0px 13px 13px -5px rgba(224,224,224, .8)
      align-self: flex-start
      position: relative
      &:before
        content: ''
        position: absolute
        top: -35px
        left: -20px
        background: url('../../assets/img/roboto-logo.svg')
        width: 48px
        height: 48px
        background-size: cover
    .user-text
      background: #03a9f4
      color: #fff
      max-width: 250px
      width: fit-content
      padding: 8px 16px
      box-sizing: border-box
      border-bottom-left-radius: 10px
      border-top-left-radius: 10px
      border-bottom-right-radius: 10px
      opacity: .7
      box-shadow: 0px 13px 16px -9px rgba(3, 169, 244, 1)
      align-self: flex-end
      margin-bottom: 32px
  .hints
    position: absolute
    bottom: 60px
    left: 0
    right: 0
    border-radius: 5px
    border: 1px solid #e0e0e0
    .hint
      padding: 5px 16px
      display: flex
      flex-direction: column
      transition: all .3s
      &:hover
        background: #e0e0e0
        cursor: pointer
        .subtitle
          color: #757575
      .title
        font-size: 14px
        &:first-letter 
          text-transform: uppercase
      .subtitle
        font-size: 11px
        color: #bdbdbd
        &:first-letter 
          text-transform: uppercase
  .enter
    height: 60px
    display: flex
    align-items: center
    justify-content: center
    border-top: 1px solid #e0e0e0
    position: relative
    input
      width: 100%
      height: 58px
      font-size: 16px
      border-width: 0
      padding: 24px 32px
      box-sizing: border-box
      &::placeholder
        color: #e0e0e0
      &:focus
        outline: none
  .headline
    height: 60px
    display: flex
    align-items: center
    justify-content: center
    border-bottom: 1px solid #e0e0e0
</style>
