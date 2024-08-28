import React, { useCallback, useMemo, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, useScroll } from 'framer-motion';
import { requestFetchMovies } from '@src/apis';
import { Header } from '@src/components';
import { getImgUrl } from '@src/utils';
import { Slider } from './components';
import * as S from './styles';

const OFFSET = 6;

function HomeScreen() {
  const navigate = useNavigate();
  const isDetailMatch = useMatch('/movies/:movieId');

  const { scrollY } = useScroll();

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
      const maxIndex = Math.floor(totalMovies / OFFSET) - 1;

      setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const handleShowDetailMovie = useCallback(
    (movieId: number) => {
      navigate(`movies/${movieId}`);
    },
    [navigate],
  );

  return (
    <S.Wrapper>
      {isLoading ? (
        <S.Loader>{'isLoading...'}</S.Loader>
      ) : (
        <>
          <Header />
          <S.Banner
            bgImg={getImgUrl({
              id: thumbnailData?.backdrop_path.slice(1) || '',
            })}
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
                    <Slider
                      key={li.id}
                      layoutId={li.id.toString()}
                      data={li}
                      onClick={() => {
                        handleShowDetailMovie(li.id);
                      }}
                      transition={{
                        type: 'tween',
                      }}
                    />
                  ))}
              </S.Row>
            </AnimatePresence>
          </S.Slider>
        </>
      )}
      <AnimatePresence>
        {isDetailMatch ? (
          <S.Overlay style={{ top: scrollY }}>
            <S.MovieDetailWrapper
              onClick={e => {
                e.stopPropagation();
              }}
              variants={S.overlayVariants}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              layoutId={isDetailMatch.params.movieId?.toString()}
            />
          </S.Overlay>
        ) : null}
      </AnimatePresence>
    </S.Wrapper>
  );
}

export default HomeScreen;
