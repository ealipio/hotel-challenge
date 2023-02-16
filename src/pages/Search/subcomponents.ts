import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 8px;
  width: 200px;
  margin: auto;
  display: block;
  border-radius: 5px;
  border-style: solid;
`;

export const SubmitButton = styled.button`
  min-width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin: 12px auto 0;
  height: 32px;
  text-transform: uppercase;
  background-color: #34657f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;

export const Error = styled.div`
  border: 2px solid #c63527;
  font-weight: 600;
  padding: 16px;
  border-radius: 5px;
  margin-top: 32px;
`;

export const NoResults = styled.p`
  margin-top: 32px;
  font-weight: 600;
`;

export const ListOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  border-color: #34657f;
`;

export const SelectLabel = styled.label`
  font-weight: 600;
`;

export const SortWrapper = styled.div`
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
