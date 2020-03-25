// @flow
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  index: Number,
  data: Array<String>,
  fullData: any,
}

export default function Row(props: Props) {
  const styles = buildStyles(props);
  const {index, data, fullData, onCellPress} = props;
  const rowStyle = index % 2 !== 0 ? styles.altRow : {};

  function renderCells() {
    return data.map(renderCell);
  }

  function renderCell(cellData: String, index: Number) {
    const onPress = onCellPress[index] ? () => onCellPress[index](fullData) : null;
    const style = onPress ? styles.link : null;
    return (
      <View key={cellData} style={styles.itemContainer}>
        <Text style={style} onPress={onPress}>{cellData}</Text>
      </View>
    );
  }

  return <View style={[styles.container, rowStyle]}>{renderCells()}</View>;
};
function buildStyles(props: Props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    itemContainer: {
      height: 44,
      flex: props.data.length,
      alignItems: 'center',
      justifyContent: 'center',
    },
    altRow: {
      backgroundColor: '#ccc',
    },
    link: {
      color: 'blue',
    },
  });
  return styles;
}