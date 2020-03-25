// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchRacers} from '../redux/actions/racers';
import Table from '../components/table';
import Driver from '../model/Driver';

type Props = {
  fetchData: (Number) => void,
  items: Array<Driver>,
  isFetching: Boolean,
  navigation: any,
};

class RacersScreen extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  onListEndReached = () => {
    const {items, isFetching} = this.props;
    if (!isFetching) {
      this.props.fetchData(items.length);
    } else {
      console.log('please wait fetching in progress');
    }
  }

  onItemPress = (item:Driver) => {
    this.props.navigation.navigate('RacerDetails', item);
  }

  onRacesPress = (driverId: String) => {
    this.props.navigation.navigate('Races', driverId);
  }

  render() {
    const {items, isFetching} = this.props;
    return (
      <View style={styles.container}>
        <Table
          data={items}
          headers={['Full name', 'DOB', 'Nationality', '']}
          extractRowData={_ => [_.fullName, _.dateOfBirth, _.nationality, 'view races']}
          extractKey={_ => _.driverId}
          onCellPress={[this.onItemPress, null, null, (_) => this.onRacesPress(_.driverId)]}
          onEndReached={this.onListEndReached}
          showLoader={isFetching}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {racers} = state
  return racers;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (fetched: Number) => dispatch(fetchRacers(fetched)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RacersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
