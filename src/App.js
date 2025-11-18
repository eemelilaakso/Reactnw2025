import React, {useState} from 'react'
import './App.css';
import Laskuri from './Laskuri'
import Viesti from './Viesti';
import Posts from './Posts'

const App = () => {


  //App komponentin tila
  const[showLaskuri, setShowLaskuri] = useState(false)
  const[showPosts, setShowPosts] = useState(false)


  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className="App">
      <h1>Hello React</h1>

      

      {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota Posts</button>}
      {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Näytä Posts</button>}
      {showPosts && <Posts/>}
      
      {showLaskuri && <Laskuri huomio={huomio} />}
      
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="tervehdys app komponentista" />
    </div>
  );
}

export default App;
