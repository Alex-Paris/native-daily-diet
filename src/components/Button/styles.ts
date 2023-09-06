import { MaterialCommunityIcons } from "@expo/vector-icons"
import { css, styled } from "styled-components/native";

export type ButtonTypeProps = 'PRIMARY' | 'SECONDARY'

interface ContainerStyleProps {
  type: ButtonTypeProps
}

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;
  gap: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, type }) => 
    type === 'PRIMARY' ? css`
      background-color: ${theme.COLORS.GRAY_600};
    ` : css`
      border: 1px solid ${theme.COLORS.GRAY_700};
    `
  };
`

export const Icon = styled(MaterialCommunityIcons).attrs<ContainerStyleProps>(({ theme, type }) => ({
  size: 18,
  color: 
    type === 'PRIMARY' ?  
      theme.COLORS.WHITE :
      theme.COLORS.GRAY_700,
}))``

export const Text = styled.Text<ContainerStyleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: 
      ${type === 'PRIMARY' ? 
          theme.COLORS.WHITE :
          theme.COLORS.GRAY_700
        };
  `};
`