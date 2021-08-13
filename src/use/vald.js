import {required, email, minLength, maxLength, helpers} from '@vuelidate/validators'
import * as yup from 'yup';

export const formValidations  = {
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


export const formSchema = {
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
    validation: yup.object({
        email: yup.string().email().required(),
        name: yup.string().min(2).required(),
        password: yup.string().min(8).required(),
        city: yup.string().required(),
    })
    ,
    values: {
        email: 'example@example.com',
        name: 'John Smith',
        password: 'p@$$vv0rd',
        city: 'helsinki',
    },
  };

