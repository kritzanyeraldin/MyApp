import { config } from '@tamagui/config'
import { createTamagui } from '@tamagui/core' // or '@tamagui/core'

export const tamaguiConfig = createTamagui(config)
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

