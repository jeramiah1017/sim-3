import React, { Component } from 'react'
import {connect} from 'react-redux'

export default class Nav extends Component {
    render() {
        return (
            <div>
                Nav
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, profilePicture} = reduxState
    return {
        username,
        profilePicture
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)