import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textN: 0
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


  render(){
    updateText = () => {
      this.setState((prevState, props) => ({
        textN: prevState.textN + 1
      }));
    }

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.touch} onPress={updateText}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.getText(this.state.textN)}</Text>
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
  },
  touch: {
    flex: 1,
  }
});
