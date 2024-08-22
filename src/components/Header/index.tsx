import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as S from './styles';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <S.Nav>
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
            onClick={() => setIsSearchOpen(prev => !prev)}
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
            transition={{ type: 'linear' }}
            animate={{ scaleX: isSearchOpen ? 1 : 0 }}
            placeholder={'search for movie or tv show...'}
          />
        </S.Search>
      </S.Col>
    </S.Nav>
  );
}

export default Header;
