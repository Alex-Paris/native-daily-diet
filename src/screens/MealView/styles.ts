import { styled } from "styled-components/native";

export const ScreenContainer = styled.View`
  flex: 1;
`

export const Container = styled.View`
  ${({ theme }) => theme.PRED_STYLES.CONTAINER}
  ${({ theme }) => theme.PRED_STYLES.POP_CONTAINER}

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding-top: 40px;
  padding-bottom: 40px;
`

export const Form = styled.View`
  flex: 1;
  gap: 24px;
`

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`