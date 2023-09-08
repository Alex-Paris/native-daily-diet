import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: #00000050;
`

export const ModalView = styled.View`
  align-items: center;

  padding: 40px 24px 24px;
  margin: 24px;
  border-radius: 8px;
  gap: 32px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`

export const ModalText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
`

export const ModalButtons = styled.View`
  align-self: stretch;
  flex-direction: row;
  gap: 12px;
`