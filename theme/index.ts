import { config } from '@tamagui/config'
import { createTamagui } from '@tamagui/core' // or '@tamagui/core'
import { createInterFont } from '@tamagui/font-inter';

const headingFont = createInterFont();
const bodyFont = createInterFont();

export const tamaguiConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      color: 'black'
    },
    dark: {
      ...config.themes.dark,
      color: 'white'
    }
  },
  fonts: {
    heading: headingFont,
    body: bodyFont
  }
})
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

