import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './app.styles.scss';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>      
        <Switch>
          <Route path='/' component={Homepage}/>
        </Switch>
    </div>
  );
}
export default App;
