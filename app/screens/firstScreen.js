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
      case 2:
        return 'Então eu vou te contar uma história...';
        break;
      case 3:
        return 'Tudo começa com um Líder de Distrito.';
        break;
      case 4:
        return 'Ele gostou de batismos,';
        break;
      case 5:
        return 'E teve uma dupla de missionárias no distrito dele que gostou de coxinha.';
        break;
      case 6:
        return 'Então quando tiveram intervistas batismais essa dupla de missionárias sempre pediu coxinha do Líder';
        break;
      case 7:
        return 'Elas tiveram muitas intervistas batismais.';
        break;
      case 8:
        return 'Isso deixou o Líder sem dinheiro.';
        break;
      case 9:
        return 'Mas isso tambem deixou muito tempo para o companheiro dele conhecer as missionárias...';
        break;
      case 10:
        return 'Uma das missionárias gostou muito dele. Tanto, que dois mais tarde ela falou assim para o companheiro:';
        break;
      case 11:
        return '"Você é o cara mais top dessa missão, suas atitudes exemplar sempre me lembra de uma amiga top minha em sp ela é a mais virtuosa que eu conheço, quer o email dela pra voce conhecer ela?"';
        break;
      case 12:
        return 'O companheiro não estava convencido que quis conhecer alguem,';
        break;
      case 13:
        return 'Mas a missionária convenceu ele com a proxima linha,';
        break;
      case 14:
        return '"De verdade lembra que eu disse que você precisava de uma boa mulher, sempre me vinha ela na mente, ela não namora e ela merece um cara tao bom quanto você, eu vou te mandar o email dela se vs quiser escrever pra ela, escreva, lembrando tbm que ela ama coxinha hahahahaha e é super inteligente tbm."';
        break;
      case 15:
        return 'Então o companheiro decidiu a enviar email.';
        break;
      case 16:
        return 'Ele tirou uma foto,';
        break;
      case 17:
        return 'Escreveu uma introdução,';
        break;
      case 18:
        return 'E enviou.';
        break;
      case 19:
        return 'Ele esperou o dia inteiro por uma resposta,';
        break;
      case 20:
        return 'Mas nehuma veio.';
        break;
      case 21:
        return 'Ele esperou o proxima dia completo tambem,';
        break;
      case 22:
        return 'Mas não recebeu uma resposta.';
        break;
      case 23:
        return 'Depois do quarto dia ele desistiu.';
        break;
      case 24:
        return 'Claramente a amiga não quis conhecer alguém novo.';
        break;
      case 25:
        return 'A proxima segunda-feira ele contou isso para a missionária.';
        break;
      case 26:
        return 'Mas para a supresa dele, na mesma hora ele recebeu uma mensagem da amiga!';
        break;
      case 27:
        return 'E o resto é história.';
        break;
      case 28:
        return '    Casey e Vanessa\n❤️';
        break;
      case 29:
        return 'Para esta vida e toda eternidade';
        break;
      default:
        return ``;
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
    textAlign: 'center',
    fontSize: 26
  },
  textContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    backgroundColor: '#FFF'
  },
  textFadeContainer: {

  },
  touch: {
    flex: 1,
    backgroundColor: '#f00'
  }
});
