import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const InnerBoxWrapper = styled.div`
  padding: 24px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`;
