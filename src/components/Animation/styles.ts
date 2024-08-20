import { motion, Variants } from 'framer-motion';
import { styled } from 'styled-components';

export const myVariant: Variants = {
  // variant 사용 시 initial 값
  start: { scale: 0.2 },
  // variant 사용 시 end 값
  end: {
    scale: 1,
    rotateZ: 180,
    transition: {
      bounce: 0.7,
      type: 'spring',
      duration: 5,
    },
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
