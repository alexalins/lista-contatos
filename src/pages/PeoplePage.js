import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import Erro from '../components/Erro';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      erro: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios.get('https://randomuser.me/api/?nat=br&results=50')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false
          });
        }).catch( error => {
          this.setState({ error: true, loading: false});
        });
    }, 1000);
  };

  render() {
    return (
      <View style={style.container}>
        { this.state.loading ? <ActivityIndicator size="large" color="#6ca2f7" /> 
          : this.state.error ? <Erro />:
           <PeopleList peoples={this.state.peoples} onPressItem={(pageParams) => { this.props.navigation.navigate('Detalhes', { people: pageParams }) }} />
        }
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});