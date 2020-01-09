import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 40
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8
  }
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}
