import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import UserTable from './UserTable';
import "react-table/react-table.css";

import { fetchEventAdmin } from "../redux/actions/adminEventAction";



class AdminView extends Component {
  componentDidMount() {
    const { event_id } = this.props.match.params;
      if (!this.props.match) {
        return <div>Loading...</div>
      } else {
        this.props.fetchEventAdmin(event_id)
    }
  }

  render() {
    const { adminEvent } = this.props;

    if (!adminEvent) {
      return <div>Loading...</div>
    } else {
      console.log(adminEvent)
      return (
        <React.Fragment>
          <UserTable />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  adminEvent: state.adminEvent[0],
})

const mapDispatchToProps = {
  fetchEventAdmin
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminView));

// export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
