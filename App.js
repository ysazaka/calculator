import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomKey from './src/components/CustomKey';
import Display from './src/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0',
  };

  addDigit = digit => {
    this.setState({displayValue: digit});
  };

  clearCalculations = () => {
    this.setState({displayValue: 0});
  };

  setOperation = operation => {};

  render() {
    return (
      <View style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.keys}>
          <CustomKey
            label="AC"
            isTripledSize
            onClick={this.clearCalculations}
          />
          <CustomKey
            label="/"
            isAnOperationButton
            onClick={this.setOperation}
          />
          <CustomKey label="7" onClick={this.addDigit} />
          <CustomKey label="8" onClick={this.addDigit} />
          <CustomKey label="9" onClick={this.addDigit} />
          <CustomKey
            label="*"
            isAnOperationButton
            onClick={this.setOperation}
          />
          <CustomKey label="4" onClick={this.addDigit} />
          <CustomKey label="5" onClick={this.addDigit} />
          <CustomKey label="6" onClick={this.addDigit} />
          <CustomKey
            label="-"
            isAnOperationButton
            onClick={this.setOperation}
          />
          <CustomKey label="1" onClick={this.addDigit} />
          <CustomKey label="2" onClick={this.addDigit} />
          <CustomKey label="3" onClick={this.addDigit} />
          <CustomKey
            label="+"
            isAnOperationButton
            onClick={this.setOperation}
          />
          <CustomKey label="0" isDoubledSize onClick={this.addDigit} />
          <CustomKey label="." onClick={this.addDigit} />
          <CustomKey
            label="="
            isAnOperationButton
            onClick={this.setOperation}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  keys: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
