import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIconComponent } from '@components/button-icon';
import { ETypeButtonIcon } from '@components/button-icon/props';
import { View } from 'react-native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_500};
    margin-bottom: ${theme.spacing.xm.responsive}px;
  `}
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(6)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-size: ${theme.typography.fontSize.md.responsive}px;
    font-family: ${theme.fonts.regular};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.md.responsive}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray_300};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: theme.sizeIcon.xxm.responsive,
  color: theme.colors.gray_200,
}))`
  ${({ theme }) => css`
    margin: 0 ${theme.spacing.xm.responsive}px;
  `}
`;

export const ViewMoreButton = styled(ButtonIconComponent).attrs({
  type: ETypeButtonIcon.primary,
})``;
