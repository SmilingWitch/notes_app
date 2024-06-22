import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import theme from './src/theme';
import {NativeRouter} from "react-router-native"


export default function App() {
  return (
    <NativeRouter>
      <View style = {styles.container}>
        <Main></Main>
        <StatusBar style = 'light' />
      </View>
    </NativeRouter>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: theme.colors.primary,
    paddingTop: 10
  },
});
