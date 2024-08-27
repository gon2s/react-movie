import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { requestFetchMovies } from '@src/apis';
import { Header } from '@src/components';
import { getImgUrl } from '@src/utils';
import * as S from './styles';

const OFFSET = 6;

function HomeScreen() {
  const { data, isLoading } = useQuery({
    retryOnMount: false,
    queryKey: ['HOME_NOW_PLAYING'],
    queryFn: requestFetchMovies,
  });

  const thumbnailData = useMemo(() => data?.results[0], [data?.results]);

  const [index, setIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const handleIncreaseIndex = () => {
    if (data) {
      if (isLeaving) return;
      setIsLeaving(prev => !prev);

      const totalMovies = data.results.length - 1;
      const maxIndex = Math.ceil(totalMovies / OFFSET) - 1;

      setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.Loader>{'isLoading...'}</S.Loader>
      ) : (
        <>
          <Header />
          <S.Banner
            bgImg={getImgUrl({ id: thumbnailData?.backdrop_path || '' })}
            onClick={handleIncreaseIndex}
          >
            <S.Title>{thumbnailData?.title}</S.Title>
            <S.OverView>{thumbnailData?.overview}</S.OverView>
          </S.Banner>
          <S.Slider>
            <AnimatePresence
              initial={false}
              onExitComplete={() => {
                setIsLeaving(prev => !prev);
              }}
            >
              <S.Row
                variants={S.sliderVariants}
                initial={'hidden'}
                animate={'visible'}
                exit={'exit'}
                key={index}
                transition={{
                  type: 'tween',
                  duration: 0.5,
                }}
              >
                {data?.results
                  .slice(1)
                  .slice(OFFSET * index, OFFSET * (index + 1))
                  .map(li => (
                    <S.SliderItem
                      bgImg={getImgUrl({
                        id: li?.backdrop_path || '',
                        format: 'w500',
                      })}
                      key={li.id}
                    />
                  ))}
              </S.Row>
            </AnimatePresence>
          </S.Slider>
        </>
      )}
    </S.Wrapper>
  );
}

export default HomeScreen;
