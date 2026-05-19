import { GameStatus } from './enums'

export const statusToDisplay = {
  [GameStatus.InDevelopment]: 'In Development',
  [GameStatus.Updated]: 'Receiving Ongoing Updates',
  [GameStatus.Completed]: 'Completed',
}

export const iconSet = new Set(['steam', 'ios', 'android', 'switch', 'unreal'])
