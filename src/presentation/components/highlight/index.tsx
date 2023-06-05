import { HighlightProps } from './props';
import { Container, Subtitle, Title } from './styles';

export const HighlightComponent: React.FC<HighlightProps> = ({
  title,
  subtitle,
  elements,
}) => {
  return (
    <Container {...elements?.containerProps}>
      <Title {...elements?.titleProps}>{title}</Title>

      {subtitle && <Subtitle {...elements?.subtitleProps}>{subtitle}</Subtitle>}
    </Container>
  );
};
