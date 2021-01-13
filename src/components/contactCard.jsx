import React, { Component } from 'react';
import './cardstyle.css';

export class ContactCard extends Component {

    constructor (props) {
        super(props);

        this.state = {
            email : 'foobar@baz.com',
            phone : '1234567890'
        }
        // this.props.email = ;
        // this.props.phone = ;
    }


    render() {
        return (
        <div className = 'contactCard'>
            <h1 className = 'card-header'>{this.props.lastName} Inc.</h1>
            <div className = 'card-body'>
                <br/>

                <p className = 'name-line'>
                    {this.props.firstName} {this.props.lastName}, CEO of {this.props.lastName} Incorporated
                </p>
                
                <p className = 'email-line'>
                    E-mail:  {this.state.email}
                </p>

                <p className = 'phone-line'>
                    Phone Number:  {this.state.phone}
                </p>
            </div>

        </div>
        )
    }
}