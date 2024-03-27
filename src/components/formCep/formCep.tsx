import {
  FormLabel,
  Input,
  Button,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
}
  from '@chakra-ui/react'
import { Form, Formik } from 'formik';
import { buscaCep } from '../../services/cep';
import { useState } from 'react';

interface FormCepProps {
  cep?: string
}


export const FormCep: React.FC<FormCepProps> = props => {
  //const { subscribeFormCep, isLoading = false } = props;
  const isLoading = false;
  const [fields, setFields] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  });
  return (
    <>
      <Formik
        initialValues={props}
        //validationSchema={props}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={async (values, actions) => {
          const responseBuscaCep = await buscaCep(values.cep);
          //console.log(values.cep);
          console.log(responseBuscaCep);
          setFields({
            ...fields, localidade: responseBuscaCep.data.localidade,
            logradouro: responseBuscaCep.data.logradouro,
            bairro: responseBuscaCep.data.bairro,
            uf: responseBuscaCep.data.uf,
            ibge: responseBuscaCep.data.ibge,
            gia: responseBuscaCep.data.gia,
            ddd: responseBuscaCep.data.ddd,
          })
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
          );
        }}
      </Formik>
      <Box>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Logradouro</Th>
                <Th>Localidade</Th>
                <Th>Bairro</Th>
                <Th>UF</Th>
                <Th>IBGE</Th>
                <Th>GIA</Th>
                <Th>DDD</Th>
                <Th>SIAFI</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{fields.logradouro}</Td>
                <Td>{fields.localidade}</Td>
                <Td>{fields.bairro}</Td>
                <Td>{fields.uf}</Td>
                <Td>{fields.ibge}</Td>
                <Td>{fields.gia}</Td>
                <Td>{fields.ddd}</Td>
                <Td>{fields.siafi}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box >
    </>
  );
}
