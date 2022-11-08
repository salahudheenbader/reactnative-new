import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View ,ScrollView,FlatList,TouchableOpacity} from 'react-native';


export default function App() {
const [people,setPeopple] = useState ([
  {name : 'salahudheen' , key: '1'},
  {name: 'kasaragod' ,key: '2' },
  {name : 'kalluravi' , key: '3'},
  {name: 'nellesharam' ,key: '4' }, 
  {name : 'kearala' , key: '5'},
  {name: 'mahi' ,key: '6' },


])
const pressHandler  = (key) => {
  console.log(key)
  setPeopple ((preupepel)=>{
return preupepel.filter (preupepel => preupepel.key != key)
  })
}
  return (
    <View style={styles.container}>
      <FlatList

      numColumns={2}
      keyExtractor={(item)=> item.key}
      data={people}
      renderItem={({item})=>(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
         <Text style={styles.newo}>{item.name}</Text>
        </TouchableOpacity>
   
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
