import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToasti'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home';
import Detail from './components/detail';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path= '/detail/:id'>
            <Detail/>
          </Route>
          <Route path='/wishlist'>
              <Wishlist/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
