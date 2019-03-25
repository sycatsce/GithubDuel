import React from 'react';
import { Text, View, TouchableHighlight, FlatList, ActivityIndicator, Image } from 'react-native';
import * as api from '../../api/github';
import { style } from './PopularStyle';

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
      <View style={style.container}>
          {
            this.state.loading == true ?
            <ActivityIndicator size="large" /> :
            <View> 
              <View style={style.titleContainer}>
                  <Text style={style.title}> Popular Repositories </Text>
              </View>

              <View style={style.languageFilterContainer}>
                <TouchableHighlight style={style.languageFilter} onPress={ () => this.getPopularRepos('javascript') } ><Text style={style.textButton}>JavaScript</Text></TouchableHighlight>
                <TouchableHighlight style={style.languageFilter} onPress={ () => this.getPopularRepos('ruby') } ><Text style={style.textButton}>Ruby</Text></TouchableHighlight>
                <TouchableHighlight style={style.languageFilter} onPress={ () => this.getPopularRepos('go') } ><Text style={style.textButton}>Go</Text></TouchableHighlight>
              </View>

              <View>
                <FlatList
                  data={this.state.repositories}
                  renderItem={ (repo) => (
                    <View style={style.repositoriesContainer}>
                      <View>
                        <Text style={{ fontWeight: 'bold' }}>{ repo.item.name } </Text>
                        <Text style={{ fontSize: 15 }}>{ repo.item.stargazers_count + " stars \n" }</Text>
                      </View>
                      <View style={style.imageContainer}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{uri: repo.item.owner.avatar_url}}
                        />
                      </View>
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