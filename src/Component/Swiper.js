import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {
        height: 220,
    },
    slideImage: {
        height: 200,
        width: Dimensions.get('window').width
    }
})

export default class SwiperComponent extends Component {
    render() {
        return (
            <ScrollView>
                <Swiper 
                    style={styles.wrapper}
                    autoplay = {true}
                >
                    <Image
                        style={[styles.slideImage]}
                        source={require('./images/1.png')}
                    />
                    <Image
                        style={[styles.slideImage]}
                        source={require('./images/2.png')}
                    />
                    <Image
                        style={[styles.slideImage]}
                        source={require('./images/3.png')}
                    />
                </Swiper>
            </ScrollView>

        )
    }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)