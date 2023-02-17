export const BtnGerar = ({senhaGerada,setSenhaGerada,setNumero}) => {

       const geradorDeSenha = ()=> {
          let senha = (Math.random().toString(20).substring(2,9));
          let senhaComLetraMaiuscula = senha.toUpperCase();
          setNumero(senhaComLetraMaiuscula);
          setSenhaGerada(senhaGerada + 1);

}

return(
       <button 
         className='btn1'
         onClick={geradorDeSenha}
       >
        Gerar
       </button>
    )
}