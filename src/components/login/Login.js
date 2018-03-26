import React, {Component} from 'react';
import {LoginDisplay} from './LoginDisplay';
//redux 
import {connect} from 'react-redux';
import {faceLogin, googLogin} from '../../redux/actions/session.actions';
import {localLogin} from '../../redux/actions/session.actions';


class Login extends Component{

    state = {
        auth:{
            email:'',
            password:''
        }
    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let {auth} = this.state;
        auth[field] = value;
        this.setState({auth});
    }
    submit = (e) => {
        e.preventDefault();
        console.log(this.state.auth)
        this.props.localLogin(this.state.auth)
        .then(r=>this.props.history.push('/profile'))
        .catch(e=>alert("Error", e.statusText));
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
            this.props.history.push('/profile')
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
    localLogin
})(Login);