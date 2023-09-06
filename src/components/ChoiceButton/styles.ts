import { css, styled } from "styled-components/native";

import { DietTypeDTO } from "@dtos/DietTypeDTO";

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

export const Content = styled.View`
  flex-direction: row;
  gap: 24px;
`

interface ButtonStyleProps {
  isDiet: DietTypeDTO
  isActive?: boolean
}

export const Button = styled.TouchableOpacity<ButtonStyleProps>`
  flex: 1 0 0;
  flex-direction: row;
  gap: 8px;
  padding: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  background-color: ${({theme}) => theme.COLORS.GRAY_200};

  ${({ isDiet, isActive, theme }) => 
    isDiet && isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_DARK};
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ isDiet, isActive, theme }) => 
    !isDiet && isActive && css`
    border: 1px solid ${theme.COLORS.RED_DARK};
    background-color: ${theme.COLORS.RED_LIGHT};
  `};
`

interface ButtonDotStyleProps {
  isDiet: DietTypeDTO
}

export const ButtonDot = styled.View<ButtonDotStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({theme, isDiet}) => 
    isDiet
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`