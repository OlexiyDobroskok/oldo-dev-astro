export const commonIcons = {
  copyright: 'copyright',
  arrowUp: 'arrowUp',
  arrowDown: 'arrowDown',
  arrowPrev: 'arrowPrev',
  arrowNext: 'arrowNext',
  arrowBlank: 'arrowBlank',
} as const;

export type CommonIcons = (typeof commonIcons)[keyof typeof commonIcons];