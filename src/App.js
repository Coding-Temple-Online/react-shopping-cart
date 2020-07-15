import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Todos from './views/Todos';
import Blog from './views/Blog';
import Racer from './views/Racer';
import Store from './views/Store';
import ShopSingle from './views/ShopSingle';
import Cart from './views/Cart';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>

        <main className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/todos' render={() => <Todos />} />
            <Route exact path='/blog' render={() => <Blog />} />
            <Route exact path='/racer' render={() => <Racer />} />
            <Route exact path='/store' render={() => <Store />} />
            <Route exact path='/store/:id' render={({match}) => <ShopSingle match={match} />} />
            <Route exact path='/cart' render={() => <Cart />} />
          </Switch>
        </main>

        <footer>

        </footer>
      </div>
    )
  }
}
