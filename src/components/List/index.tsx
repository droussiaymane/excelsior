/**
 *
 * List
 *
 */

import React from 'react';
import { View, Text, StyleSheet, Dimensions,TextInputProps,FlatListProps,FlatList } from 'react-native';
const { height, width } = Dimensions.get('window')


export const List: React.FC<IListProps> = (props) => {
  const {Data}  = props
  return (
    <View style={{flex: 1}} >

   
    <FlatList
        data={Data}
        contentContainerStyle={{padding:20,flex: 1,}}
        keyExtractor={(_,index) => index.toString()}
        renderItem={({item})=>
        <View style={styles.section} >

     <Text style={styles.text}>{item.store}</Text>
     <Text style={styles.text} >{item.points}</Text>
   </View>
      }
        
        
      />
      </View>
  );
};

const styles = StyleSheet.create({
  conatiner:{
    flex: 1,
  },
  section: {
    height: 90,
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingHorizontal: 15,
    // width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: '#37B184',
    borderWidth: 5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginVertical: 15,
    width: width / 1.1,
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    color: "black",
  },
})

export interface IListProps  {
  
  Data:any
 }
export default List;
