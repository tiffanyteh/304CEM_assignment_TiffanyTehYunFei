import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import fav from "./fav";
import search from "./search";
import news from "./news";
import favourite from "./favourite";
import favnews from "./favnews";
import removefav from "./removefav";
import editfav from "./editfav";
import edit from "./edit";
import history from "./history";
import removehistory from "./removehistory";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/fav" component={fav} />
        <Route path="/search" component={search} />
        <Route path="/news" component={news} />
        <Route path="/favourite" component={favourite} />
        <Route path="/favnews" component={favnews} />
        <Route path="/removefav" component={removefav} />
        <Route path="/editfav" component={editfav} />
        <Route path="/edit" component={edit} />
        <Route path="/history" component={history} />
        <Route path="/removehistory" component={removehistory} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
