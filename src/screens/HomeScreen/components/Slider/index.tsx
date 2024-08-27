import React, { CSSProperties } from 'react';
import { IMovie } from '@src/apis';
import { getImgUrl } from '@src/utils';
import * as S from './styles';

interface SliderProps {
  data: IMovie;
  style?: CSSProperties;
}

function Slider({ data, style }: SliderProps) {
  return (
    <S.SliderItem
      style={style}
      bgImg={getImgUrl({
        id: data?.backdrop_path || '',
        format: 'w500',
      })}
    />
  );
}

export default Slider;
