import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResultsScreenActions from './actions';
import { style } from './DuelStyle';
import { NavigationActions } from 'react-navigation';

class ResultsScreen extends React.Component{

    static navigationOptions = { header: null }

    render() {
        var { navigation, playerOne, playerTwo } = this.props;
        return(
            <View>
                <View style={style.resultsContainer}>
                    <View style={style.centered}>

                        <Text style={style.username}> { "Score " + navigation.getParam('scorePlayerOne') } </Text>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{uri: playerOne.avatar_url}}
                        />
                        <Text style={style.username}> { "@" + playerOne.login }</Text>
                    </View>

                    { playerOne.name && <Text> { playerOne.name } </Text> }
                    { playerOne.location && <Text> { playerOne.location } </Text> }
                    <Text> Followers : { playerOne.followers } </Text>
                    <Text> Following : { playerOne.following }</Text>
                    <Text> Repositories : { playerOne.public_repos } </Text>
                </View>

                <View style={style.resultsContainer}>

                    <View style={style.centered}>
                        <Text style={style.username}> { "Score " + navigation.getParam('scorePlayerTwo') } </Text>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{uri: playerTwo.avatar_url}}
                        />
                        <Text style={style.username}> { "@" + playerTwo.login }</Text>
                    </View>

                    { playerTwo.name && <Text> { playerTwo.name } </Text> }
                    { playerTwo.location && <Text> { playerTwo.location } </Text> }
                    <Text> Followers : { playerTwo.followers } </Text>
                    <Text> Following : { playerTwo.following }</Text>
                    <Text> Repositories : { playerTwo.public_repos } </Text>
                </View>

                <View style={style.touchableContainer}>
                    <TouchableHighlight
                        style={style.touchable}
                        onPress={ () => this.props.navigation.dispatch( NavigationActions.back( { key: null }) ) }
                    >
                        <Text style={style.textButton}> Replay </Text>
                    </TouchableHighlight>
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