import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

// Style
import styles from './style';

// Redux connect
import { connect } from 'react-redux';

// Actions
import { getEmployeeDetail } from '../../Actions/UserActions';

class DashBoard extends Component {

  // Navigation Options
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Get employee details
    this.props.getEmployeeDetail();
  }

  renderList() {
    if (this.props.employeeData != null) {
      var data = this.props.employeeData.user;
      return data.map((val, i) => {
        return (
          <View key={i}>
            <View style={styles.card}>
              <View style={styles.imgDiv}>
                <Image source={require('../../images/boy.png')} style={styles.userLogo} />
              </View>
              <View style={styles.subDiv}>
                <Text style={styles.subTitle}>Personal Details</Text>
                <Text style={styles.nameText}>{val.name}</Text>
                <Text style={styles.text}>Age: {val.age}</Text>
                <Text style={styles.text}>{val.gender}</Text>
              </View>
              <View style={styles.subDiv2}>
                <Text style={styles.mailText}>{val.email}</Text>
                <Text style={styles.text}>{val.phoneNo}</Text>
              </View>
            </View>
          </View>
        )
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerDiv}>
          <View style={styles.subDiv}>
            <Text style={styles.headerText}>Employee List</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollDiv}>
          {
            this.renderList()
          }
        </ScrollView>
      </View>
    )
  }
}

function mapStateProps(state) {
  return {
    employeeData: state.employeeData
  }
}

function mapDispatchProps(dispatch) {
  return {
    getEmployeeDetail: () => dispatch(getEmployeeDetail()),
  }
}

export default connect(mapStateProps, mapDispatchProps)(DashBoard)