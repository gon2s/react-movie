import React from 'react';
import * as Styled from './styles';

function Variant() {
  return (
    <Styled.Box variants={Styled.boxVariant} initial={'start'} animate={'end'}>
      <Styled.Circle variants={Styled.circleVariant} />
      <Styled.Circle variants={Styled.circleVariant} />
      <Styled.Circle variants={Styled.circleVariant} />
      <Styled.Circle variants={Styled.circleVariant} />
    </Styled.Box>
  );
}

export default Variant;
