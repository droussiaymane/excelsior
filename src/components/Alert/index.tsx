import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Alert = ({error,color}:any) => {
  const {alertView}=styles
    return (
       <View >
         <View style={alertView}> 
         <Text style={{color:color}}>{error}</Text>
         </View>
       </View>
    )
}
const styles=StyleSheet.create({
  alertView:{ 
    backgroundColor:'white',
    width:350,
    height:45,
    justifyContent:'center',
    alignItems: 'center',
    marginTop:40}
})

export default Alert
