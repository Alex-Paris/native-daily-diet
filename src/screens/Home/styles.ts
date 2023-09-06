import { SafeAreaView } from "react-native-safe-area-context";
import { css, styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  ${({theme}) => theme.PRED_STYLES.SCREEN_CONTAINER}
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const TopText = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`
