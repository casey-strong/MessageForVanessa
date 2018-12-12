import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet, Animated, Easing} from 'react-native';
//import FadeInText from './../components/fadeInText';

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textN: 0,
      animValue: new Animated.Value(0)
    };
  }

  static navigationOptions = {
    'header': null
  };


  getText(i){
    switch (i) {
      case 0:
        return 'Amor.';
        break;
      case 1:
        return 'Eu te amo.';
        break;
      default:
        return `${i}`;
        break;
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.animValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start()
  }

  componentDidUpdate() {
    Animated.timing(
      this.state.animValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start()
  }

  render(){
    updateText = () => {
      this.setState((prevState, props) => ({
        textN: prevState.textN + 1,
        animValue: new Animated.Value(0)
      }));
    }

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.touch} onPress={updateText}>
          <View style={styles.textContainer}>

            <Animated.Text style={{...styles.text, opacity: this.state.animValue}}>{this.getText(this.state.textN)}</Animated.Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 26
  },
  textContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f0'
  },
  textFadeContainer: {

  },
  touch: {
    flex: 1,
    backgroundColor: '#f00'
  }
});
