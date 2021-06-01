import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link} from 'react-router-dom';

class Edit extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            tel: '',
        }
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleTelInputChange = this.handleTelInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/contact/${id}/edit`)
         .then((response) => {
             this.setState({
                 name: response.data.name,
                 tel: response.data.tel
             })
         })
         .catch(err => console.log(err));
    }

    handleNameInputChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleTelInputChange(e){
        this.setState({
            tel: e.target.value
        })
    }

    handleFormSubmit(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`/api/contact/${id}/update`, {
            name: this.state.name,
            tel: this.state.tel
        }).then(response => {
             this.setState({
                 name: '',
                 tel: ''
             })
             this.props.history.push('/');
         }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Update Contact <Link to="/" className="btn w-auto float-right btn-primary m-auto col-md-3 m-2 btn-sm mr-2">Home</Link></div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text" name="name"
                                         required
                                         onChange={this.handleNameInputChange}
                                         value={this.state.name}
                                         className="form-control"
                                         placeholder="Enter your name..." />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="tel"
                                         required
                                         onChange={this.handleTelInputChange}
                                         value={this.state.tel}
                                         className="form-control"
                                         placeholder="Enter your phone..." />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;

