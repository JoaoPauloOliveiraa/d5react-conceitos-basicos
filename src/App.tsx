import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App = ()=>{
const [name, setName] = useState('João Paulo');
const [age, setAge] = useState(90);
const [bg, setBg] = useState('#FF0000');

const [list, setList] = useState([
  "O Rato roeu a roupa do rei de roma",
  "Aprendendo react",
  "Mais uma frase de exepmlo"
])

const handle30 = () => {
  setAge(30);
  setBg('#00FF00');
}

const handle90 = () => {
  setAge(90);
  setBg('#FF0000');
}

const handleName = () => {
  setName('Joao Paulo de Oliveira');
}
const  handleClick = () => {
  setBg('#0000FF');
}
  return (
    <div style={{backgroundColor: bg}}>
     <Header name={name} age={age}/>
      {age === 90 &&
        <button onClick={handle30}>Tenho 30 anos</button>
      }

      {age === 30 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      <hr />

      <ul>
        {list.map((frase, index)=>(
          <li key={index}>{frase}</li>
        ))}
      </ul>

     <Footer />
    </div>
  )
}

export default App;