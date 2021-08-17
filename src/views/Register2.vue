<template>
    <h1>form with Vee-Validate</h1>
    <VeeForm
      :schema="formSchema"
    />
    <router-link to="/" class="link">Go to Form(vue-lidate)</router-link>
</template>

<script>
import VeeForm from '../components/Vee-Form.vue'
import {formSchema} from '../use/vee-validate'

export default {
  name: 'Register2',
  components: {
    VeeForm
  },
  setup(){
    return{
      formSchema
    }
  },
    
}
</script>


