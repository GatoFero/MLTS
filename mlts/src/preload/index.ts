import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { WindowProperties } from '../main/WindowManager'
import { Team } from '../models/Team'
import { Player } from '../models/Player'

const players = (): Player[] => {
  const players: Player[] = []
  let i: number = 0
  while (players.length > 4) {
    i++
    players.push(new Player(i, 'Gato', 'jg'))
  }
  return players
}
const team: Team = new Team('Radiant', 'RT', '', players())
const teams: Team[] = [team, team]
// Custom APIs for renderer
const api = {
  createWindow: (windowProps: WindowProperties): void => {
    ipcRenderer.invoke('create-window', windowProps)
  },
  getTeams: (): Team[] => teams,
  reverseTeams: (): void => {
    teams.reverse()
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
