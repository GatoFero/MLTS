import React, { useEffect, useState } from 'react'
import { SlotsPanel } from '@renderer/components/dashboard/SlotsPanel'
import { Team } from '../../../../models/Team'
import { PlayerSlot, SideColor } from '../../../../models/PlayerSlot'

const firstColum: string[] = [
  '2 / 3 / 3 / 4',
  '1 / 2 / 2 / 3',
  '2 / 2 / 3 / 3',
  '1 / 1 / 2 / 2',
  '2 / 1 / 3 / 2'
]
const secondColum: string[] = [
  '2 / 1 / 3 / 2',
  '1 / 2 / 2 / 3',
  '2 / 2 / 3 / 3',
  '1 / 3 / 2 / 4',
  '2 / 3 / 3 / 4'
]

export const ControlPanel: React.FC<{
  teams: Team[]
}> = ({ teams }) => {
  const [bluePlayerSlots, setBluePlayerSlots] = useState<PlayerSlot[]>([])
  const [redPlayerSlots, setRedPlayerSlots] = useState<PlayerSlot[]>([])
  const setTeamsSlots = (blueTeam: Team, redTeam: Team): void => {
    setBluePlayerSlots(blueTeam.createSlots(SideColor.BLUE))
    setRedPlayerSlots(redTeam.createSlots(SideColor.RED))
  }
  useEffect(() => {
    setTeamsSlots(teams[0], teams[1])
  }, [teams])

  return (
    <div className={'slotsPanelController'}>
      <SlotsPanel slotsPlayer={bluePlayerSlots} areaPlayers={firstColum} />
      <SlotsPanel slotsPlayer={redPlayerSlots} areaPlayers={secondColum} />
    </div>
  )
}
