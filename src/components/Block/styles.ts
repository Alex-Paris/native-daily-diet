import { DietTypeDTO } from "@dtos/DietTypeDTO";
import { ArrowUpRight } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

interface ContainerStyleProps {
  isDiet: DietTypeDTO
  containerSize: 'NORMAL' | 'LARGE'
}

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  align-self: stretch;
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ isDiet, theme }) => (
    isDiet === true ?
      theme.COLORS.GREEN_LIGHT :
    isDiet === false ?
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
  isDiet: DietTypeDTO
}

export const LinkIcon = styled(ArrowUpRight).attrs<LinkIconStyleProps>(({ isDiet, theme }) => ({
  size: 24,
  color:
    isDiet === true ?
      theme.COLORS.GREEN_DARK :
    isDiet === false ?
      theme.COLORS.RED_DARK
    :
      theme.COLORS.GRAY_600
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`