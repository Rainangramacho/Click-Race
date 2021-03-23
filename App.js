import React, { Component }  from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

export default class App extends Component {
  
  state = {
    counterButton1: 0,
    counterButton2: 0,
    counterButton3: 0,
    counterButton4: 0,
    counterButton5: 0,
    counterButton6: 0,
    minutes: 0,
    seconds: 10,
    disabled: true,
    hidden: false,
    hiddenRefresh: true,
    player: '2',
    secondsDefault: 10,
  };
   updateplayer = (player) => {
      this.setState({ player: player })
   }

  render() {
    const { minutes, seconds } = this.state;
    const counterButton1 = this.state.counterButton1;
    const counterButton2 = this.state.counterButton2;
    const counterButton3 = this.state.counterButton3;
    const counterButton4 = this.state.counterButton4;
    const counterButton5 = this.state.counterButton5;
    const counterButton6 = this.state.counterButton6;
    const [selectedValue, setSelectedValue] = ("java");
    return (
      <View style={styles.screen}>
      {this.state.hidden == true ? (
        <View style={{ flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        top:0,
        marginTop: 35}}>
        <TouchableOpacity
          onPressIn={this.onIncrement1}
          style={styles.roundButton1}
          disabled={this.state.disabled}>
          <Text>P1</Text>
          <Text style={styles.counter}>{counterButton1}</Text>
        </TouchableOpacity>
        </View>
        ) : null}

        {this.state.hidden == true && this.state.player >= '3' ? ( 
        <View style={{ flex: 1,
          alignSelf: 'flex-end',
          position: 'absolute',
          }}>
          <TouchableOpacity
            onPressIn={this.onIncrement3}
            style={styles.roundButton3}
            disabled={this.state.disabled}>
            <Text>P3</Text>
            <Text style={styles.counter}>{counterButton3}</Text>
          </TouchableOpacity>
        </View>
        ) : null}

        {this.state.hidden == true && this.state.player >= '4' ? ( 
        <View style={{ flex: 1,
          alignSelf: 'flex-start',
          position: 'absolute',
          justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPressIn={this.onIncrement4}
            style={styles.roundButton4}
            disabled={this.state.disabled}>
            <Text>P4</Text>
            <Text style={styles.counter}>{counterButton4}</Text>
          </TouchableOpacity>
        </View>
        ) : null}

        {this.state.hidden == false ? (
          <View style={{ padding: 35, zIndex:10, bottom: 0, marginBottom: height /1.7, position: 'absolute'}}>
            <TouchableOpacity
              onPress={this.startCount}
              style={styles.startButton}
              hidden={this.state.hidden}>
              <Text style={styles.frase}><Icon name="play" size={30} color="white" /> Play Game</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {this.state.hidden == false || this.state.hiddenRefresh == false  ? (
          <View style={{ padding: 35, bottom: 0, marginBottom: height / 2.4, position: 'absolute'}}>
             <DropDownPicker
                  style={{zIndex: 0, marginBottom:10, borderColor:'green', backgroundColor:'transparent', borderRadius:250, borderWidth:5}}
                  items={[
                      {label: '2 Players', value: '2', color: 'black'},
                      {label: '3 Players', value: '3', color: 'black'},
                      {label: '4 Players', value: '4', color: 'black'},
                  ]}
                  defaultValue={this.state.player}
                  containerStyle={{width: width / 1.8, height: 70}}
                  labelStyle={{fontSize: 25, color: 'white', textAlign: 'center'}}
                  dropDownStyle={{backgroundColor: 'black'}}
                  activeLabelStyle={{color: 'white'}}
                  arrowStyle={{display:'none'}}
                  onChangeItem={item => this.increasePlayer(item)}
                  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              />
          </View>
        ) : null}

        {this.state.hidden == false || this.state.hiddenRefresh == false  ? (
          <View style={{padding: 35, bottom: 0, marginBottom: height / 6, position: 'absolute'}}>
             <DropDownPicker
                  style={{zIndex: 1, marginBottom:15, borderColor:'green', backgroundColor:'transparent',borderRadius:250,borderWidth:5}}
                  items={[
                      {label: '10 seconds', value: 10, color: 'black'},
                      {label: '15 seconds', value: 15, color: 'black'},
                      {label: '20 seconds', value: 20, color: 'black'},
                      {label: '25 seconds', value: 25, color: 'black'},
                      {label: '30 seconds', value: 30, color: 'black'},
                  ]}
                  defaultValue={this.state.secondsDefault}
                  containerStyle={{width: width / 1.8, height: 70, marginBottom: 80}}
                  labelStyle={{fontSize: 25, color: 'white', textAlign: 'center'}}
                  dropDownStyle={{backgroundColor: 'black'}}
                  activeLabelStyle={{color: 'white'}}
                  arrowStyle={{display:'none'}}
                  onChangeItem={item => this.increaseTime(item)}
                  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              />
          </View>
        ) : null}

        {this.state.hidden == true ? (
        <View style={{
        position: 'absolute',
        bottom:0}}>
          <TouchableOpacity
            onPressIn={this.onIncrement2}
            style={styles.roundButton2}
            disabled={this.state.disabled}>
            <Text>P2</Text>
            <Text style={styles.counter}>{counterButton2}</Text>
          </TouchableOpacity>
        </View>
        ) : null}

        {this.state.hidden == true ? (
        <Text style={{marginBottom:'30%'}}>
          {minutes === 0 && seconds === 0 ? null : (
            <Text style={styles.restante}>
              Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          )}
        </Text>
        ) : null}

      {this.state.hiddenRefresh == false ? (
        <Text style={{marginBottom:height / 1.5, bottom:0, position:'absolute'}}>
          {minutes === 0 && seconds === 0 ? (
            <Text style={{fontSize: 30,fontWeight: 'bold',color: 'white'}}>
              { counterButton1 > counterButton2 && counterButton1 > counterButton3 && counterButton1 > counterButton4
                ? 'P1 wins!'
                : counterButton2 > counterButton1 && counterButton2 > counterButton3 && counterButton2 > counterButton4
                ? 'P2 wins!'
                : counterButton3 > counterButton1 && counterButton3 > counterButton2 && counterButton3 > counterButton4
                ? 'P3 wins!'
                : counterButton4 > counterButton1 && counterButton4 > counterButton2 && counterButton4 > counterButton3
                ? 'P4 wins!'
                : "It's a draw!"
                }
            </Text>
          ) : (
            ''
          )}
        </Text>
      ) : null}

        {this.state.hiddenRefresh == false ? (
        <View style={{top:0, marginTop:height * 0.67, position: 'absolute'}}>
          <TouchableOpacity onPressIn={this.handleClick}>
            <Text style={styles.icone}>
              <Icon name="refresh-ccw" size={45} color="#057ded" />
            </Text>
          </TouchableOpacity>
        </View>
        ) : null}


      </View>
    );
  }

  increasePlayer(item) {
        this.setState({
            player: item.value
        });
  }

  increaseTime(item){
      this.setState({
        seconds:item.value,
        secondsDefault: item.value
      })
  }

  getPlayers = () => {
      this.setState({
          player: this.state.player
      });
  }

  onIncrement1 = () => {
    this.setState({
      counterButton1: this.state.counterButton1 + 1,
    });
  };

  onIncrement2 = () => {
    this.setState({
      counterButton2: this.state.counterButton2 + 1,
    });
  };

   onIncrement3 = () => {
    this.setState({
      counterButton3: this.state.counterButton3 + 1,
    });
  };

  onIncrement4 = () => {
    this.setState({
      counterButton4: this.state.counterButton4 + 1,
    });
  };
  

  handleClick = () => {
    this.setState({
      counterButton1: 0,
      counterButton2: 0,
      counterButton3: 0,
      counterButton4: 0,
      counterButton5: 0,
      counterButton6: 0,
      minutes: 0,
      seconds: this.state.secondsDefault,
    });
    this.startCount();
  };

  disableButtons = () => {
    this.setState({
      disabled: true,
    });
  };
  hiddenRefresh = () => {
    this.setState({
      hiddenRefresh: false,
    });
  };

  startCount = () => {
    this.setState({
      disabled: false,
      hidden: true,
      hiddenRefresh: true,
    });
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
          this.disableButtons();
          this.hiddenRefresh();
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  };
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  roundButton1: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#057ded',
    marginBottom: 5,
  },
  roundButton2: {
    marginTop: 5,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#c95e20',
  },
  roundButton3: {
    marginTop: 60,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#d962a9',
  },

   roundButton4: {
    marginTop: 60,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#37a637',
  },

  acabou: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    bottom:0, 
    position:'absolute',
    marginBottom:width * 3
  },
  restante: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  startButton: {
    height: 75,
    width: 200,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1ba866',
    textAlign: 'center',
    marginTop:20,
  },
   
  startDiv: {
    padding: 35,
    zIndex:10,
  },
  timeDiv:{
    marginBottom:10,
    zIndex:5
  },

  frase: {
    color: 'white',
    fontSize: 23,
  },
  icone: {
    marginTop: 15,
  },
});

