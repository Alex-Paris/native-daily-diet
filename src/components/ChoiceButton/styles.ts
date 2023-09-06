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

export const Content = styled.View`
  flex-direction: row;
  gap: 24px;
`

type TypeProps = 'POSITIVE' | 'NEGATIVE'

interface ButtonStyleProps {
  type: TypeProps
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

  ${({ type, isActive, theme }) => 
    type === 'POSITIVE' && isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_DARK};
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `};

  ${({ type, isActive, theme }) => 
    type === 'NEGATIVE' && isActive && css`
    border: 1px solid ${theme.COLORS.RED_DARK};
    background-color: ${theme.COLORS.RED_LIGHT};
  `};
`

interface ButtonDotStyleProps {
  type: TypeProps
}

export const ButtonDot = styled.View<ButtonDotStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({theme, type}) => 
    type === 'POSITIVE'
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