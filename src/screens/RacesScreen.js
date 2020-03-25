// @flow
import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {fetchRaces} from '../redux/actions/races';
import Table from '../components/table';
import Race from '../model/Race';

type Props = {
  fetchData: (String) => void,
  items: Array<Race>,
  isFetching: Boolean,
};

class RacesScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchData(this.props.route.params);
  }

  onItemPress = (item:Driver) => {
    this.props.navigation.navigate('RacerDetails', item);
  }

  renderLoader() {
    return <ActivityIndicator />;
  }

  renderTable() {
    const {items} = this.props;
    return (
      <Table
        data={items}
        headers={['Season', 'Race Name', 'Round']}
        extractRowData={_ => [_.season, _.raceName, _.round]}
        extractKey={_ => `${_.season}${_.raceName}${_.round}`}
      />
    );
  }

  render() {
    const {isFetching} = this.props;
    const innerView = isFetching ? this.renderLoader() : this.renderTable();
    return <View style={styles.container}>{innerView}</View>;
  }
}

const mapStateToProps = (state) => {
  const {races} = state
  return races; 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (fetched: string) => dispatch(fetchRaces(fetched)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RacesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
