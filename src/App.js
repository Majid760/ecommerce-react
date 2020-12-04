import './App.css';
import {Route,Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';

const Hats=()=>(
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/hat" component={Hats}/>
      </Switch>
      
    </div>
  );
}

export default App;
