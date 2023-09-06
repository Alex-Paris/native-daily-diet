import { css, styled } from "styled-components/native";

export const ScreenContainer = styled.View`
  flex: 1;
`

export const Container = styled.View`
  ${({ theme }) => theme.PRED_STYLES.CONTAINER}
  ${({ theme }) => theme.PRED_STYLES.POP_CONTAINER}

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  gap: 9px;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const Content = styled.View`
  flex: 1;
  gap: 24px;
`

export const ContentText = styled.View`
  gap: 8px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`

export const TitleDate = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`

export const TagContainer = styled.View`
  align-self: baseline;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const TagDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`


export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`