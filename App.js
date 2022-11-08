import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View ,ScrollView,FlatList} from 'react-native';


export default function App() {
const [people,setPeopple] = useState ([
  {name : 'salahudheen' , key: '1'},
  {name: 'kasaragod' ,key: '2' },
  {name : 'kalluravi' , key: '3'},
  {name: 'nellesharam' ,key: '4' }, 
  {name : 'kearala' , key: '5'},
  {name: 'mahi' ,key: '6' },


])
  return (
    <View style={styles.container}>
      <FlatList

      numColumns={2}
      keyExtractor={(item)=> item.key}
      data={people}
      renderItem={({item})=>(
        <Text style={styles.newo}>{item.name}</Text>
      )}
      
      
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  newo:{
    marginTop: 40,
    padding: 30,
    fontSize: 24,
    backgroundColor: 'green',

  }

});
