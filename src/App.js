import './App.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Left from './components/left/Left';
import Right from './components/right/Right';

const App = () => {
  return (
    <>
    <Header>
    </Header>
    <Hero>
      <Left />
      <Right />
    </Hero> 

    </>
  )
}

export default App;
