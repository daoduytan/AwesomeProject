import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailType, passwordType, signupUser } from '../../../actions';

import { SPACE, COLOR } from '../../../config';
import Input from '../../../components/Input';
import Btn from '../../../components/Btn';

class Register extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }
  
  handleBtn = () => {
    const { email, password } = this.props;
    this.props.signupUser({ email, password });
  }

  render() {
    const { emailType, passwordType, email, password, error } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.section}>
            <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 5 }}>Wellcome Back</Text>
            <Text>Please sign up to continue</Text>
          </View>
          <View style={styles.section}>
            <Input
              label="Email"
              value={email}
              placeholder="example@email.com"
              onChangeText={text => emailType(text)}
            />
            <Input
              secureTextEntry
              label="Password"
              value={password}
              placeholder="******"
              onChangeText={text => passwordType(text)}
            />
          </View>
          {error && <View style={{ backgroundColor: 'red', padding: 5, borderRadius: 3, marginBottom: 15 }}><Text style={{ color: '#fff' }}>{error.message}</Text></View>}
          <View style={styles.section}>
            <Btn
              color="#fff"
              backgroundColor={COLOR.primary}
              title="Login"
              onPress={this.handleBtn}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: SPACE + SPACE
  },
  section: {
    marginVertical: SPACE
  }
});

const mapStateToProp = ({ auth }) => {
  const { email, password, error } = auth;
  return { email, password, error };
};

export default connect(mapStateToProp, { 
  emailType, passwordType, signupUser 
})(Register);
