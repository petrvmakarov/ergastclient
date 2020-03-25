// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  items: Array<string>,
};

export default function Header(props: Props) {
  const {items} = props;

  function renderCell(cellData) {
    return (
      <View key={cellData} style={styles.itemContainer}>
        <Text>{cellData}</Text>
      </View>
    );
  }

  function renderCells() {
    return items.map(renderCell)
  }

  return (
    <View style={styles.container}>
      {renderCells()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  itemContainer: {
    height: 44,
    //width: '25%',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  altRow: {
    backgroundColor: '#ccc',
  },
});
