import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard';
import AdminView from './components/AdminView';

import { fetchEvents } from './redux/actions/eventActions';


class App extends Component {
  componentDidMount(){
    this.props.fetchEvents();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/dashboard" component={Dashboard} />
          <Route exact path ="/dashboard/admin/event/:event_id" component={AdminView} />
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
