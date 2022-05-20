import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   
    title: {
        textAlign: 'center',
        color: '#1f1106',
        marginTop: 50,
        fontSize: 25,
        fontFamily:'cursive'
    },
    inputCF: {
        backgroundColor: '#b8c2a0',
        borderRadius: 3,
        margin: 15,
        padding: 15,
        fontSize: 15,
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 15,
        backgroundColor: '#c97c7a',
        padding: 15,
    },
    textButton: {
        fontFamily: 'cursive',
        fontSize: 20,
        color: '#1f1106',
        textAlign:'center',
        
    },
    buttonClear:{
        fontSize: 20,
        color: '#fff',
        textAlign:'center'
    },
    text: {
        fontSize: 20,
        marginTop:35,
        color: 'black',
        textAlign:'center'
    },
   clear:{
    backgroundColor: '#1f1106',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 15,
    padding: 10,
   },

   resultado:{
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    fontSize: 20,
   }
})
export default styles;