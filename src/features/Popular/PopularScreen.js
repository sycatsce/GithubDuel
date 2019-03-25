import React from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import * as api from '../../api/github';

export default class PopularScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = { repositories : [] };
  }

  componentDidMount(){
    api.getPopularRepos().then( (repositories) => { this.setState({ repositories: repositories.items }); console.log(this.state.repositories); });
  }

  render() {
    return(
        <View>
            <View>
                <Text> Popular Repositories </Text>
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
    );
  }
}