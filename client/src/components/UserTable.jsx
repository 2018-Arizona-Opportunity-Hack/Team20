import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import ReactTable from 'react-table';
import PieChart from 'react-minimal-pie-chart';
import "react-table/react-table.css";
import moment from 'moment';

class UserTable extends Component {
    render() {
        const { adminEvent } = this.props;
        const { users } = this.props.adminEvent;
        const columns = [
            {
                style: { display: 'flex', alignItems: 'center' },
                Header: <h3>Name</h3>,
                maxWidth: 300,
                accessor: 'user.name' // String-based value accessors!
            },
            {
                style: { display: 'flex', alignItems: 'center' },
                Header: <h3>Phone Number</h3>,
                maxWidth: 300,
                accessor: 'user.phone' // String-based value accessors!
            },
            {
                style: { alignSelf: 'center' },
                Header: <h3>Attendance Probability</h3>,
                accessor: 'probability', // String-based value accessors!
                Cell: (props) =>
                    <Progress animated
                        color={props.original.probability * 100 < 33 ? "danger" :
                            props.original.probability * 100 < 66 ? "warning" :
                                props.original.probability * 100 <= 100 ? "success" : null
                        }
                        value={props.original.probability * 100}>
                        {props.original.probability * 100}%
                </Progress>
            },

        ]
        if (users) {
            console.log(users);
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
                                <h2 style={{ color: "white" }}>   {adminEvent.event.title}</h2>
                                <h5 style={{ color: "white" }}>   {moment(adminEvent.event.date).format('LL')}</h5>
                                <h5 style={{ color: "white" }}>   {moment(adminEvent.event.date).format('LT')}</h5>
                                <h6 style={{ color: "white" }}>   ({moment(adminEvent.event.date, "YYYYMMDD").fromNow()})</h6>
                                
                            </span>

                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h2 style={{ color: "white" }}>Status</h2>
                                <h1 style={{ color: "white", fontWeight: "600", fontSize: "50px" }}>{adminEvent.numberGoing / adminEvent.event.desiredAttendees * 100}</h1>
                                <PieChart
                                    style={{ backgroundColor: "white", borderRadius: "100%", width: "70%", margin: "0", padding: "0" }}
                                    data={[{ value: 1, key: 1, color: '#E38627' }]}
                                    reveal={adminEvent.numberGoing / adminEvent.event.desiredAttendees * 100}
                                    lineWidth={100}
                                    lengthAngle={180}
                                    animate
                                />
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
                                data={users}
                                columns={columns}
                                className="-striped -highlight"
                            />
                        </span>
                    </div>
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

}


export default connect(mapStateToProps, mapDispatchToProps)(UserTable);


