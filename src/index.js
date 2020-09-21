import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import './index.css';

const App = () => {  
  console.log(process.env.PUBLIC_URL)
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path={process.env.PUBLIC_URL} component={List} exact />
          <Route path={`${process.env.PUBLIC_URL}/currency/:id`} component={Detail} exact />
          <Route component={NotFound} />
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
