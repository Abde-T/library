import'./App.css';
import Nav from "./component/Nav";
import Landing from "./component/Landing"
import Highlighs from './component/Highlighs';
import Featured from './component/Featured';
import Discounted from './component/Discounted';
import Explore from './component/Explore';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlighs />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
