import styled from '@emotion/styled';

export const Container = styled.section`
  margin: auto;
  margin-bottom: 20px;
  width: 500px;
  height: auto;
  padding: 20px;
  background: var(--color-bg-dark);
  border-radius: 20%;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const StatisticsItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 56px;
  border-radius: 10%;
  border: 3px solid var(--color-accent-gray);
  background: var(--color-bg-middle);
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.18;
  text-align: center;
  color: var(--color-secondary-text);
`;

export const Percentage = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
`;
