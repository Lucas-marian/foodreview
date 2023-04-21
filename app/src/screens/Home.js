import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import Teste from '../components/Teste'
import { DataContext, Fornecedor } from '../context/dataContext'


const Home = () => {
  const actualState = useContext(DataContext)
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>home</Text>
      <Text style ={styles.text}>{actualState.state.counter}</Text>
      
      <Button 
        title = "Aumentar"
        onPress = {() => actualState.dispatch({type:"aumentar",payload:1})}
       
       />

       <Button 
       title = "diminuir"
       onPress = {() => actualState.dispatch({type:"diminuir",payload:1})} 

      />  

        <Button 
        title = "zerar"
        onPress = {() => actualState.dispatch({type:"zerar"})}
    
      />

       {actualState.state.showMenssage ? <text>MENSAGEM SECRETA</text> : null}

        <Button 
        title = "mostrar mensagem secreta"
        onPress = {() => actualState.dispatch({type:"mostrar"})}
    
      />
       
    
    </View>
  ) 
}

const styles = StyleSheet.create({
     
   container: {
       
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },

   text:{
       
    fontSize: 30,

  },


})

export default () => {
  
  return(
    <Fornecedor>

     <Home />
       
    </Fornecedor>


  )


}