    import {
    FormLabel,
    Input,
    Button,
    Box
  } 
  from '@chakra-ui/react'
  import { Form, Formik } from 'formik';
  import { buscaCep } from '../../services/cep'; 
  
  interface FormCepProps{
     cep?:string
  }
  

export const FormCep : React.FC<FormCepProps> = props => {
    //const { subscribeFormCep, isLoading = false } = props;
    const isLoading = false;
    const itemsCep = {
          cep: '',
          logradouro:'',
          complemento: '',
          bairro:'',
          localidade:'',
          uf:'',
          ibge:'',
          gia:'',
          ddd:'',
          siafi:''
        };
    console.log(itemsCep);
    return (
        <>
       <Formik
            initialValues={props}
            //validationSchema={props}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSubmit={(values, actions) => {
                const responseBuscaCep = buscaCep(values.cep);
                itemsCep.bairro = responseBuscaCep?.bairro;
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
                console.log(responseBuscaCep);
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
         <Box>
           {itemsCep.bairro}
         </Box>
        </>
    );
}
