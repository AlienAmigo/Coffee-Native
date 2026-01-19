import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  useTheme as useRNPTheme,
} from 'react-native-paper';

export interface IReactNativePaperCustomTheme extends MD3Theme {
  colors: MD3Theme['colors'];
}

export const theme: IReactNativePaperCustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  roundness: 20,
};

// Кастомный хук useTheme с правильным типом
export const useTheme = () => useRNPTheme() as IReactNativePaperCustomTheme;
