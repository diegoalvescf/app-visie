import { CaretLeft } from 'phosphor-react-native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TouchHomeButton = styled.TouchableOpacity``;

export const Logo = styled.Image`
  width: ${RFValue(105)}px;
  height: ${RFValue(30)}px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  color: theme.colors.white,
  size: theme.sizeIcon.xl.responsive,
}))``;
