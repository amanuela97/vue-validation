<template>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email">
    <span v-if="v$.email.$error">
      {{v$.email.$errors[0].$message}}
    </span>
    <label for="password">New Password</label>
    <input type="password" name="password" v-model="password">
    <span v-if="v$.password.$error">
      {{v$.password.$errors[0].$message}}
    </span>
    <label for="username">Username</label>
    <input type="username" name="username" v-model="username">
    <span v-if="v$.username.$error">
      {{v$.username.$errors[0].$message}}
    </span>
    <label for="city">Your City</label>
    <select name="city" v-model="city">
      <option value="Helsinki">Helsinki</option>
      <option value="Munich">Munich</option>
      <option value="Addis Ababa">Addis Ababa</option>
      <option value="Paris">Paris</option>
    </select>
    <button @click="submitForm">Register</button>
  </div> 
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {formValidations} from '../use/vald.js'

export default {
  name: 'Form',
  setup(){
    return{
      v$: useVuelidate()
    }
  },
  data(){
    return{
      email: '',
      password: '',
      username: '',
      city: 'Helsinki'
    }
  },
  validations(){
    return{
      ...formValidations,
    }
  },
  methods: {
    submitForm(){
      this.v$.$validate()
      if(!this.v$.$error){
        alert('Successful')
      }else{
        alert('Validation failed')
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  padding: 20px;
  width: 50vh;
  height: 80vh;
}
label, select{
  margin-bottom: 2px;
  align-self: flex-start;
  font-size: large;
}
input{
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-width: medium;
  border-color: lightseagreen;
}
button{
  padding: 10px;
  width: 50%;
  align-self: flex-end;
  background: lightseagreen;
  font-size: x-large;
  cursor: pointer
}
span{
  padding: 5px;
  background: lightgrey;
  color: red;
  margin-bottom: 10px;
  border-radius: 20px;
}
</style>
