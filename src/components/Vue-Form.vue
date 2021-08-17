<template>
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email">
    <span v-if="v.email?.$error">
    {{v.email?.$errors[0].$message}}
    </span>
    <label for="password">New Password</label>
    <input type="password" name="password" v-model="password">
    <span v-if="v.password?.$error">
    {{v.password?.$errors[0].$message}}
    </span>
    <label for="username">Username</label>
    <input type="username" name="username" v-model="username">
    <span v-if="v.username?.$error">
    {{v.username?.$errors[0].$message}}
    </span>
    <label for="city">Your City</label>
    <select name="city" v-model="city">
    <option value="Helsinki">Helsinki</option>
    <option value="Munich">Munich</option>
    <option value="Addis Ababa">Addis Ababa</option>
    <option value="Paris">Paris</option>
    </select>
    <button @click="submitForm" >Register</button>
</template>    

<script>
export default {
 name: 'Vue-Form',
 emits:['addData','input','vueForm'],
 props:{
    schema:{
        type: Object,
        default:[]
    },
    v:{
        type: Object,
        default: {}
    },
    email:{
        type: String,
        default: ''
    },
    password:{
        type: String,
        default: ''
    },
    username:{
        type: String,
        default: ''
    },
    city:{
        type: String,
        default: ''
    },
 },
  watch:{
    email(val){
      this.$emit('input', {field: 'email', value: val})
    },
    username(val){
        this.$emit('input', {field: 'username', value: val})
    },
    password(val){
        this.$emit('input', {field: 'password', value: val})
    },
    city(val){
        this.$emit('input', {field: 'city', value: val})
    },
    
  },
  methods: {
    submitForm(val){
      if(val){
          this.$emit('vueForm')
      }
      
    },
  },
}
</script>


<style scoped>
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