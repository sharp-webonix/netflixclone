import './App.css';
import Nav from '../src/Components/nav/Nav';
import Header from '../src/Components/header/Header';
import Content from '../src/Components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '00cc4b4770c22d9316433c56df5c5eae',
};


const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content />
    </div>
  );
};

export default App;