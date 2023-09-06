import { MaterialCommunityIcons } from "@expo/vector-icons"
import { css, styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;
  gap: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`