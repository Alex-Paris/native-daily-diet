import { css, styled } from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  padding: 32px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 9999px;

  ${({ theme }) => css`
    border: 2px solid ${theme.COLORS.GRAY_600};
    background-color: ${theme.COLORS.GRAY_400};
  `};
`