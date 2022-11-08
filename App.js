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
 <FlatList>
   data={people}
    renderItem={({item})=>{
      <Text style={styles.newo}>{item.name}</Text>
    }}
 </FlatList>


{/* <ScrollView>
  {people.map(item =>(
    <View key={item.key}>
      <Text style={styles.newo}>{item.name}</Text>
    </View>
  ))}
  </ScrollView> */}
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
    backgroundColor: 'green'
  }

});
