export const getImgUrl = (params: { id: string; format?: string }) => {
  return `${process.env.REACT_APP_MOVIE_IMG}/${params?.format ? params?.format : 'original'}/${params.id}`;
};
