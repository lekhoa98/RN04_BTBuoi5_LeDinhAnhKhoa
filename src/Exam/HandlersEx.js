import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

export default class HandlersEx extends Component {
    state = {
        imageDefault: require('../emoji/angry.png'),
    }

    onPressAngry = () => {

        this.setState({ imageDefault: require('../emoji/angry.png') })
    }
    onPressCare = () => {

        this.setState({ imageDefault: require('../emoji/care.png') })
    }
    onPressHaha = () => {

        this.setState({ imageDefault: require('../emoji/haha.png') })
    }
    onPressLike = () => {

        this.setState({ imageDefault: require('../emoji/like.png') })
    }
    onPressLove = () => {

        this.setState({ imageDefault: require('../emoji/love.png') })
    }
    onPressSad = () => {

        this.setState({ imageDefault: require('../emoji/sad.png') })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Bạn cảm thấy như thế nào?</Text>
                </View>
                <View style={styles.box1}>
                    <Image source={this.state.imageDefault} />
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressAngry}>
                        <Image style={styles.icon} source={require('../emoji/angry.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressCare}>
                        <Image style={styles.icon} source={require('../emoji/care.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressHaha}>
                        <Image style={styles.icon} source={require('../emoji/haha.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressLike}>
                        <Image style={styles.icon} source={require('../emoji/like.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressLove}>
                        <Image style={styles.icon} source={require('../emoji/love.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressSad}>
                        <Image style={styles.icon} source={require('../emoji/sad.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = {
    box1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 50,
        width: 50,
    },
    btn: {
        margin: 5,
    }
}