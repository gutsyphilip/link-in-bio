import { globalCss } from './stitches.config';

const globalStylesObj = {
  '@import': [
    '/presets/normalize.css',
  ],
  ':root': {},
  '*,*::before,*::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
    fontStyle: 'inherit',
    lineHeight: '150%',
    'font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'antialiased',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeLegibility',
    textWrap: 'balance',
    fontSynthesis: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    letterSpacing: '-0.015em',
    // scale font size
  },
  'html, body': {
    minWidth: '320px',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: '$bgColor',
    color: 'fgColor',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
  },
  html: {
    boxSizing: 'border-box',
    quotes: `'"' '"'`,
    scrollBehavior: 'smooth',
    height: '-webkit-fill-available',
  },
  body: {
    fontWeight: '400',
    padding: 0,
    overflowX: 'hidden',
    fontStyle: 'normal',
    minHeight: '100vh',
    /* mobile viewport bug fix */
    height: '-webkit-fill-available',
  },
  '#root': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  'body, button, input, select, textarea': {
    direction: 'ltr',
    textAlign: 'left',
  },
  svg: { maxWidth: '100%', verticalAlign: 'middle', strokeWidth: '1.5' },
  ul: {
    listStyle: 'disc',
    '-webkit-padding-start': '32px',
    '-webkit-margin-before': '0',
    'margin-block-start': '$1',
    '-webkit-margin-after': 'unset',
    'margin-block-end': 'unset',
  },
  a: {
    textDecoration: 'none',
  },
  fieldset: {
    border: 'none',
  },
  '::selection': { background: 'rgba(0, 85, 255, 0.2)' },
  '*': { boxSizing: 'inherit' },

  // Typography
  'b,em': {
    fontWeight: '600',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontWeight: '600',
    fontStyle: 'normal',
    color: '$textDark',
    lineHeight: '120%',
    wordSpacing: '-1.21px',
  },
  h1: {
    fontSize: '$heading3',
    '@bp1': {
      fontSize: '$heading1',
    },
  },
  h2: {
    fontSize: '$heading2',
  },
  h3: {
    fontSize: '$heading3',
  },
  h4: {
    fontSize: '$heading4',
  },
  h5: {
    fontSize: '$heading5',
  },
  h6: {
    fontSize: '$heading6',
  },
  'p, ul, li , a': {
    fontSize: '$body1',
    fontWeight: '500',
    lineHeight: '150%',
    color: '$textLight',
  },
};

export const globalStyles = globalCss(globalStylesObj);
