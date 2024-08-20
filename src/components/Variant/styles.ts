import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const boxVariant: Variants = {
  start: { opacity: 0, scale: 0.2 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.7,
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

export const circleVariant: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
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
  background-color: rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Circle = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.WHITE};
  place-self: center;
  width: 60%;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;
