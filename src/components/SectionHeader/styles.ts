import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { css, styled } from "styled-components/native";

import { DietTypeDTO } from "@dtos/DietTypeDTO";

interface ContainerStyleProps {
  isDiet: DietTypeDTO
}

export const Container = styled(SafeAreaView)<ContainerStyleProps>`
  padding: 12px 24px 24px;
  align-items: center;
  background-color: 
    ${({ theme, isDiet }) => 
      isDiet === true ?
        theme.COLORS.GREEN_LIGHT :
      isDiet === false ?
        theme.COLORS.RED_LIGHT 
      :
        theme.COLORS.GRAY_300
    };
`

export const Section = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
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

export const BackButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600
}))``