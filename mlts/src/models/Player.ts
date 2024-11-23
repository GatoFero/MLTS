import { Team } from './Team'

export class Player {
  id: number
  nickname: string
  lane: string
  team?: Team | null = null
  constructor(id: number, nickname: string, lane: string) {
    this.id = id
    this.nickname = nickname
    this.lane = lane
  }
  getLaneIcon(): string {
    return `https://hjckoxvrzttyaelxpccc.supabase.co/storage/v1/object/public/fieldIcons/${this.lane}.png`
  }
}

export interface PlayerDTO {
  id: number
  nickname: string
  lane: string
}
