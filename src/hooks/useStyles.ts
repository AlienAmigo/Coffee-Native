// useStyles.ts
import { useMemo } from "react";
import { useTheme, IReactNativePaperCustomTheme } from "@/theme";

export const useStyles = <T>(
  createStyle: (theme: IReactNativePaperCustomTheme) => T,
) => {
  const theme: IReactNativePaperCustomTheme = useTheme();

  const styles = useMemo(() => createStyle(theme), [theme, createStyle]);

  return { styles, theme };
};
