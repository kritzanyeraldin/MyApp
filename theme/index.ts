import { config } from '@tamagui/config'
import { createTamagui } from '@tamagui/core' // or '@tamagui/core'

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
  }
})
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

