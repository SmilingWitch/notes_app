import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import theme from './src/components/theme';
import {Routes,Route, Navigate} from "react-router-native"

export default function App() {
  return (
    <View style = {styles.container}>
      <Main></Main>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
    paddingTop: 10
  },
});
