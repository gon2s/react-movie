import React from 'react';
import { useMotionValue, useScroll, useTransform } from 'framer-motion';
import * as Styled from './styles';

function MotionValue() {
  const x = useMotionValue(0);

  const { scrollXProgress } = useScroll();
  const scaleValue = useTransform(scrollXProgress, [0, 1], [1, 0.4]);

  return (
    <Styled.Box
      variants={Styled.variant}
      whileHover={'hover'}
      style={{ x, scale: scaleValue }}
      drag={'x'}
    />
  );
}

export default MotionValue;
