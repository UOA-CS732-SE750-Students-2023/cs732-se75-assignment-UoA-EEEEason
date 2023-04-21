import React from 'react';
import { View } from 'react-native';
import Index from './src/Component';


export default function App() {
  return (
    //Reference index.js in the Component through app.js
    <View>
      <Index />
    </View>
  );
}
