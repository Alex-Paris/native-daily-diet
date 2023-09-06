import { DietTypeDTO } from "@dtos/DietTypeDTO";
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
  isDiet: DietTypeDTO
}

export const BackButtonIcon = styled(ArrowLeft).attrs<BackButtonIconStyleProps>(({ theme, isDiet }) => ({
  size: 24,
  color:
    isDiet === true ?
      theme.COLORS.GREEN_DARK :
    isDiet === false ?
      theme.COLORS.RED_DARK 
    :
      theme.COLORS.GRAY_600
}))``

export const Container = styled.View`
  ${({ theme }) => theme.PRED_STYLES.CONTAINER}
  ${({ theme }) => theme.PRED_STYLES.POP_CONTAINER}

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