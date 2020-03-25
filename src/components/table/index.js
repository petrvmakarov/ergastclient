// @flow

import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import Header from './Header';
import Row from './Row';

type Props = {
  headers: Array<string>,
  data: Array<any>,
  extractRowData: (any) => Array<String>,
  extractKey: (any) => String,
  onCellPress?: Array<() => void>,
  onEndReached?: () => void,
  showLoader?: Boolean,
}

Table.defaultProps = {
  onEndReached: () => null,
  onCellPress: [],
};

export default function Table(props: Props) {
  const {
    headers,
    data,
    extractRowData,
    extractKey,
    onCellPress,
    onEndReached,
    showLoader,
  } = props;
  function renderItem({item, index}) {
    const rowData = extractRowData(item);
    const key = extractKey(item);
    return (
      <Row
        fullData={item}
        data={rowData}
        key={key}
        index={index}
        onCellPress={onCellPress}
      />
    );
  }

  function renderLoader() {
    return showLoader ? (
      <View style={styles.loaderontainer}>
        <ActivityIndicator />
      </View>
    ) : null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header items={headers} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          onEndReached={onEndReached}
          keyExtractor={extractKey}
          ListFooterComponent={renderLoader}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    height: 44,
  },
  loaderontainer: {
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
  },
});