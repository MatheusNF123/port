import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <section className='container-all'>
    <Header/>
    <Home/>
    <About/>
    <Projetos/>
    <Contato/>
    </section>
  );
}

export default App;
