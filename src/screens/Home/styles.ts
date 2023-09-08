import { SafeAreaView } from "react-native-safe-area-context";
import { css, styled } from "styled-components/native";

import { DietTypeDTO } from "@dtos/DietTypeDTO";

export const Container = styled(SafeAreaView)`
  ${({theme}) => theme.PRED_STYLES.CONTAINER}
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

export const ListSection = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const ListSectionTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  gap: 12px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`

export const ListItemHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const ListItemDivider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const ListItemText = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`

interface ListItemDotStyleProps {
  isDiet: DietTypeDTO
}

export const ListItemDot = styled.View<ListItemDotStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 9999px;
  background-color: ${({ isDiet, theme }) => (
    isDiet === true ?
      theme.COLORS.GREEN_MID :
    isDiet === false ?
      theme.COLORS.RED_MID
    :
      theme.COLORS.GRAY_400
  )};
`