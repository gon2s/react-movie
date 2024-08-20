import React from 'react';
import * as Styled from './styles';
import { myVariant } from './styles';

function Animation() {
  return <Styled.Box variants={myVariant} initial={'start'} animate={'end'} />;
}

export default Animation;
