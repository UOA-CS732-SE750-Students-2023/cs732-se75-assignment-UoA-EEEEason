import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductTable from './ProductTable';
import TouchableHighlight from './TouchableHighlight';
import Animated from './Animated';
import Swiper from './Swiper';
import { ScrollView } from 'react-native-gesture-handler';

//Pass in data for ProductTable.js
const PRODUCTS = [
  { category: 'Fruit', price: '＄3', name: 'Apple' },
  { category: 'Fruit', price: '＄1', name: 'Orange' },
  { category: 'Fruit', price: '＄2', name: 'Banana' },
  { category: 'Vegetable', price: '＄5', name: 'Potato' },
  { category: 'Vegetable', price: '＄3', name: 'Tomato' },
  { category: 'Vegetable', price: '＄6', name: 'Onion' },
];

export default function ProductList() {
  return (
    //The SafeAreaView component can prevent the display content of the app on the mobile phone screen from being blocked
    //The ScrollView component can fully present the displayed content and add scrolling effects.
    <SafeAreaView>
      <ScrollView>
        
          <Swiper />
        
        <ScrollView style={{ marginHorizontal: 30 }}>
          <ProductTable products={PRODUCTS} />
        </ScrollView>
        <ScrollView style={{ marginHorizontal: 30 }}>
          <TouchableHighlight />
        </ScrollView>
        <ScrollView style={{ marginHorizontal: 30 }}>
          <Animated />
        </ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
}