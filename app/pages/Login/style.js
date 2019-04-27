import { StyleSheet } from 'react-native';
// Dimenstions
import Dimensions from 'Dimensions';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  mainDiv: {
    width: '100%',
    height: '100%'
  },
  container: {
    height: height - 25,
    flexDirection: 'column',
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    width: '100%'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userLogo: {
    width: 120,
    height: 120
  },
  subDiv: {
    flex: 1,
    flexDirection: 'column',
  },
  textBox: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderBottomColor: '#f44336d1',
    margin: 10
  },
  loginBtn: {
    backgroundColor: '#f44336d1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 2
  },
  loginText: {
    padding: 16,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})