import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const { pathname } = useLocation();

  return (
    <S.Nav>
      <S.Col>
        <S.Logo viewBox="60 80 1140 600" />
        <S.Items>
          <S.Item>
            <Link to={'/'}>{'HOME'}</Link>
            {pathname === '/' && <S.CircleItem />}
          </S.Item>
          <S.Item>
            <Link to={'/tv'}>{'Tv Shows'}</Link>
            {pathname === '/tv' && <S.CircleItem />}
          </S.Item>
        </S.Items>
      </S.Col>
      <S.Col>
        <button type={'button'}>search</button>
      </S.Col>
    </S.Nav>
  );
}

export default Header;
