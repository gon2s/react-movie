import React from 'react';
import * as Styled from './styles';

function index() {
  return (
    <Styled.Box
      drag
      dragSnapToOrigin
      variants={Styled.gestureVariants}
      whileHover={'hover'}
      whileTap={'click'}
      whileDrag={'drag'}
    />
  );
}

export default index;
