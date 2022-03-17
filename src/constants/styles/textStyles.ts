export const enum TextStyleName {
  title = 'title',
  subtitle1 = 'subtitle1',
  subtitle2B = 'subtitle2B',
  subtitle2R = 'subtitle2R',
  subtitle3 = 'subtitle3',
  body1B = 'body1B',
  body1R = 'body1R',
  body2B = 'body2B',
  body2R = 'body2R',
  body3 = 'body3',
  caption = 'caption',
}

export const enum FontFamily {
  light = 'light',
  regular = 'regular',
  semibold = 'semibold',
  bold = 'bold',
}

interface TextStyleValue {
  size: number;
  fontFamily: FontFamily;
  lineHeight: number;
}

const LINE_HEIGHT_RATIO = 1.2;

export const TEXT_STYLES: Record<TextStyleName, TextStyleValue> = {
  [TextStyleName.title]: {
    size: 32,
    fontFamily: FontFamily.bold,
    lineHeight: 32 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.subtitle1]: {
    size: 22,
    fontFamily: FontFamily.bold,
    lineHeight: 22 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.subtitle2B]: {
    size: 18,
    fontFamily: FontFamily.bold,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.subtitle2R]: {
    size: 18,
    fontFamily: FontFamily.regular,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.subtitle3]: {
    size: 16,
    fontFamily: FontFamily.semibold,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.body1B]: {
    size: 16,
    fontFamily: FontFamily.semibold,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.body1R]: {
    size: 16,
    fontFamily: FontFamily.regular,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.body2B]: {
    size: 14,
    fontFamily: FontFamily.semibold,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.body2R]: {
    size: 14,
    fontFamily: FontFamily.regular,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.body3]: {
    size: 12,
    fontFamily: FontFamily.regular,
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
  [TextStyleName.caption]: {
    size: 12,
    fontFamily: FontFamily.light,
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
};
