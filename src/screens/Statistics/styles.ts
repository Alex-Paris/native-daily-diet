import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const PopContainer = styled.View`
  ${({ theme }) => theme.PRED_STYLES.SCREEN_CONTAINER}

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: -32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  margin-top: 33px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const PopData = styled.View`
  margin-top: 23px;
  gap: 12px;
`

export const PopDataInfo = styled.View`
  align-self: stretch;
  flex-direction: row;
  gap: 12px;
`