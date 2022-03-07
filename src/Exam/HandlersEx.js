import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {Angry, Care, Haha, Like, Love, Sad} from '../emoji';

const Emoji = [
  {type: 'angry', image: Angry},
  {type: 'care', image: Care},
  {type: 'haha', image: Haha},
  {type: 'like', image: Like},
  {type: 'love', image: Love},
  {type: 'sad', image: Sad},
];

export default class HandlersEx extends Component {
  state = {
    imageDefault: Emoji[0].image,
    imageOption: Emoji,
  };
  renderEmoji = () => {
    return this.state.imageOption.map((item,index) => {
      return (
        <TouchableOpacity
        key={index}
          style={styles.btn}
          onPress={() => {
            console.log(item.type);
            this.setState({imageDefault: item.image});
          }}>
          <Image style={styles.icon} source={item.image} />
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Bạn cảm thấy như thế nào?
          </Text>
        </View>
        <View style={styles.box1}>
          <Image source={this.state.imageDefault} />
        </View>
        <View style={styles.box2}>{this.renderEmoji()}</View>
      </View>
    );
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
  },
};
