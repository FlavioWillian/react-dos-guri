    import {
    FormLabel,
    Input,
    Button,

  } from '@chakra-ui/react'
  import { Form, Formik } from 'formik';
  interface FormCepProps{
     cep?:string
  }

export const FormCep : React.FC<FormCepProps> = props => {
    const { subscribeFormCep, isLoading = false } = props;
    return (
        <>
       <Formik
            initialValues={props}
            validationSchema={props}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
            }}
            validateOnBlur
           validateOnChange
           
        > 
        {({ values, handleChange, handleSubmit, setFieldTouched }) => {
          return (
        <Form>
        <FormLabel>CEP</FormLabel>
        <Input
          id="cep"
          inputMode={'text'}
          value={values?.cep} 
          placeholder='Digite seu CEP' 
          onChange={e => { handleChange(e); }}
          onBlur={() => {
            setFieldTouched('cep');
          }}
          />
        <Button
            mt={4}
            colorScheme='teal'
            isLoading={isLoading}
            disabled={!values.cep || isLoading}
            type='submit'
            onClick={() => handleSubmit()}
          >
            Enviar
          </Button>
        </Form>
        );}}
        </Formik>
        </>
    );
}
