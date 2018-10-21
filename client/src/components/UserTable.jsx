import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Progress } from 'reactstrap';
import ReactTable from 'react-table';
import "react-table/react-table.css";


class UserTable extends Component {
    render() {
        const { users } = this.props.adminEvent;
        const columns = [
            {
                style: { display: 'flex', alignItems: 'center' },
                Header: <h3>Name</h3>,
                accessor: 'user.name' // String-based value accessors!
            },
            {
                style: { display: 'flex', alignItems: 'center' },
                Header: <h3>Phone Number</h3>,
                accessor: 'user.phone' // String-based value accessors!
            },
            {
                style: { display: 'flex', alignItems: 'center' },
                Header: <h3>Attendance Rate</h3>,
                accessor: 'probability' // String-based value accessors!
            },

        ]
        if (users) {
            console.log(users);
            return (
                <React.Fragment>
                    <ReactTable
                        defaultPageSize={5}
                        data={users}
                        columns={columns}
                        className="-striped -highlight"
                    />
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
