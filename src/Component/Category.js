import React from 'react';
import { Text } from 'react-native';
export default function Category({ category }) {
  return (
    <Text
      style={{
        flexDirection: 'row',
        width: 100,
        fontWeight: 'bold',
        marginTop: 5
      }}>
      {category}
    </Text>
  );
}