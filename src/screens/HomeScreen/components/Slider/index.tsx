import React, { CSSProperties } from 'react';
import { MotionProps } from 'framer-motion';
import { IMovie } from '@src/apis';
import { getImgUrl } from '@src/utils';
import * as S from './styles';

interface SliderProps extends MotionProps {
  data: IMovie;
  onClick: () => void;
  style?: CSSProperties;
}

function Slider({ data, onClick, style, ...rest }: SliderProps) {
  return (
    <S.SliderItem
      onClick={onClick}
      style={style}
      variants={S.sliderVariant}
      whileHover={'hover'}
      initial={'initial'}
      bgImg={getImgUrl({
        id: data?.backdrop_path.slice(1) || '',
        format: 'w500',
      })}
      {...rest}
    >
      <S.InfoWrapper variants={S.infoVariant}>
        <h4>{data.title}</h4>
      </S.InfoWrapper>
    </S.SliderItem>
  );
}

export default Slider;
