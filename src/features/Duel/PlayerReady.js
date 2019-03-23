import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import * as api from '../../api/github';

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
        var { actionUnready } = this.props; //Action passé en propriété par le père
        return(
            <View>
                <View>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{uri: user.avatar_url}}
                    />
                    <Text> { "@" + user.login }</Text>
                    <TouchableHighlight onPress={ () => actionUnready() }>
                        <Text> Reset </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}