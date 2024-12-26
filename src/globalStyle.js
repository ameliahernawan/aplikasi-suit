import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#FABB55',
  secondary: '#02CCB0',
  danger: '#FF3131',
};

export const TEXT = StyleSheet.create({
  tittle: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Bangers',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0.1,
  },
});

export const BUTTONS = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
  },
  danger: {
    backgroundColor: COLORS.danger,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 7,
  },
});
