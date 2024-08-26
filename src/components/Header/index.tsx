import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import * as S from './styles';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { scrollY } = useScroll();
  const scrollValue = useTransform(
    scrollY,
    [0, 80],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
  );

  const inputAnimation = useAnimation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = useCallback(() => {
    if (isSearchOpen) {
      inputAnimation.start({ scaleX: 0 }).catch(() => {});
    } else {
      inputAnimation.start({ scaleX: 1 }).catch(() => {});
    }
    setIsSearchOpen(prev => !prev);
  }, [isSearchOpen, inputAnimation]);

  useEffect(() => {});

  return (
    <S.Nav style={{ backgroundColor: scrollValue }}>
      <S.Col>
        <S.Logo
          viewBox="60 80 1140 600"
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
        />
        <S.Items>
          <S.Item>
            <Link to={'/'}>{'HOME'}</Link>
            {pathname === '/' && <S.CircleItem layoutId={'menu'} />}
          </S.Item>
          <S.Item>
            <Link to={'/tv'}>{'Tv Shows'}</Link>
            {pathname === '/tv' && <S.CircleItem layoutId={'menu'} />}
          </S.Item>
        </S.Items>
      </S.Col>
      <S.Col>
        <S.Search>
          <motion.svg
            style={{ cursor: 'pointer' }}
            onClick={handleToggleSearch}
            animate={{ x: isSearchOpen ? -188 : 0 }}
            transition={{ type: 'linear' }}
            fill={'currentColor'}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </motion.svg>
          <S.Input
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: 'linear' }}
            placeholder={'search for movie or tv show...'}
          />
        </S.Search>
      </S.Col>
    </S.Nav>
  );
}

export default Header;
