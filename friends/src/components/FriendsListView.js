import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
import FriendsList from './FriendsList'

class FriendsListView extends Component {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        if (this.props.isFetching) {
            return <p>LOADING...</p>
        }
        return (
            <div>
                <FriendsList friends={this.props.friends} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    isFetching: state.isFetching,
    friends: state.friends,
})

//conneting MSTP, bringin in action creators from getfriends, connecting it to the component FLV
export default connect(mapStateToProps, { getFriends }) (FriendsListView)