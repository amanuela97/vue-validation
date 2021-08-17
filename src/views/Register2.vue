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
import { Field as Vfield, Form as Vform, ErrorMessage as VErrorMessage } from 'vee-validate'
import * as yup from 'yup';

export default {
  name: 'Register2',
  components: {
    Vfield,
    Vform,
    VErrorMessage
  },
  setup(){
    const formSchema = {
      fields: [
        {
          label: 'Your Name',
          name: 'name',
          as: 'input',
        },
        {
          label: 'Your Email',
          name: 'email',
          as: 'input',
        },
        {
          label: 'Your Password',
          name: 'password',
          as: 'input',
        },
        {
          label: 'Your City',
          name: 'city',
          as: 'select',
          children: [
            {
              tag: 'option',
              value: 'helsinki',
              text: 'helsinki',
            },
            {
              tag: 'option',
              value: 'munich',
              text: 'munich',
            },
            {
              tag: 'option',
              value: 'paris',
              text: 'paris',
            },
            {
              tag: 'option',
              value: 'addis ababa',
              text: 'addis ababa',
            },
          ],
        },
      ],
      // validation for fields
      validation: yup.object({
          email: yup.string().email().required(),
          name: yup.string().min(2).required(),
          password: yup.string().min(8).required(),
          city: yup.string().required(),
      })
      ,
      //initial values
      values: {
          email: 'example@example.com',
          name: 'John Smith',
          password: 'p@$$vv0rd',
          city: 'helsinki',
      },
    };
    return{
      schema: formSchema
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


