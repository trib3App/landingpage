import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.min.css'
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
    )
}
export default App;
