<template>
    <h1 id="h">Form with Vuelidate</h1>
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email">
    <span v-if="v$.email?.$error">
    {{v$.email?.$errors[0].$message}}
    </span>
    <label for="password">New Password</label>
    <input type="password" name="password" v-model="password">
    <span v-if="v$.password?.$error">
    {{v$.password?.$errors[0].$message}}
    </span>
    <label for="username">Username</label>
    <input type="username" name="username" v-model="username">
    <span v-if="v$.username?.$error">
    {{v$.username?.$errors[0].$message}}
    </span>
    <label for="city">Your City</label>
    <select name="city" v-model="city">
    <option value="Helsinki">Helsinki</option>
    <option value="Munich">Munich</option>
    <option value="Addis Ababa">Addis Ababa</option>
    <option value="Paris">Paris</option>
    </select>
    <button @click="submitForm" >Register</button>
    <router-link to="/register2" class="link">Go to Form(vee-lidate)</router-link>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength, maxLength, helpers} from '@vuelidate/validators'



export default {
  name: 'Register',
  setup(){
    const formValidations  = {
      email: {
          required: helpers.withMessage("email is required", required), 
          email
      },
      password: {
          required: helpers.withMessage("password is required", required), 
          minLength: minLength(6), 
          maxLength: maxLength(10)
      },
      username: {
          required: helpers.withMessage("username is required", required), 
          minLength: minLength(2), 
          maxLength: maxLength(24)
      },
      city: {
          required
      }
    }
    return{
      v$: useVuelidate(),
      formValidations
    }
  },
  data(){
    return{
      email: '',
      password: '',
      username: '',
      city: 'Helsinki',
    }
  },
  validations(){
    return{
      ...this.formValidations,
    }
  },
  methods: {
    submitForm(){
      const user = this.username;
      this.v$.$validate()
      if(!this.v$.$error){
        this.$router.push({name: 'Home', params: {user: user}})
        return
      }
      
    },
  },
}
</script>

<style>
#h{
  color: white;
}

.link{
  margin-top: 50px;
}


label, select{
  margin-bottom: 2px;
  align-self: flex-start;
  font-size: large;
}
input{
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-width: medium;
  border-color: lightseagreen;
  width: 80%;
}

button{
  padding: 10px;
  width: 50%;
  align-self: flex-end;
  background: lightseagreen;
  font-size: x-large;
  cursor: pointer;
}
span{
  padding: 2px;
  background: lightgrey;
  color: red;
  margin-bottom: 10px;
  border-radius: 20px;
}
</style>

