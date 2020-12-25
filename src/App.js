import React from 'react'
import {Switch, Route} from 'react-router-dom'


//Layouts
import MainLayout from './layouts/MainLayouts'
import HomepageLayout from './layouts/MainLayouts'

//Pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import './default.scss'


function App() {
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />        
        </Switch>
      </div>
    </div>
  );
}

export default App;
