import { ILoadingProps } from './props';
import { Container } from './styles';

export const LoadingComponent: React.FC<ILoadingProps> = ({
  bgColor,
  color,
}) => {
  return (
    <Container
      color={color}
      bgColor={bgColor}
    />
  );
};
