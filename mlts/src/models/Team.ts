import { Player, PlayerDTO } from './Player'
import { PlayerSlot } from './PlayerSlot'

export class Team {
  name: string
  acronym: string
  logo: string
  players: Player[]
  constructor(name: string, acronym: string, logo: string, players: Player[]) {
    this.name = name
    this.acronym = acronym
    this.logo = logo
    this.players = players
  }
  createSlots(color: string): PlayerSlot[] {
    return this.players.map((player: Player): PlayerSlot => {
      return new PlayerSlot(player, color)
    })
  }
  sendPlayerData(): PlayerDTO[] {
    return this.players.map((player: Player): PlayerDTO => {
      return {
        id: player.id,
        nickname: player.nickname,
        lane: player.lane
      }
    })
  }
}
