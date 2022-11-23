import styled from '@emotion/styled';

export const List = styled.ul`
  margin: auto;
  margin-bottom: 20px;
  width: 450px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--color-bg-middle);
  border-radius: 10%;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-radius: 10%;
  border: 1px;
  border: 3px solid var(--color-accent-gray);
  background: var(--color-bg-dark);
`;

export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
`;
// .online {
//     background-color: var(--color-green);
//   }
//   .offline {
//     background-color: var(--color-red);
//   }
export const Avatar = styled.img`
  border-radius: 6px;
  padding: 4px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  color: var(--color-secondary-text);
`;
