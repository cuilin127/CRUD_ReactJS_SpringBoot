import React, {Component} from 'react';

class LoginResult extends Component{
    render() {
        return (
            <div>
                <p>{this.props.loginResult}</p>
            </div>
        )
    }
}
export default LoginResult;