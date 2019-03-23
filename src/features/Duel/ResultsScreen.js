import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResultsScreenActions from './actions';
import * as api from '../../api/github';

class ResultsScreen extends React.Component{

    render() {
        var { navigation, playerOne, playerTwo } = this.props;
        return(
            <View>
                <View>
                    <Text> { "Score " + navigation.getParam('scorePlayerOne') } </Text>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{uri: playerOne.avatar_url}}
                    />
                    <Text> { "@" + playerOne.login }</Text>
                    { playerOne.name && <Text> { playerOne.name } </Text> }
                    { playerOne.location && <Text> { playerOne.location } </Text> }
                    <Text> Followers : { playerOne.followers } </Text>
                    <Text> Following : { playerOne.following }</Text>
                    <Text> Repositories : { playerOne.public_repos } </Text>
                </View>

                <View>
                    <Text> { "Score " + navigation.getParam('scorePlayerTwo') } </Text>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{uri: playerTwo.avatar_url}}
                    />
                    <Text> { "@" + playerTwo.login }</Text>
                    { playerTwo.name && <Text> { playerTwo.name } </Text> }
                    { playerTwo.location && <Text> { playerTwo.location } </Text> }
                    <Text> Followers : { playerTwo.followers } </Text>
                    <Text> Following : { playerTwo.following }</Text>
                    <Text> Repositories : { playerTwo.public_repos } </Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    var { playerOne, playerTwo } = state.duelReducer;
    return {
      playerOne,
      playerTwo
    }
}
  
  
const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(ResultsScreenActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);