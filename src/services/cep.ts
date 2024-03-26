import axios from 'axios'

//const api = axios.create();
interface cepi {
  cep?: string,
  logradouro?: string,
  complemento?: string,
  bairro?: string,
  localidade?: string,
  uf?: string,
  ibge?: string,
  gia?: string,
  ddd?: string,
  siafi?: string,

}
export async function buscaCep(cep: string): Promise<cepi[]> {
  const valueCep = cep;
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://viacep.com.br/ws/${valueCep}/json/`,
    headers: { 'Content-Type': 'application/json' }
  };


  axios.request(config)
      .then((response) => {
        //  console.log(JSON.stringify(response.data));
        const data = JSON.stringify(response.data);
        return data;
      })
      .catch((error) => {
        return console.log(error);
      })

}


