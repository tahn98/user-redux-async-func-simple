import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

const UserCell = ({ user }) => {
  return <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text>
        {user.name.first}
      </Text>
    </View>
    <Image style={styles.image} source={{ uri: user.picture.medium }} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'space-between'
  },
  image: {
    marginLeft: 10,
    width: 100,
    height: 100,
  },
  textContainer: {
    padding: 5,
    justifyContent: 'center',
  }
})

export default UserCell