import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context/Provider';


function App() {
  
  return (
    <Provider>
      <section className='container-all'>        
      <Header/>
      <Home/>
      <About/>
      <Projetos/>
      <Contato/>
      </section>
    </Provider>
  );
}

export default App;
