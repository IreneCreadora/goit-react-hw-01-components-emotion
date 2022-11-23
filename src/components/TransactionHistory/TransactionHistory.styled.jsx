import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  padding: 50px 20px;
  background: var(--color-bg-middle);
  border-radius: 10%;
`;

export const Table = styled.table`
  width: 450px;
  margin: 0 auto;
  border: 1px solid var(--color-black);
`;

export const Th = styled.th`
  font-size: 24px;
  font-weight: 500;
  color: var(--color-black);
  padding: 10px 15px;
  background-color: var(--color-accent-gray);
  text-align: center;
`;

export const Td = styled.td`
  color: var(--color-secondary-text);
  font-size: 16px;
  border: 1px solid var(--color-black);
  padding: 10px 15px;
  text-align: center;
`;

export const Tr = styled.tr`
  &:nth-child(2n) {
    border: 1px solid var(--color-black);
    background-color: var(--color-accent-gray);
  }
`;
