import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Circles = ['','','','','',]
const index = () => {
  return (
    <View style={styles.page}>
      <FlatList
      data={Circles}
      horizontal={true}
      renderItem={({item})=>
      {return (
        <View style = {styles.circle}></View>
      )}
      }
      />
      </View>
  )
}

export default index

const styles = StyleSheet.create({
  page: {
    flex:1,
    paddingTop: 20,
    paddingHorizontal:30,
    
  },
  circle: {
    backgroundColor:"pink", 
    height:80,
    width:80,
    borderRadius:80,
    marginRight: 10
}
})