
import './build/css/app.css';
import { Header } from './components/header';
import { Proyects } from './components/proyects';
import { Skills } from './components/skills';

function App() {
  return (
    <>
      <Header/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#282c34" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,69.3C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <Skills/>

      <Proyects></Proyects>
      </>
  );
}

export default App;
