import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const Input=({text, inputPlaceHolder, onChangeText, value, secureTextEntry})=>{
  const{inputWrapper, textStyle, inputStyle}=styles;
  return(
    <View style={inputWrapper}>
    <Text style={textStyle}>{text}</Text>
  <TextInput placeholder={inputPlaceHolder}
  //secureTextEntry ile şifre girilen kısım yıldız yapıldı
                      secureTextEntry={secureTextEntry}
                      style={inputStyle}
                      onChangeText={onChangeText}
                      value={value}
                      />
    </View>
  )
}
const styles=StyleSheet.create({
  inputWrapper:{
 flexDirection:'row',
 height:50,
 width:'auto',
 borderColor:'#E5E5E8',
 borderBottomWidth:1,
 alignItems:'center'

  },
  textStyle:{
    flexGrow:1,
    fontSize:17,
    paddingLeft:20
  },
  inputStyle:{
    fontSize:17,
    flexGrow:2,
  opacity:0.4
  }
})
export {Input}
/*
borderBottomWidth ile altına çizgi çektik yazının
*/
