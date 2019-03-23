import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class HomeScreen extends React.Component{

  render() {
    return(
        <View>
            <View>
                <Text> Github Duel </Text>
            </View>

            <View>
                <Text> Battle your friends ... and stuff. </Text>
            </View>

            <TouchableHighlight
                onPress={ () => { this.props.navigation.navigate('Duel'); } }
            >
                <Text>
                    Battle
                </Text>
          </TouchableHighlight>
        </View>
    );
  }
}