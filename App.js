import { View} from "react-native";
import Calculo from "./src/components/Calculo";
import styles from "./src/styles/calculo";

const App = () => {
  return(
    <View>
      <Calculo title = "Calcular Temperaturas"/>
    </View>
  )
}

export default App;
