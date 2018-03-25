import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';
//redux 
import {connect} from 'react-redux';
import {faceLogin, googLogin} from '../../redux/actions/session.actions';
import {addItem} from '../../redux/actions/cart.actions';

class Login extends Component{

    state = {
        
    }

    onChange = () => {}
    submit = (e) => {
        e.preventDefault();
        this.props.addItem();
    }
    facebookLogin = (e) => {
        e.preventDefault();
        this.props.faceLogin()
        .then(()=>{
            console.log(this.props.user);
        });
        //.then(res=>this.props.history.push('/perfil'));
    }
    googleLogin = (e) => {
        e.preventDefault();
        this.props.googLogin()
        .then(()=>{
            console.log(this.props.user);
        });
    }

    render(){
        return (
            <div>
                <LoginDisplay
                    submit={this.submit}
                    onChange={this.onChange}
                    facebookLogin={this.facebookLogin}
                    googleLogin={this.googleLogin}
                    user={this.props.user}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        user: Object.keys(state.user).length > 0 ? state.user : null
    }
}

export default connect(mapStateToProps, {
    faceLogin, 
    googLogin,
    addItem
})(Login);