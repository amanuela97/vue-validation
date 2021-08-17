import {required, email, minLength, maxLength, helpers} from '@vuelidate/validators'

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
