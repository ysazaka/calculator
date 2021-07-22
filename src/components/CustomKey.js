import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const style = StyleSheet.create({
    keyStyle: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    doubledSizeKey: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    tripledSizeKey: {
        width: (Dimensions.get('window').width / 4) * 3
    },
    operationKeyStyle: {
        color: '#FFF',
        backgroundColor: '#FA8231'
    }
})

export default props => {
    const keyStyles = [style.keyStyle]
    if (props.isDoubledSize) {
        keyStyles.push(style.doubledSizeKey)
    }
    if (props.isTripledSize) {
        keyStyles.push(style.tripledSizeKey)
    }
    if (props.isAnOperationButton) {
        keyStyles.push(style.operationKeyStyle)
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={keyStyles}>{props.label}</Text>
        </TouchableHighlight>
    )
}