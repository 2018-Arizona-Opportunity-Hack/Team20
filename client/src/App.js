import React, { Component } from 'react';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Orgs from './components/Orgs';
import AdminView from './components/AdminView';

import { fetchEvents } from './redux/actions/eventActions';


class App extends Component {
  componentDidMount(){
    this.props.fetchEvents();
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/orgs/:id/events" component={Orgs} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
