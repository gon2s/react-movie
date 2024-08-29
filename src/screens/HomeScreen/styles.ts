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
  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  ${MediaQuery.FROM_TABLET} {
    height: 160vh;
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
    padding-top: 80px;
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
  width: 60%;

  ${MediaQuery.FROM_TABLET} {
    font-size: 16px;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: -60px;
  h2 {
    margin-bottom: 12px;
    font-size: 20px;
  }
  span {
    font-size: 20px;
    font-weight: 700;
  }

  ${MediaQuery.FROM_TABLET} {
    margin-top: -20px;
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

/** OVERLAY */
export const overlayVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
  },
};
/** OVERLAY */

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieDetailWrapper = styled(motion.div)`
  position: relative;
  overflow-y: auto;
  width: 40vw;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black.lighter};
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  ${MediaQuery.FROM_TABLET} {
    max-height: 40vh;
  }
`;

export const MovieDetailImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 91 / 50;
`;

export const MovieDetailImg = styled.img`
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, black, transparent);
  background-size: cover;
  background-position: center center;
`;

export const MovieDetailTitle = styled.h3`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white.lighter};
`;

export const MovieDetailOverview = styled.p`
  padding: 20px;
  justify-content: center;
  align-items: center;
  top: -80px;
  color: ${({ theme }) => theme.colors.white.lighter};
`;
