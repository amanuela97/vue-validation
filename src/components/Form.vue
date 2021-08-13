<template>
    <template v-if="from === 'form1'">
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
    <div v-if="from === 'form2'" >
    <Vform @submit="submitForm" :schema="schema" :validation-schema="schema.validation" :initial-values="schema.values" id="frm">    
        <div v-for="{ as, name, label, children, ...attrs } in schema.fields" :key="name" >
            <label :for="name">{{ label }}</label>
            <template v-if="as !== 'select'" id="inp">
                <Vfield :as="as" :id="name" :name="name" v-bind="attrs" style="" />
            </template>
            <VErrorMessage :name="name" />
            <select v-if="children && children.length">
                <option v-for="({ text, ...childAttrs }, idx) in children" :key="idx"  v-bind="childAttrs">
                    {{ text }}
                </option>
            </select>
        </div>
        <button>Register</button>  
    </Vform>  
    </div>
</template>

<script>
import { Field as Vfield, Form as Vform, ErrorMessage as VErrorMessage } from 'vee-validate'

export default {
 name: 'Form',
 emits:['addData','form1','form2','input'],
 components:{
     Vfield,
     Vform,
     VErrorMessage
 },
 props:{
    schema:{
        type: Object,
        default:[]
    },
    v:{
        type: Object,
        default: {}
    },
    from:{
        type: String,
        default: ''
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
      if(this.from === 'form1'){
          this.$emit('form1')
          return
      }else if(val){
          this.$router.push({name: 'Home', params: {user: val.name}})
      }
      
    },
  },
}
</script>


<style scoped>
div{
    display: flex;
    flex-direction: column;
    height: inherit;
    width: inherit;
}
label, select{
  margin-bottom: 2px;
  align-self: flex-start;
  font-size: large;
}
input, #inp{
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