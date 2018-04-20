<template lang="pug">
  .sidebar
    .currPage(:style='{ "top": top + "px" }')
    router-link(to='/main',@click="changeCurr(1)")
      i.material-icons home
    router-link(to='/foo',@click="changeCurr(2)")
      i.material-icons credit_card
    router-link(to='/bar',@click="changeCurr(3)")
      i.material-icons navigation
    router-link(to='/123',@click="changeCurr(4)")
      i.material-icons local_gas_station
</template>
<script>
export default {
  data(){
    return{
      top: 10
    }
  },
  methods: {
    changeCurr: function(){
      switch(this.$route.path){
        case '/main': 
          this.top = 10
          break;
        case '/foo': 
          this.top = 89
          break;
        case '/bar': 
          this.top = 167
          break;
        case '/123': 
          this.top = 245
          break;
      }
    }
  },
  watch:{
    '$route.path': function(){
        this.changeCurr()
    }
  },
  mounted(){
    this.changeCurr()
  }
}
</script>

<style lang="sass" scoped>
  .sidebar
    height: calc(100vh - 80px)
    border-right: 1px solid #e0e0e0
    width: 79px
    position: relative
    .currPage
      width: 3px
      height: 68px
      border-radius: 5px
      background: #03a9f4
      position: absolute
      right: 0
      transition: top .3s 
    a
      display: flex
      align-items: center
      justify-content: center
      text-decoration: none
      padding: 15px 0
      margin: 10px 0
      width: 80px
    .router-link-active
      .material-icons
        -webkit-text-stroke: 2px #03a9f4
    .material-icons
      -webkit-text-stroke: 2px #e0e0e0
      font-size: 38px
      color: #fff
      transition: all .3s
      &:hover
        -webkit-text-stroke: 2px #03a9f4
        
</style>

