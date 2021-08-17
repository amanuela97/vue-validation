import * as yup from 'yup';
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

