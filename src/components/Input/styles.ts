import { TextInput } from "react-native";
import { css, styled } from "styled-components/native";

export const Container = styled.View`
  align-self: stretch;
  gap: 4px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
`

export const InputField = styled(TextInput)`
  padding: 14px;

  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`