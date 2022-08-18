import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const WIDTH = Dimensions.get('window').width;

export const COLORS = {
  // base colors
  primary: '#ffe707', // orange
  secondary: '#CDCDD2', // gray
  BGPrimary : '#191925', //background
  black: '#000000',
  white:'#fff'
};

export const SIZES = {
  // global sizes
  base: 14,
  font: 14,

  width,
  height,
};


const appTheme = {COLORS, SIZES};

export default appTheme;
