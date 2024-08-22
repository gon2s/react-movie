import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import ICONS from '@src/assets';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0px;
  font-size: 14px;
  padding: 4px 60px;
  color: ${({ theme }) => theme.colors.white.primary};
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Logo = styled(ICONS.Logo)`
  cursor: pointer;
  width: 140px;
  height: 80px;
  g {
    fill: ${({ theme }) => theme.colors.red};
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme.colors.white.darker};
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white.primary};
  }
`;

export const CircleItem = styled(motion.span)`
  position: absolute;
  bottom: -10px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.red};
`;

export const Search = styled.span`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

export const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 8px 12px;
  padding-left: 36px;
  z-index: -1;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white.lighter};
`;
