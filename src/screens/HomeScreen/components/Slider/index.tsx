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
      variants={S.sliderVariant}
      whileHover={'hover'}
      initial={'initial'}
      transition={{
        type: 'tween',
      }}
      bgImg={getImgUrl({
        id: data?.backdrop_path || '',
        format: 'w500',
      })}
    >
      <S.InfoWrapper variants={S.infoVariant}>
        <h4>{data.title}</h4>
      </S.InfoWrapper>
    </S.SliderItem>
  );
}

export default Slider;
