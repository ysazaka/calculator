import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomKey from './src/components/CustomKey';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  currentIndexValue: 0
}

export default class App extends Component {
  state = { ...initialState };

  addDigit = digit => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    const alreadyHaveDot = digit === '.' && this.state.displayValue.includes('.')
    if (alreadyHaveDot) {
        return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + digit

    this.setState({ displayValue })

    if (digit !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.currentIndexValue] = newValue
      this.setState({ values })
    }
  };

  clearCalculations = () => {
    this.setState({ ...initialState });
  };

  setOperation = operation => {
    if(this.state.currentIndexValue === 0) {
      this.setState({ operation, currentIndexValue: 1, clearDisplay: true })
    } else {
      const equals = operation === "="
      const values = [...this.state.values]

      try {
        values[0] = 
          eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null: operation,
        currentIndexValue: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  };

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
    flex: 1
  },
  keys: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
