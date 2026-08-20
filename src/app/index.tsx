import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
  const [ICE, setICE] = useState<string>('');
  const [Part1, setPart1] = useState<string>('');
  const [Part2, setPart2]=useState<string>('');
  const [TargetFM, setTargetFM] =useState<string>('');
  const [FinalMark, setFinalMark] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your ICE/10"
        value={ICE}
        onChangeText={setICE}
      />

      <TextInput
      style={styles.input}
      placeholder="Enter your Part 1 marks"
      value={Part1}
      onChangeText={setPart1}

      />
      <TextInput
      style={styles.input}
      placeholder="Enter your part 2 marks"
      value={Part2}
      onChangeText={setPart2}
      
      />
      <TextInput
      style={styles.input}
      placeholder="Target final mark"
      value={TargetFM}
      onChangeText={setTargetFM}

      />
      <View style={{flex: 1}}></View>

    

      <Button
        title="calculate"
        color="#00ff59"
        onPress={() => {
          const calculate = Number(ICE) + Number(Part1) * 0.25 + Number(Part2) * 0.30 + Number(TargetFM) * 0.35;
          setFinalMark(calculate.toFixed(1));
        }}

      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}></View>

      <View style={{ flex: 1, marginRight: 10}}></View>

      <Button
      title="Clear"
      color="#7700ff"
      onPress={() =>{
        setICE('');
        setPart1("");
        setPart2("");
        setTargetFM('');
        setFinalMark("");

      }}

      />
      
      <Text>ICE Tasks = {ICE}</Text>
      <Text>Part 1 = {Part1}</Text>
      <Text>Part 2 = {Part2}</Text>
      <Text>Target Final Mark = {TargetFM}</Text>
      <Text>Final Mark = {FinalMark}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  image: {
    width: 50,
    height: 40,
  }

})