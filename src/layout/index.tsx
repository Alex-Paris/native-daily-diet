import { View, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Routes } from "@routes/index";

interface LayoutProps extends ViewProps {}

export function Layout({ ...rest }: LayoutProps) {
  const { COLORS } = useTheme()

  return (
    <View { ...rest } style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <Routes />
    </View>
  )
}