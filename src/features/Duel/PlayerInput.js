import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import { style } from './DuelStyle';

export default class PlayerInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { username1 : '', username2: '' };
    }

    render() {
        var { label, action, onChangeText, username } = this.props;
        return(
            <View style={style.inputContainer}>
                <Fumi
                    label={label}
                    iconClass={FontAwesomeIcon}
                    iconName={'user'}
                    iconColor={'#000'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    value={username}
                    onChangeText={ (username) => onChangeText(username) }
                />
                <View style={style.touchableContainer}>
                    <TouchableHighlight
                        style={style.touchable}
                        onPress={ () => action() }
                    >
                        <Text style={style.textButton}> Submit </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}