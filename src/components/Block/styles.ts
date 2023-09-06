import { ArrowUpRight } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

interface ContainerStyleProps {
  valueType: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
  containerSize: 'NORMAL' | 'LARGE'
}

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  /* width: 100%; */
  align-self: stretch;
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ valueType, theme }) => (
    valueType === 'POSITIVE' ?
      theme.COLORS.GREEN_LIGHT :
      valueType === 'NEGATIVE' ?
      theme.COLORS.RED_LIGHT
    :
      theme.COLORS.GRAY_200
  )};

  ${({ containerSize }) => containerSize === 'LARGE' && css`
    padding-top: 20px;
    padding-bottom: 20px;
  `};
  
  align-items: center;
`

interface ValueStyleProps {
  containerSize: 'NORMAL' | 'LARGE'
}

export const Value = styled.Text<ValueStyleProps>`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};

  ${({ containerSize, theme }) => containerSize === 'LARGE' && css`
    font-size: ${theme.FONT_SIZE.XL_2}px;
  `};
`

export const Description = styled.Text`
  margin-top: 8px;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`

interface LinkIconStyleProps {
  valueType: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
}

export const LinkIcon = styled(ArrowUpRight).attrs<LinkIconStyleProps>(({ valueType, theme }) => ({
  size: 24,
  color:
    valueType === 'POSITIVE' ?
      theme.COLORS.GREEN_DARK :
        valueType === 'NEGATIVE' ?
          theme.COLORS.RED_DARK :
          theme.COLORS.GRAY_600
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`