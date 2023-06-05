import { ButtonIconProps } from './props';
import { Container, DescriptionViewMore, Icon } from './styles';

export const ButtonIconComponent: React.FC<ButtonIconProps> = ({
  icon,
  type,
  titleViewMore,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {titleViewMore && (
        <DescriptionViewMore>{titleViewMore}</DescriptionViewMore>
      )}
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  );
};
