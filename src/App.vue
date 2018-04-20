<template lang='pug'>
#app
  main-menu
  .content
    sidebar
    router-view.router
</template>

<script>
import MainMenu from './components/global/MainMenu.vue'
import Sidebar from './components/global/Sidebar.vue'

export default {
  components: { MainMenu, Sidebar },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
.content{
  display: flex;
}
.router{
  width: 100%;
  min-height: calc(100vh - 80px);
  background: #F5F6FA;
  box-sizing: border-box;
  padding: 40px 40px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2F364B;
  font-weight: 500;
}
.widget{
  border-radius: 5px;
  background: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.05);
  overflow: hidden;
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: #e0e0e0;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

</style>
