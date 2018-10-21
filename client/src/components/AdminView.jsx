import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Progress } from 'reactstrap';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';

class AdminView extends Component {

  render() {
    const { event_id } = this.props.match.params;
    const { events } = this.props;
    console.log(event_id)
    // const renderStatus = (volunteers, volunteers_required) => {
    //   let alertStatus;
    //   let percentageFilled = (volunteers / volunteers_required * 100);
    //   if (percentageFilled === 100) {
    //     alertStatus = "#57d500"
    //   } else if (percentageFilled > 0 && percentageFilled < 50) {
    //     alertStatus = "#ff2e00";
    //   } else if (percentageFilled >= 50 && percentageFilled <= 100) {
    //     alertStatus = "#ffbf00";
    //   }
    //   return (

    //     <div style={{ display: 'flex', justifyContent: "space-between" }}>
    //       <span style={{
    //         color: alertStatus,
    //         transition: 'all .3s ease',
    //       }}>
    //         &#x25cf;&nbsp;&nbsp;
    //            <span style={{ color: 'black' }}>{volunteers_required} volunteers needed</span>
    //       </span>
    //     </div>
    //   )
    // }

    if (events.length) {
      return (
        <React.Fragment>
          asf
        </React.Fragment>
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


export default connect(mapStateToProps, mapDispatchToProps)(AdminView);