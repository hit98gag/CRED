import './App.css';
import { Brandslove } from './components/Brandslove/Brandslove';
import { CredExperience } from './components/CredExperience/CredExperience';
import { Credsecurity } from './components/Credsecurity/Credsecurity';
import { Credstory } from './components/Credstory/Credstory';
import { Feelspecial } from './components/Fellspecial/Feelspecial';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Headsection } from './components/Headingsection/Headsection';
import { Imagesection } from './components/Imagesection/Imagesection';
import { Rating } from './components/Rating/Rating';
import {  Windowpeak } from './components/Windowpeak/Windowpeak';


function App() {
  return (
    <div className="App">
      <Header />
      <Headsection />
      <Imagesection />
      <Feelspecial/>
      <Brandslove />
      <CredExperience />
      <Windowpeak />
      <Credsecurity />
      <Credstory />
      <Rating />
      <Footer />

     
    </div>
  );
}

export default App;
