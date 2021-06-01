import axios from 'axios';
import React, { Component} from 'react';
import { Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            contacts: [],
        }
    }

    componentDidMount(){
        axios.get('/api/contacts')
            .then(response => {
                this.setState({
                    contacts: response.data
                })
            })
            .catch(err => console.log(err))
    }

    /*
    axios.delete(`/api/contact/${id}/delete`)
         .then(response => {
             var contacts = response.data;

             for (var i = 0; i < contacts.length; i++) {
                 if (contacts[i].id === id) {
                    //  contacts.splice(i, 1);
                    //  this.setState({ contacts: contacts})
                    alert('id'+id)
                 }
             }
         });
    */
    handleDeleteContact(id){
        axios.delete(`/api/contact/${id}/delete`)
         .then(response => {
             var contacts = this.state.contacts;

             for (var i = 0; i < contacts.length; i++) {
                 if (contacts[i].id === id) {
                     contacts.splice(i, 1);
                     this.setState({ contacts: contacts})
                 }
             }
         });
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Contacts</div>

                            <Link to="/add" className="btn btn-primary col-md-3 m-2 btn-sm mr-2">Add</Link>

                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.contacts !== null
                                                ? this.state.contacts.map(contact => (
                                                    <tr key={contact.id}>
                                                        <th scope="row">{contact.id}</th>
                                                        <td>{contact.name}</td>
                                                        <td>{contact.tel}</td>
                                                        <td>
                                                            <Link to={`/${contact.id}/edit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                                            <span className=" btn btn-danger btn-sm mr-2" onClick={this.handleDeleteContact.bind(this, contact.id)}>Delete</span>
                                                        </td>
                                                    </tr>
                                                    ))
                                                : null
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
