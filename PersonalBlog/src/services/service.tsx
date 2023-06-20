import axios from 'axios'

export const api = axios.create({

/*manipulação da api do backend*/
    baseURL: 'https://blogpessoalapi.onrender.com'
    
})

export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}


/*Parametros*/
export const login = async(url: any, dados:any, setDado: any) => {
    const resposta = await api.post(url, dados)
    /*retorno da aplicação*/
    setDado(resposta.data.token)
}