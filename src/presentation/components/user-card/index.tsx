import { UserCardComponentProps } from './props';
import {
  Container,
  Description,
  Icon,
  Name,
  Section,
  ViewMoreButton,
} from './styles';

export const UserCardComponent: React.FC<UserCardComponentProps> = ({
  name,
  description,
  viewMore,
  titleViewMore,
}) => {
  return (
    <Container>
      <Section>
        <Icon name='person' />

        <Section style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Section>
      </Section>

      {viewMore && (
        <ViewMoreButton
          icon='more-vert'
          onPress={viewMore}
          titleViewMore={titleViewMore}
        />
      )}
    </Container>
  );
};
