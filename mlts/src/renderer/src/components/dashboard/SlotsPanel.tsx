import React from 'react'
import { Slot } from '@renderer/components/dashboard/Slot'
import { PlayerSlot } from '../../../../models/PlayerSlot'

const positions: string[] = ['1st', '2nd', '3rd', '4th', '5th']

export const SlotsPanel: React.FC<{
  slotsPlayer: PlayerSlot[]
  areaPlayers: string[]
}> = ({ slotsPlayer, areaPlayers }) => {
  return (
    <div className={'slotsPanel'}>
      {slotsPlayer.map((slot, index) => (
        <Slot key={index} slot={slot} area={areaPlayers[index]} position={positions[index]} />
      ))}
    </div>
  )
}
