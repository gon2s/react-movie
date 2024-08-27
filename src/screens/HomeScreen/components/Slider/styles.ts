import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const SliderItem = styled(motion.div)<{ bgImg?: string }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white.darker};
  color: ${({ theme }) => theme.colors.black.primary};
  height: 200px;
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center center;
`;
