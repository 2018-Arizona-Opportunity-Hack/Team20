import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signupEvent } from '../redux/actions/eventActions';
import { Button } from "smooth-ui";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';

import SignupModal from './SignupModal';


class Orgs extends Component {

  render() {
    const { events } = this.props;
    const renderStatus = (remaining, desiredAttendees, event_ID) => {
      let alertStatus;
      let percentageFilled = (remaining / desiredAttendees * 100);
      if (percentageFilled >= 100) {
        alertStatus = "red";
      } else if (percentageFilled > 0 && percentageFilled < 50) {
        alertStatus = "green";
      } else if (percentageFilled >= 50 && percentageFilled <= 100) {
        alertStatus = "yellow";
      }
      return (

        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            color: alertStatus,
            transition: 'all .3s ease',
          }}>
            &#x25cf;&nbsp;&nbsp;
               <span style={{ color: 'black' }}>{Math.ceil(remaining)} volunteers needed</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", paddingRight: "20px" }}>
            <Link to={`/dashboard/admin/event/${event_ID}`}>
              <Button variant="info">
                Admin
               </Button>
            </Link>
            <SignupModal event_ID={event_ID} />
          </span>
        </div>
      )
    }
    const columns = [
      {
        style: { display: 'flex', alignItems: 'center' },
        Header: <h3>Name</h3>,
        maxWidth: 300,
        accessor: 'title' 
      },
      {
        style: { alignSelf: 'center' },
        Header: <h3>Status</h3>,
        accessor: 'events', 
        Cell: (props) => renderStatus(props.original.remaining, props.original.desiredAttendees, props.original.id)
      },
      {
        style: { display: 'flex', alignItems: 'center' },
        Header: <h3>Date</h3>,
        maxWidth: 300,
        accessor: `date`, 
        Cell: (props) =>
          <div style={{display: "flex", justifyContent:"space-between", flexDirection:"column"}}>
          <span>

              {moment(props.original.date).format('LL')}
          </span>
          <span>

              {moment(props.original.date).format('LT')}
          </span>
          <span>

              {moment(props.original.date, "YYYYMMDD").fromNow()}
          </span>
          </div>
      },
    ]
    if (!events.length) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <div style={{
            position: "absolute",
            left: "0",
            width: "250px",
            height: "100%",
            display: "flex",
            color: "white",
            flexDirection: "row",
            backgroundColor: "grey"
          }}>

            <div style={{ width: "100%", height: "200px", textAlign: "center", marginTop: "5px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ marginBottom: "50px" }}>
                <h2 style={{ color: "white" }}> Paz de Cristo </h2>
                <h5 style={{ color: "white" }}> 124 n. random st </h5>
                <span>
                  123-123-1312
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              </div>
            </div>
          </div>
          <div style={{ margin: "0 0 0 250px" }}>
            <span style={{
              width: "100%"
            }}>
              <ReactTable
                style={{ height: window.innerHeight }}
                defaultPageSize={10}
                data={events}
                columns={columns}
                className="-striped -highlight"
              />
            </span>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  events: state.events,
})

const mapDispatchToProps = {
  signupEvent
}


export default connect(mapStateToProps, mapDispatchToProps)(Orgs);
