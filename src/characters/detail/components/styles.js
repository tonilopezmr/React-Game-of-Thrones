import {
  StyleSheet,
  Platform
} from 'react-native';

const fontColor = (Platform.OS === 'ios') ? 'black' : 'white'

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    flex: 1
  },
  name: {
    fontSize: 20,
    color: fontColor,
  },
  character: {
    flex: 1,
    padding: 16,
    backgroundColor: (Platform.OS === 'ios') ? 'white' : '#333333'
  },
  description: {
    marginTop: 10,
    paddingBottom: 40,
    color: fontColor,
  }

});

export default styles;