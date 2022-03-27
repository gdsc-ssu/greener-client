import { TextStyle } from 'react-native';
import { CustomEnum } from '../types/typeUtils';

export const TEXT_STYLE_NAME = {
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  caption: 'caption',
} as const;
export type TextStyleName = CustomEnum<typeof TEXT_STYLE_NAME>;

export const FONT_FAMILY = {
  light: 'light',
  regular: 'regular',
  semibold: 'semibold',
  bold: 'bold',
} as const;
export type FontFamily = CustomEnum<typeof FONT_FAMILY>;

const LINE_HEIGHT_RATIO = 1.2;

export const TEXT_STYLES: Record<TextStyleName, TextStyle> = {
  [TEXT_STYLE_NAME.title]: {
    fontSize: 32,
    fontFamily: FONT_FAMILY.bold,
    lineHeight: 32 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle1]: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.bold,
    lineHeight: 22 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle2B]: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle2R]: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle3]: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.semibold,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body1B]: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.semibold,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body1R]: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body2B]: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body2R]: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body3]: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.caption]: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.light,
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
};
