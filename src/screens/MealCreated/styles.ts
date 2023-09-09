import styled, { css } from "styled-components/native";

import { Button } from "@components/Button";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
  margin: auto 32px;
  align-items: center;
  justify-content: center;
`

interface TitleStyleProps {
  isDiet: boolean
}

export const Title = styled.Text<TitleStyleProps>`
  text-align: center;
  ${({ theme, isDiet }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${
      isDiet
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK
    };
  `};
`

export const Text = styled.Text`
  margin-top: 8px;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const Image = styled.Image`
  width: 280px;
  height: 400px;
  margin-top: 40px;
`

export const GoHomeButton = styled(Button)`
  width: auto;
  margin-top: 32px;
`