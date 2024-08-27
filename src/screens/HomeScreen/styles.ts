import { motion, Variants } from 'framer-motion';
import { styled } from 'styled-components';
import { MediaQuery } from '@src/constants';

/** SLIDER */
export const sliderVariants: Variants = {
  hidden: {
    x: window.innerWidth,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth,
  },
};
/** SLIDER */

export const Wrapper = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.black.primary};
  border: 1px solid white;

  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Banner = styled.div<{ bgImg?: string }>`
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  gap: 16px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ bgImg }) => bgImg});
  background-size: cover;

  ${MediaQuery.FROM_TABLET} {
    margin-top: 48px;
  }
`;

export const Title = styled.h2`
  font-size: 42px;

  ${MediaQuery.FROM_TABLET} {
    font-size: 32px;
  }
`;

export const OverView = styled.div`
  font-size: 20px;
  width: 50%;

  ${MediaQuery.FROM_TABLET} {
    font-size: 16px;
  }
`;

export const Slider = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;
