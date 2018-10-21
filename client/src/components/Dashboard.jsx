import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchEvent } from '../redux/actions/eventActions';

import {
  Button,
  Typography
} from "smooth-ui";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';

import SignupModal from './SignupModal';


class Dashboard extends Component {

  render() {
    const { events } = this.props;
    const renderStatus = (volunteers, volunteers_required, event_ID) => {
      let alertStatus;
      let percentageFilled = (volunteers / volunteers_required * 100);
      if(percentageFilled === 100){
        alertStatus = "#57d500"
      }else if(percentageFilled > 0 && percentageFilled < 50){
        alertStatus = "#ff2e00";
      }else if (percentageFilled >= 50 && percentageFilled <= 100) {
        alertStatus = "#ffbf00";
      }
        return (
          
          <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <span style ={{
              color: alertStatus ,
              transition: 'all .3s ease',
            }}>
            &#x25cf;&nbsp;&nbsp;
               <span style={{ color: 'black' }}>{volunteers_required} volunteers needed</span>
            </span>
            <span style={{display: "flex"}}>

              <Link to={`/dashboard/admin/event/${event_ID}`}>
                Admin
              </Link>
              <SignupModal event_ID={event_ID}/>
            </span>
          </div>
        ) 
    }
    const columns = [
      { 
        style: { display: 'flex', alignItems: 'center' },
        Header: <h3>Name</h3>,
        accessor: 'name' // String-based value accessors!
      },
      {
        style: { display: 'flex', alignItems: 'center' },        
        Header: <h3>Time</h3>,
        accessor: 'time' // String-based value accessors!
      },
      {
        Header: <h3>Status</h3>,
        accessor: 'events', // String-based value accessors! 
        Cell: (props) => renderStatus(props.original.volunteers, props.original.volunteers_required, props.original.id)
      },
    ]
    if (events.length) {
      return (
        <div>
          <ReactTable
            // showPaginationBottom={false}
            defaultPageSize={5}
            data={events}
            columns={columns}
            className="-striped -highlight"
          />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  events: state.events,
})

const mapDispatchToProps = {
  fetchEvent
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);