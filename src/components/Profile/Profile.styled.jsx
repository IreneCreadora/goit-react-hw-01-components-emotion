import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  margin-bottom: 20px;
  width: 400px;
  height: 450px;
  padding: 20px;
  background: var(--color-bg-dark);
  border-radius: 10%;
`;
export const Discription = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 200px;
  border-radius: 50%;
  background: var(--color-accent-gray);
`;

export const Name = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
`;

export const Tag = styled.p`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  color: var(--color-secondary-text);
`;

export const Location = styled.p`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
  text-align: center;
  color: var(--color-secondary-text);
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const StatsElem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 56px;
  border-radius: 10%;
  border: 1px;
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

export const Quantity = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.18;
`;
