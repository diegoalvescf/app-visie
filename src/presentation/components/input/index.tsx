import { useTheme } from 'styled-components/native';
import { InputComponentProps } from './props';
import { Container, ErrorMessage } from './styles';

export const InputComponent: React.FC<InputComponentProps> = ({
  errorMessage,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <>
      <Container
        {...rest}
        placeholderTextColor={colors.gray_300}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};
