import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"
import React, {useState} from 'react';
import styles from '../styles/calculo'

export const CalcularTemperatura = () => {
    let [C, setC] = useState('');

    let [F, setF] = useState('');
    let [resultado, setResultado] = useState('');

    function calcularFahrenheit() {
        F = (1.8 * C + 32).toFixed(2);
        setResultado(`O valor em Fahrenheit é:  ${F}F`);
        Keyboard.dismiss()
    }
    function calcularCelsius() {
        C = ((F - 32) * (5 / 9)).toFixed(2);
        setResultado(`O valor em Celsius é:  ${C}C`);
        Keyboard.dismiss()
    }
    const limpar = () => {
        setResultado('')
        setF('')
        setC('')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                Conversão de Temperatura
                </Text>

            <Text style={styles.text}>
                Conversão de Celsius para Fahrenheit
                </Text>

                <TextInput style={styles.inputCF}
                placeholder='Digite a temperatura em Celsius'
                keyboardType='numeric'
                value={C}
                onChangeText={setC} />

            <TouchableOpacity style={styles.Button}
             onPress={calcularFahrenheit}>

            <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
                Conversão de Fahrenheit para Celsius
            </Text>

            <TextInput style={styles.inputCF}
            placeholder='Digite a temperatura em Fahrenheit'
            keyboardType='numeric' value={F} onChangeText={setF}/>

            <TouchableOpacity style={styles.Button} 
            onPress={calcularCelsius}>

            <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clear} onPress={limpar}>
            <Text style={styles.buttonClear}>Limpar</Text>
            </TouchableOpacity>
            <Text style={styles.resultado}>{resultado}</Text>   
        </View>
    )
}
export default CalcularTemperatura;