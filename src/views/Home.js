import React, { Component } from 'react'
import UserList from '../components/UserList';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            formName: '',
            formEmail: '',
            formLocation: ''
        }
    }

    handleSubmit = e => {
        e.preDefault();

        this.setState({
            users: this.state.users.concat({
                name: e.target.name.value,
                email: e.target.email.value,
                location: e.target.location.value
            }),
            formName: '',
            formEmail: '',
            formLocation: ''
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <form action="" style={{ marginTop: '25px' }} onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.state.formName} name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.state.formEmail} name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.state.formLocation} name="location" placeholder="Location" />
                            </div>
                            <input type="submit" className="btn btn-success" value="Submit"/>
                        </form>
                    </div>
                </div>
                  
                <UserList users={this.state.users} />
            </div>
        )
    }
}

// CREATE A FORM
// - name
// - email
// - location

// UsersList
// - Loop over list of users created from form

// User
// - Render each individual