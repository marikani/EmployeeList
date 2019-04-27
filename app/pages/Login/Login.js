import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native';

// Style
import styles from './style';

// Redux connect
import { connect } from 'react-redux';

// Actions
import { setUserId, setPassword } from '../../Actions/UserActions';

class Login extends Component {

  // Navigation Options
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
  }

  // Login function
  login() {
    var email = this.props.email;
    var password = this.props.password;

    let obj = {
      "username": "prashant@gmail.com",
      "password": "prashant123"
    };

    if (this.emailValidator(email) == false) {
      ToastAndroid.show('Invalid Email Address!', ToastAndroid.SHORT);
    } else if (email == obj.username && password == obj.password) {
      this.props.navigation.navigate('DashBoard');
    } else {
      ToastAndroid.show('Invalid Email or Password!', ToastAndroid.SHORT);
    }
  }

  // Email Validator
  emailValidator(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
  }


  render() {
    return (
      <View style={styles.mainDiv}>
        <ScrollView keyboardShouldPersistTaps='handled' style={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={require('../../images/boy.png')} style={styles.userLogo} />
            </View>
            <View style={styles.subDiv}>
              <TextInput
                style={styles.textBox}
                onChangeText={(text) => this.props.setUserId(text)}
                value={this.props.email}
                placeholder="Enter Email"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.textBox}
                onChangeText={(text) => this.props.setPassword(text)}
                value={this.props.password}
                placeholder='Enter password'
              />
              <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateProps(state) {
  return {
    email: state.email,
    password: state.password
  }
}

function mapDispatchProps(dispatch) {
  return {
    setUserId: (val) => dispatch(setUserId(val)),
    setPassword: (val) => dispatch(setPassword(val))
  }
}

export default connect(mapStateProps, mapDispatchProps)(Login);

