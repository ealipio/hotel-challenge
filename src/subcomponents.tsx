import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 16px;
`;

export const PageHeader = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-top: 0;
`;

export const Card = styled.div`
  padding: 24px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);

  @media (min-width: 480px) {
    min-width: 350px;
    max-width: 720px;
  }
`;
