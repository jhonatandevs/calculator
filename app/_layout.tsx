
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';


import { globalStyles } from './styles/global-styles';

const RootLayout = () => {
  const [loaded] = useFonts({
    //El nombre que le coloque aqui es el nombre de la fuente cuando la invoque
    SpaceMono2: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!loaded) {
    return null; // O un componente de carga
  }
  return (
    <View style={globalStyles.background}>
      <Text style={[{ color: '#4eff' }]}>Header</Text>
      <Slot />
       <StatusBar
        style="light"
       
      />
      <Text style={[{ color: '#4eff' }]}>Footer</Text>
     

    </View>
  )
}

export default RootLayout