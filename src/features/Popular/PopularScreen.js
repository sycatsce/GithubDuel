import React from 'react';
import { Text, View, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native';
import * as api from '../../api/github';

export default class PopularScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = { repositories : [], loading: false, error: false };
  }

  componentDidMount(){
    this.getPopularRepos('all');
  }

  getPopularRepos(language){
    this.setState({ loading: true, repositories: [] });
    api.getPopularRepos(language)
      .then( (repositories) => { this.setState({ repositories: repositories.items, loading: false}) })
      .catch( (error) => this.setState({ error: true }) );
  }

  render() {
    if (this.state.error == true){ return (
        <View>
          <Text> Could not display repositories </Text>
          <TouchableHighlight onPress={() => this.getPopularRepos('all')}><Text> Retry </Text></TouchableHighlight>
        </View> 
      )
    }
    return(
      <View>
          {
            this.state.loading == true ?
            <ActivityIndicator size="large" /> :
            <View> 
              <View>
                  <Text> Popular Repositories </Text>
              </View>

              <View>
                <TouchableHighlight onPress={ () => this.getPopularRepos('javascript') } ><Text>JavaScript</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => this.getPopularRepos('ruby') } ><Text>Ruby</Text></TouchableHighlight>
                <TouchableHighlight onPress={ () => this.getPopularRepos('go') } ><Text>Go</Text></TouchableHighlight>
              </View>

              <View>
                <FlatList
                  data={this.state.repositories}
                  renderItem={ (repo) => (
                      <View>
                        <Text style={{ fontWeight: 'bold' }}>{ repo.item.name } </Text>
                        <Text style={{ fontSize: 15 }}>{ repo.item.stargazers_count + "\n" }</Text>
                      </View>
                  )}
                /> 
              </View>
            </View>
          }
      </View> 
    );
  }
}