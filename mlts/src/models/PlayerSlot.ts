import { Player } from './Player'
import { Hero } from './Hero'

export class PlayerSlot {
  player: Player
  hero: Hero | null = null
  color: string
  constructor(player: Player, color: string) {
    this.player = player
    this.color = color
  }
}

export enum SideColor {
  RED = 'red',
  BLUE = 'blue'
}
