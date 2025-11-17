import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { styles } from "./styles.ts";
import { useState } from 'react';
import icon from './assets/barras.png';

export const App = () => {
  const [pesquisa, setPesquisa] = useState("");
  return <View style={styles.container}>

    <View style={styles.header}>

      <View style={styles.card}>
         <Image
            source={icon}
            style={styles.image}
          />
      </View>

      <View style={styles.cardMeio}>
        <Text style={styles.textoUp}>
          Fazer upgrade
        </Text>
      </View>

      <View style={styles.card}></View>

    </View>


    <View style={styles.centro}>
      <Text style={styles.ajuda}>Como posso ajudar? </Text>
    </View>

    <View style={styles.footer}>
      <TextInput
        style={styles.barraPesquisa}
        placeholder="Ask ChatGPT"
        value={pesquisa}
        onChangeText={setPesquisa}
        placeholderTextColor="#888"
      />

    </View>
  </View>
};

export default App;