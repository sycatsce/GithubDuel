import React from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duelActions from './actions';
import PlayerInput from './PlayerInput';
import PlayerReady from './PlayerReady';
import * as api from '../../api/github';
import { style } from './DuelStyle';

class DuelScreen extends React.Component{

    static navigationOptions = { header: null }

    constructor(props){
        super(props);
        this.state = { username1 : 'sycatsce', username2: 'so-mouga', playerOneStars : 0, playerTwoStars : 0, scorePlayerOne : 0, scorePlayerTwo : 0 };
    }

    getStars(){
        var { playerOne, playerTwo } = this.props;
        api.getUserRepos(playerOne.login).then( (repos) => {
            var starsCount = 0;
            repos.map( (value, index) => {
                starsCount = starsCount + value.stargazers_count;
            });
            this.setState({ playerOneStars: starsCount});
            api.getUserRepos(playerTwo.login).then( (repos) => {
                var starsCount = 0;
                repos.map( (value, index) => {
                    starsCount = starsCount + value.stargazers_count;
                });
                this.setState({ playerTwoStarts: starsCount});
                this.calculateScore();
            })
        })

    }

    calculateScore(){
        var { playerOne, playerTwo } = this.props;
        this.setState({ scorePlayerOne :  parseInt(playerOne.followers) + parseInt(playerOne.public_repos) + this.state.playerOneStars });
        this.setState({ scorePlayerTwo : parseInt(playerTwo.followers) + parseInt(playerTwo.public_repos) + this.state.playerTwoStars });
        this.props.navigation.navigate('Results', { scorePlayerOne : this.state.scorePlayerOne, scorePlayerTwo: this.state.scorePlayerTwo } );
    }

    render() {
        var { username1, username2 } = this.state;
        var { playerOneReady, playerTwoReady, actions:{ playerOneReadyAction, playerTwoReadyAction, playerOneUnreadyAction, playerTwoUnreadyAction, setPlayerOneAction, setPlayerTwoAction } } = this.props;
        return(
            <View style={style.container}>
                <View style={style.titleContainer}>
                    <Text style={style.title}> IT'S TIME TO D-D-D-D-DUEL </Text>
                </View>

                {  !playerOneReady ? 
                    <PlayerInput
                        label={"Player One"}
                        action={ () => playerOneReadyAction() }
                        onChangeText={ (parUsername) => this.setState({ username1 : parUsername }) }
                        username={username1}
                    /> :
                    <PlayerReady actionSetUser={setPlayerOneAction} actionUnready={() => playerOneUnreadyAction()} username={username1} />
                }

                {   !playerTwoReady ? 
                    <PlayerInput
                        label={"Player Two"}
                        action={ () => playerTwoReadyAction() }
                        onChangeText={ (parUsername) => this.setState({ username2 : parUsername }) }
                        username={username2}
                    /> :
                    <PlayerReady actionSetUser={setPlayerTwoAction} actionUnready={() => playerTwoUnreadyAction()} username={username2} />
                }

                { 
                    (playerOneReady && playerTwoReady ) &&
                    <TouchableHighlight
                        style={style.touchable}
                        onPress={ () => { this.getStars() } }
                    >
                        <Text style={style.textButton}>
                            Duel
                        </Text>
                    </TouchableHighlight>
                }
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    var { playerOneReady, playerTwoReady, playerOne, playerTwo } = state.duelReducer;
    return {
      playerOneReady,
      playerTwoReady,
      playerOne,
      playerTwo
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(duelActions, dispatch),
  });

export default connect(mapStateToProps, mapDispatchToProps)(DuelScreen);