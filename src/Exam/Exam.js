import React, { Component } from "react";
import { View } from "react-native";

export default class Exam extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.box1}>
                    <View style={styles.insidebox1} />
                    <View style={styles.insidebox1} />
                </View>
                <View style={styles.box2}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={styles.insightbox2} />
                        <View style={styles.insightbox2} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={styles.insightbox2} />
                        <View style={styles.insightbox2} />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = {
    box1: {
        flex: 1,
        backgroundColor: '#A1c99A',
        justifyContent: 'space-around',
        borderRadius: 25,
        marginBottom: 10
    },
    insidebox1: {
        backgroundColor: '#ffffc2',
        marginHorizontal: 20,
        height: 120,
        borderRadius: 25,
    },
    box2: {
        flex: 1,
        backgroundColor: '#c8c8fA',
        justifyContent: 'space-around',
        borderRadius: 25,
        marginTop: 10
    },
    insightbox2: {
        backgroundColor: '#4f82c0',
        borderRadius: 25,
        height: 150,
        width: 150,
    }
}
