import React from 'react'
import { StyleSheet, FlatList, Text, Image, View } from 'react-native'
import UserCell from '../components/UserCell'

const UserList = ({ people }) => {

  return <View style={styles.container}>
    <FlatList
      data={people}
      keyExtractor={item => item.email.toString()}
      renderItem={({ item }) => {
        return <View>
          <UserCell user={item} />
          <View style = {styles.divider} />
        </View>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    backgroundColor : 'black',
    marginTop : 5,
    flex : 1,
    height: 1,
  }
})

export default UserList