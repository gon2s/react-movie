import { motion, Variants } from 'framer-motion';
import { styled } from 'styled-components';

export const variant: Variants = {
  hover: {
    cursor: 'grab',
  },
};

export const Box = styled(motion.div)`
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 15%;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
