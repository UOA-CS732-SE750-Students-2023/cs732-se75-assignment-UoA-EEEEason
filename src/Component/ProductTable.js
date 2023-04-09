import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Category from './Category';
import Product from './Product';
export default function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <Category category={product.category} key={product.category} />,
      );
    }
    rows.push(<Product product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <View style={{ marginTop: 50 }}>
      <View style={styles.container}>
      <Text style={{ flexDirection: 'row', fontWeight: 'bold',alignItems:'center',justifyContent: "center"}}>This is a ProductTable</Text>
        </View>
      <View style={{ borderWidth: 1, flexDirection: 'row', marginTop: 5 }}>
        <Text style={{ flex: 1, fontWeight: 'bold' }}>Name</Text>
        <Text style={{ width: 50, fontWeight: 'bold' }}>Price</Text>
      </View>
      <View>{rows}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
});