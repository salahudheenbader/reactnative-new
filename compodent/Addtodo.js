import react,{useState} from "react";
import {StyleSheet,Text,View,TextInput,Button}from 'react-native'

export default function Addtodo({submitHandler}){
const [text, setText] = useState ('');
    
  const chaingeHandler =(val) =>{
        setText(val);
  }  
    return (
        <View>
            <TextInput style={styles.input} placeholder="new dooo...."
            onChangeText={chaingeHandler}>

            </TextInput>
            <Button onPress={(()=> submitHandler(text))} title='Add Doo' color='coral'>

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 2,
        borderBottomColor: '#ddd',
    }
})