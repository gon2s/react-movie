type BreakPointType = 'tablet';

export const breakpoints: Record<BreakPointType, number> = {
  tablet: 960,
};

export const MediaQuery = {
  FROM_TABLET: `@media (max-width: ${breakpoints.tablet}px)`,
};
