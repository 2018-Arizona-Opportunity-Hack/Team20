import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Progress } from 'reactstrap';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';

import SignupModal from './SignupModal';
import AdminView from './AdminView';

class Dashboard extends Component {

  render() {
    const { events } = this.props;
    const renderStatus = (volunteers, volunteers_required) => {
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
          
          <div style={{display: 'flex', justifyContent: "space-between"}}>
            <span style ={{
              color: alertStatus ,
              transition: 'all .3s ease',
            }}>
            &#x25cf;&nbsp;&nbsp;
               <span style={{ color: 'black' }}>{volunteers_required} volunteers needed</span>
            </span>
            {/* <Link to={`/admin`}></Link> */}
            <SignupModal />
          </div>
        ) 
    }
    // console.log(moment())
    // console.log(events)
    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'Time',
        accessor: 'time' // String-based value accessors!
      },
      {
        Header: 'Status',
        accessor: 'events', // String-based value accessors!
        Cell: (props) => renderStatus(props.original.volunteers, props.original.volunteers_required)
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

}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);