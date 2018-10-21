import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserTable from './UserTable';
import "react-table/react-table.css";

import {fetchEventAdmin} from "../redux/actions/adminEventAction";



class AdminView extends Component {
  componentDidMount(){
      const { event_id } = this.props.match.params;
      if(this.props.match){
          this.props.fetchEventAdmin(event_id)
      }else{
        return <div>Loading...</div>
      }
  }

  render() {
    const { adminEvent } = this.props;

    if (adminEvent) {
        return (
        <React.Fragment>
          <UserTable/>
        </React.Fragment>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
    adminEvent: state.adminEvent[0],
})

const mapDispatchToProps = {
    fetchEventAdmin
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
