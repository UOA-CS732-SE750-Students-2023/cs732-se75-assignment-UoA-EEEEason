import React from 'react';
import { Text, View, ScrollView, SafeAreaView, Image } from 'react-native';

export default function FlexStyle() {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView>
                <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>Layout from top to bottom</Text>
                    <View style={{ borderWidth: 1 }}>
                        <View style={{ height: 50, backgroundColor: 'powderblue' }}>
                            <Text style={{ fontSize: 18 }}>Here is the first View</Text>
                        </View>
                        <View style={{ height: 50, backgroundColor: 'skyblue' }}>
                            <Text style={{ fontSize: 18 }}>Here is the second View</Text>
                        </View>
                        <View style={{ height: 50, backgroundColor: 'steelblue' }}>
                            <Text style={{ fontSize: 18 }}>Here is the third View</Text>
                        </View>
                    </View>
                </View>

                <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>Layout from left to right</Text>
                    <View style={{ flexDirection: 'row', borderWidth: 1 }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{
                                uri: 'https://placeimg.com/640/480/cats',
                            }}
                        />
                        <Text style={{ fontSize: 18 }}>
                            Describe the picture.
                        </Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, margin: 10, padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>Horizontally and vertically centered layout</Text>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 80,
                            borderWidth: 1,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                includeFontPadding: false,
                                textAlignVertical: 'center',
                            }}>
                            I'm here now!
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}