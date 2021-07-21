import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false
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
        });
    }, 1000);
  };

  render() {
    return (
      <View style={style.container}>
        { this.state.loading ? <ActivityIndicator size="large" color="#6ca2f7" /> 
          :  <PeopleList peoples={this.state.peoples} onPressItem={(pageParams) => { this.props.navigation.navigate('Detalhes', { people: pageParams }) }} />
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