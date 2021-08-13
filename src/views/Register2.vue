<template>
    <h1>form with Vee-Validate</h1>
    <Form
      from="form2"
      :schema="formSchema"
    />
    <router-link to="/" class="link">Go to Form-1</router-link>
</template>

<script>
import Form from '../components/Form.vue'
import {formSchema} from '../use/vald'

export default {
  name: 'Register2',
  components: {
    Form
  },
  setup(){
    return{
      formSchema
    }
  },
    
}
</script>


