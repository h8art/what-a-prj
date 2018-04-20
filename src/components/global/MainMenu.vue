<template lang="pug">
.menu
  .hamburger
    .city MSK
  .company
    span FleetCor
    //- i.material-icons more_vert
  .notify
    i.material-icons notifications_none
  .user
    .avatar
    .name Vadim Zhdanov
      i.material-icons arrow_drop_down

</template>
<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.menu
  height: 80px
  display: flex
  border-bottom: 1px solid #e0e0e0
  .user
    width: 300px
    display: flex
    align-items: center
    justify-content: center
    .avatar
      width: 25px
      height: 25px
      background: url('../../assets/img/user.jpg') no-repeat
      background-size: cover
      background-position: 50%
      margin-right: 10px
      border-radius: 3px
    .name
      display: flex
      align-items: center
      justify-content: center
      font-size: 700
      &:hover
        cursor: pointer
  .company
    flex: 1
    display: flex
    height: 100%
    align-items: center
    justify-content: space-between
    padding: 0 40px
    box-sizing: border-box
    i
      margin-top: 2px
      margin-left: 5px
    span
      font-size: 20px
  .notify
    width: 80px
    display: flex
    align-items: center
    justify-content: center
  .hamburger
    width: 80px
    height: 100%
    border-right: 1px solid #e0e0e0
    display: flex
    box-sizing: border-box
    justify-content: center
    align-items: center
    .city
      width: 30px
      height: 30px
      border-radius: 3px
      background: #b3e5fc
      font-size: 11px
      display: flex
      align-items: center
      justify-content: center
      color: #01579b 
</style>
