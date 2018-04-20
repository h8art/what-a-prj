<template lang="pug">
.admin
  .widget.entry-block
    input.text-input(type='text' placeholder='Введите команду')
    .hint
      span Введите команду на которую будет откликаться бот
      br
      span Параметры для полей ввода необходимо ввести в виде ${НАЗВАНИЕ ПОЛЯ ВВОДА}
</template>
<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.admin
  display: grid
  .entry-block
    width: fit-content
    padding: 24px 32px
    .text-input
      font-size: 20px
      min-width: 350px
      border-width: 0
      border-bottom: 1px solid #9e9e9e
      padding-bottom: 5px
      &:focus
        outline: none
    .hint
      color: #9e9e9e
      margin-top: 12px
      font-size: 12px
</style>
