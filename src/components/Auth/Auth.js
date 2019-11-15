import React, { Component } from 'react'
import './Auth.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
import axios from 'axios'
class Auth extends Component {
    state = {
        username:"",
        password:"",
    }
  
    handleChange = (key, value) => {
        this.setState({[key]: value})
        console.log(this.state)
    }
    register = () => {
    // if (this.state.password1 === this.state.password2) {
      const {username, password} = this.state
      axios
        .post('/auth/register', {username, password})
        .then(res => {
          console.log(res.data)
          this.props.updateUser(res.data.user)
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    // } else {
    //   console.log('passwords dont match')
    // }
}

    render() {
        return (
            <div className='front-page'>

                <h1>Helo</h1>
                <input placeholder='username' onChange={e => this.handleChange('username', e.target.value)}/>
                <input placeholder='password' onChange={e => this.handleChange('password', e.target.value)}/>
                <button>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    return reduxState
  }
  const mapDispatchToProps = {
    updateUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Auth)