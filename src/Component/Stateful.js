import React, {Component} from "react";
import { View, Text } from "react-native";

class Stateful extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text> Hello App </Text>
            </View>
        )
    }
}
export default Stateful;