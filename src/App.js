import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
    		<Route path="/" exact component={Home} />
    	</Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
