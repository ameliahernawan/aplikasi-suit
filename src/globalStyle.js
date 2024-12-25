import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#FABB55',
  secondary: '#02CCB0',
  danger: '#FF3131',
};

export const BUTTONS = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
  },
});
