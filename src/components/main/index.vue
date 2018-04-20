<template lang="pug">
.content
  .first-block
  bot
</template>
<script>
import Bot from '../global/Bot.vue'
export default {
  components: { Bot }
}
</script>

<style lang="sass" scoped>
.content
  display: flex
  .second-block
    width: 600px
    height: 300px
    border-radius: 5px
    background: #fff
    border: 1px solid #e0e0e0
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05)
    margin-left: 32px
</style>
