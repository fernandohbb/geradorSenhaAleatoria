export const BtnCopiar = ({numero}) => {

       const copiarSenha = () => {
        navigator.clipboard.writeText(numero);
        alert('Copiado!');
}

return(
    <button 
      className='btn2'
      onClick={copiarSenha}
    >
        Copiar
    </button>
    )
}