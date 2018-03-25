import React, {Component} from 'react';
import './Admin.css';
import FontAwesome from 'react-fontawesome';
import {AdminDisplay} from './AdminDisplay';
//redux
import {connect} from 'react-redux';
import {addProduct} from '../../redux/actions/products.actions'

class Admin extends Component {

    submit = (e) => {
        e.preventDefault();
        this.props.addProduct()
        .then(res=>console.log("component: ", res));
    }

    render() {
        return (
            <div className="admin">
                <AdminDisplay
                    submit={this.submit}
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {};
}

export default connect(mapStateToProps, {
    addProduct
})(Admin);