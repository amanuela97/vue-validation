<template>
    <h1 id="h">Form with Vuelidate</h1>
    <Form
      from="form1"
      :v="v$"
      :email="email"
      :password="password"
      :username="username"
      :city="city"
      @form1="() => submitForm()"
      @input="(val) => onInputChange(val)"
    />
    <router-link to="/register2" class="link">Go to Form-2</router-link>
</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {formValidations} from '../use/vald.js'
import Form from '../components/Form.vue'

export default {
  name: 'Register',
  components:{
    Form,
  },
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
    setFields(val){
      switch(val.field) {
          case 'email':
            this.email = val.value;
            break;
          case 'username':
            this.username = val.value;
            break;
          case 'password':
            this.password = val.value;
            break;
          case 'city':
            this.city = val.value;
            break;
          default:
            console.log('field not found');
        }
    },
    submitForm(){
      const user = this.username;
      this.v$.$validate()
      if(!this.v$.$error){
        this.$router.push({name: 'Home', params: {user: user}})
        return
      }
      
    },
    onInputChange(val){
      if (val.value) {
        this.setFields(val)
      }else{
        this.setFields(val)
      }
    }
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
</style>

