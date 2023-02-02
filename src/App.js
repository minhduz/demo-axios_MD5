import './App.css';
import CharactersContainer from './components/CharactersContainer';
import Result from './components/Result';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import { useState } from 'react';
const URL = 'https://breakingbadapi.com/api/'

function App() {
  const [character,setChatacter] = useState(null);

  axios
  .get(URL)
  .then((response) => {
    setChatacter(response.data)
    console.log(character);
  })
  .catch((error) => {
    console.log(error.message);
  })
  return (
    <div>
      <CharactersContainer>
        <SearchBox/>
        <Result/>
      </CharactersContainer>

    </div>
  );
}

export default App;
