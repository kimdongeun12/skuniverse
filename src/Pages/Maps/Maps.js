
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Maps() {
  return (
    <View style={styles.container}>
      <Text>Maps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Maps;