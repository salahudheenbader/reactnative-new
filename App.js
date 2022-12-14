import React,{useState} from 'react';
import { StyleSheet,Text,View ,FlatList, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './compodent/Header';
import TodoItem from './compodent/TodoItem'
import Addtodo from './compodent/Addtodo';

export default function App() {
const [toods ,setToods] = useState ([ 
  {text : 'buy coffee' , key : '1'},
  {text: 'create an app ', key : '2'},
  {text: 'play on the swich', key: '3'}
]);

const pressHandler =(key)=>{
 setToods((prevRdus)=>{
    return prevRdus.filter(toods => toods.key != key)
 })
}

const submitHandler=(text)=>{
  if(text.length > 2){
    setToods((prevDods)=>{
      return [
        {text: text, key: Math.random().toString() },
        ...prevDods
      ];
  })
  }else{
Alert.alert('OOPS!', 'Enter 3 letter',[
  {text: 'understood', onPress: () => console.log('alert closed') }
]);
  }

}

  return (
   <TouchableWithoutFeedback onPress={()=> {
    Keyboard.dismiss();
    console.log('dismiss keyborad')
   }}>
    <View style={styles.container}>
          <Header/>
          <View style={styles.container}>
                  <Addtodo submitHandler={submitHandler}/>
            <View style={styles.list}>
                <FlatList data={toods}
                renderItem ={({item})=>(
                     <TodoItem item={item} pressHandler={pressHandler}/>
                )}
                  />
            </View>
        </View>  
    </View>
  </TouchableWithoutFeedback>   
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