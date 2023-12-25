import React from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.heighLowWrapper}>
            <Text style={styles.heighLow}>High: 8</Text>
            <Text style={styles.heighLow}>Low: 6</Text>
          </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.decription}>It's sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt wather</Text>
          <Icon name="sun" size={100} color="red" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  temp: {
    color: 'black',
    fontSize: 48,
  },

  feels: {
    color: 'black',
    fontSize: 30,
  },

  heighLowWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  heighLow: {
    color: 'black',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  decription: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default App;
