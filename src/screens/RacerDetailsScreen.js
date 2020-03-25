// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchRacer} from '../redux/actions/racer';
import Driver from '../model/Driver';
import LabeledField from '../components/LabeledField';
import Link from '../components/Link';

type Props = {
  fetchData: (Number) => void,
};

class RacerDetailsScreen extends React.Component<Props> {
  componentDidMount() {
    const {fetchData, route} = this.props;
    //fetchData(route.params.driverId);
  }

  render() {
    const driver = this.props.route.params;
    return (
      <View style={styles.container}>
        <LabeledField label="Given name:" text={driver.givenName} />
        <LabeledField label="Family name:" text={driver.familyName} />
        <LabeledField label="DOB:" text={driver.dateOfBirth} />
        <LabeledField label="Nationality:" text={driver.nationality} />
        <LabeledField label="Permanent number:" text={driver.permanentNumber} />
        <LabeledField label="Code:" text={driver.code} />
        <Link label="Bio" url={driver.url} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {racer} = state
  return racer;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (driverId: string) => dispatch(fetchRacer(driverId)),
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RacerDetailsScreen);