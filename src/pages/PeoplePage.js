import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        peoples: []
    };
}

componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {
        const {results} = response.data;
        this.setState({
          peoples: results
        });
    });
  };

  render() {
    return (
      <View>
        {/*<Header title="Contatos" />*/}
        <PeopleList peoples={ this.state.peoples }/>
      </View>
    );
  }
}

