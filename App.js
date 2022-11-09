import React,{useState} from 'react';
import { StyleSheet,Text,View ,FlatList} from 'react-native';
import { Header } from './compodent/header';

export default function App() {
const [toods ,setToods] = useState ([ 
  {text : 'buy coffee' , key : '1'},
  {text: 'create an app ', key : '2'},
  {text: 'play on the swich', key: '3'}
]);

  return (
    <View style={styles.container}>
          <Header/>
       <View style ={styles.content}>
      {/* to form */}
            <View style={styles.list}>
                <FlatList data={toods}
                renderItem ={({item})=>(
                  <Text>{item.text}</Text>
                 )}
                      />
            </View>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding : 40,
  },
  list : {
    marginTop : 20
  }
});