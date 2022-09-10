
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Alignment() {
  return (
    <View style={styles.container}>
      <Text>Alignment</Text>
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

export default Alignment;