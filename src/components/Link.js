// @flow
import React from 'react';
import {StyleSheet, Linking, Text, View} from 'react-native';

type Props = {
  label: String,
  url: String,
}

export default function Link(props: Props) {
  const {label, url} = props;
  function onPress() {
    Linking.openURL(url);
  }
  return url ? (
    <View style={styles.container}>
      <Text style={styles.link} onPress={onPress}>{label}</Text>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'blue'
  }
});