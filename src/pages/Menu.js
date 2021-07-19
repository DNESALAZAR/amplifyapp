import React, { Component } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
class Menu extends Component {


    render() {
        return (
            <div>
                Menu Principal
                <br />
            </div>
        );
    }
}

export default withAuthenticator(Menu, { includeGreetings: true });