import { ArrowLeft } from "phosphor-react-native";
import { css, styled } from "styled-components/native";

export const ScreenContainer = styled.View`
  flex: 1;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 50px;

  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;
`

interface BackButtonIconStyleProps {
  type: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
}

export const BackButtonIcon = styled(ArrowLeft).attrs<BackButtonIconStyleProps>(({ theme, type }) => ({
  size: 24,
  color:
    type === 'POSITIVE' ?
      theme.COLORS.GREEN_DARK :
        type === 'NEGATIVE' ?
          theme.COLORS.RED_DARK :
          theme.COLORS.GRAY_600
}))``

export const Container = styled.View`
  ${({ theme }) => theme.PRED_STYLES.CONTAINER}

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

export const Data = styled.View`
  margin-top: 23px;
  gap: 12px;
`

export const DataInfo = styled.View`
  align-self: stretch;
  flex-direction: row;
  gap: 12px;
`