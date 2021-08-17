<template>
    <h1>form with Vee-Validate</h1>
    <Vform @submit="submitForm" :schema="schema" :validation-schema="schema.validation" :initial-values="schema.values">    
        <div v-for="{ as, name, label, children, ...attrs } in schema.fields" :key="name" >
            <label :for="name">{{ label }}</label>
            <template v-if="as !== 'select'" id="input">
                <Vfield :as="as" :id="name" :name="name" v-bind="attrs" />
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
    <router-link to="/" class="link">Go to Form(vue-lidate)</router-link>
</template>

<script>
import {formSchema as schema} from '../use/vee-validate'
import { Field as Vfield, Form as Vform, ErrorMessage as VErrorMessage } from 'vee-validate'

export default {
  name: 'Register2',
  components: {
    Vfield,
    Vform,
    VErrorMessage
  },
  data(){
    return{
      schema
    }
  },
  methods: {
    submitForm(val){
      if(val){
          this.$router.push({name: 'Home', params: {user: val.name}})
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
  margin-top: 20px;
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


