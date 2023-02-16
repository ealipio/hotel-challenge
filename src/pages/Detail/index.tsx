import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../store';
import { Card, PageContainer, PageHeader } from '../../subcomponents';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h5`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 12px 0;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

const Description = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 24px;
`;

const Detail = () => {
  const { detailItem } = useSelector(
    (state: RootState) => ({
      detailItem: state.detailItem
    }),
    shallowEqual
  );

  if (!detailItem) {
    return <Navigate replace to="/" />;
  } else {
    const {
      name,
      description,
      stargazers_count,
      language,
      owner: { login }
    } = detailItem;

    return (
      <PageContainer>
        <PageHeader>Repository Details</PageHeader>
        <Card>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Row>
            <Label>Number of Stars:</Label>
            <span>{stargazers_count}</span>
          </Row>
          <Row>
            <Label>Programming Language:</Label>
            <span>{language ?? 'Unavailable'}</span>
          </Row>
          <Row>
            <Label>Repository Owner:</Label>
            <span>{login}</span>
          </Row>
        </Card>
      </PageContainer>
    );
  }
};

export default Detail;
