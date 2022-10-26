import Header from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context/Provider';


function App() {
  
  return (
    <Provider>
      <section className='container-all'>        
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      </section>
    </Provider>
  );
}

export default App;
