import { motion, Variants } from 'framer-motion';
import { styled } from 'styled-components';

export const sliderVariant: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    cursor: 'pointer',
    scale: 1.2,
    transition: {
      type: 'tween',
      delay: 0.6,
      duration: 0.1,
    },
  },
};

export const SliderItem = styled(motion.div)<{ bgImg?: string }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white.darker};
  color: ${({ theme }) => theme.colors.black.primary};
  height: 200px;
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  transform-origin: center 100%;
`;

export const infoVariant: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    type: 'tween',
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.2,
    },
  },
};

export const InfoWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  opacity: 0;
  box-sizing: border-box;
  /* border: 1px solid red; */
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black.lighter};
  h4 {
    text-align: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white.darker};
  }
`;
