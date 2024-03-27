import axios from 'axios'

export async function buscaCep(cep: string){
  const valueCep = cep;

  return axios.get(`https://viacep.com.br/ws/${valueCep}/json/`) 
      .catch((error) => console.log(error));
}


