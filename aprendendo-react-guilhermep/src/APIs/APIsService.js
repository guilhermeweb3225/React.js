//funçao criada para trazer as infromaçoes da API
export const APIsService= async (finalizador, parametros) => {
    try{
        //link da API da DNC
        const url = new URL(`https://dnc-react-api.vercel.app/files/${finalizador}`)
        const response = await fetch(url ,
            {
                method: 'GET',
            })
            if(!response.ok){
                //o THROW interrompe altomaticamente a execuçao do codigo
                //"response.status"verifica os status da resosta(404,200,...)
                throw new Error(`erro:${response.status}`);
            }
            //si a condiçao anterior nao capitar erro, o codigo ira continuar
            const dados= await response.json()
            //retorna os dados da API, para quem estiver chamando a funçao
            return dados
    }catch(erro){
        console.error('Catch error:' , erro)
    }
}