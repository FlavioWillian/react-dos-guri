import axios from 'axios'

const api = axios.create();

export function buscaCep(data: any){
    const valueCep = data.cep;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `viacep.com.br/ws/${valueCep}/json/`,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        return console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        return console.log(error);
      });
      
}

