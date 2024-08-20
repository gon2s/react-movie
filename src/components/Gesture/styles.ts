import { motion, Variants } from 'framer-motion';
import { styled } from 'styled-components';

export const gestureVariants: Variants = {
  hover: {
    scale: 0.8,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: '50%',
  },
};

export const Box = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 15%;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
