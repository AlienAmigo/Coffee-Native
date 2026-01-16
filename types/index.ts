import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  useTheme as useRNPTheme,
} from 'react-native-paper';
import { Colors } from '@constants/colors';

export interface IReactNativePaperCustomTheme extends MD3Theme {
  colors: MD3Theme['colors'] & (typeof Colors)['additional'];
}

export const theme: IReactNativePaperCustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.white,
    surface: Colors.white,
    onSurfaceVariant: Colors.onSurfaceVariant,
    // дополнительные цвета
    ...Colors.additional,
  },
  roundness: 20,
};

// Кастомный хук useTheme с правильным типом
export const useTheme = () => useRNPTheme() as IReactNativePaperCustomTheme;
