import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { style } from './HomeStyle';

export default class HomeScreen extends React.Component{

  render() {
    return(
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title}> Github Duel </Text>
            </View>

            <View>
                <Text style={style.description}> Battle your friends ... and stuff. </Text>
            </View>

            <View style={style.touchableContainer}>
                <TouchableHighlight
                    style={style.touchable}
                    onPress={ () => { this.props.navigation.navigate('Duel'); } }
                >
                    <Text style={style.textButton}>
                        Battle
                    </Text>
                </TouchableHighlight>
            </View>

        </View>
    );
  }
}