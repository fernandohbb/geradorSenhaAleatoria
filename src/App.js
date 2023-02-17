import './App.css';
import { useState,useEffect} from "react"
import { Input } from './componentes/Input';
import { BtnGerar } from './button/BtnGerar';
import { BtnCopiar } from './button/BtnCopiar';
import { Title } from './componentes/Title';
import { QntSenha } from './componentes/QntSenhas';



function App() {
        const[numero,setNumero] = useState("");
        const[senhaGerada,setSenhaGerada] = useState(0);

        useEffect(
          () => {
                document.title =  numero;
              
        }
      )

return (
    <div className="App">
        <Title />
        <Input 
           numero = {numero}
        />
       <BtnGerar
           senhaGerada={senhaGerada}
           setSenhaGerada={setSenhaGerada}
           setNumero={setNumero}
       />
       <BtnCopiar 
           numero={numero}
       />
       <QntSenha 
       senhaGerada={senhaGerada}
       />
    </div>
  );
}

export default App;
