import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard';

import { fetchEvents } from './redux/actions/eventActions';


class App extends Component {
  componentDidMount(){
    this.props.fetchEvents();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path ="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
})

const mapDispatchToProps = {
  fetchEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
