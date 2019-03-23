import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import * as api from '../../api/github';
import { style } from './DuelStyle';

export default class PlayerReady extends React.Component{

    constructor(props){
        super(props);
        this.state = { user : {} }
    }
    
    componentDidMount(){
        var { username, actionSetUser } = this.props;
        api.getUser(username).then( (user) => { this.setState({ user }); actionSetUser(user); });
    }

    render() {
        var { user } = this.state;
        var { actionUnready } = this.props;
        return(
            <View style={style.readyContainer}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{uri: user.avatar_url}}
                />
                <Text style={style.username}> { "@" + user.login }</Text>
                <View style={style.touchableContainer}>
                    <TouchableHighlight
                        onPress={ () => actionUnready() }
                        style={style.touchable}
                    >
                        <Text> Reset </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}