// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  label: String,
  text: String,
}

export default function LabeledField(props: Props) {
  const {label, text} = props;
  return text ? (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Text>{text}</Text>
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
});