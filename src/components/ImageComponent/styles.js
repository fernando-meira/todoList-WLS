import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  height: 100%;
  min-width: 40%;
  margin: 1rem 1rem 1rem 2rem;

  display: flex;
  align-items: flex-end;

  > img {
    width: 110%;
  }

  ${media.lessThan('large')`
    display: none;
  `}
`;
