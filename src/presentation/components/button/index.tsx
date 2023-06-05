import { ButtonProps, EModeButton } from './props';
import { Container, Title } from './styles';
import { LoadingComponent } from '@components/loading';

export const ButtonComponent: React.FC<ButtonProps> = ({
  type = EModeButton.create,
  title,
  loading,
  ...rest
}) => {
  return (
    <Container
      type={type}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <LoadingComponent
          bgColor='transparent'
          color='#fff'
        />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};
