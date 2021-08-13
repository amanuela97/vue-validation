<template>
  <h1>Welcome {{user}}</h1>
  <button @click="back">Go Back</button>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: ['user'],
  methods:{
    back(){
      this.$router.replace({name: 'Register'})
    }
  }
}
</script>
<style scoped>
button{
  padding: 10px;
  width: 50%;
  align-self: center;
  background: lightseagreen;
  font-size: x-large;
  cursor: pointer
}
li{
  list-style: none;
}
</style>
