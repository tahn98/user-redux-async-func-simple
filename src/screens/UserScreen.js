import React from 'react'
import {  View, ActivityIndicator, Text } from 'react-native'
import UserList from '../components/UserList'
import { fetchPeople } from '../redux/actions/peopleActions'
import { connect } from 'react-redux'

class UserScreen extends React.Component {
  componentDidMount() {
    this.props.fetchPeople()
  }

  render() {
    let content = <UserList people={this.props.randomPeople.people} />
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size='large' />
    }
    return (
      <View style={{ flex: 1 }}>
        {content}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    randomPeople: state
  }
}

export default connect(mapStateToProps, { fetchPeople })(UserScreen)