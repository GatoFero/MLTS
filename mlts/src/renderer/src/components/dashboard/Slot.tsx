import React from 'react'
import { PlayerSlot } from '../../../../models/PlayerSlot'

export const Slot: React.FC<{
  slot: PlayerSlot
  area: string
  position: string
}> = ({ slot, area, position }) => {
  return (
    <article className={'slot'} style={{ gridArea: `${area}` }}>
      <section>
        <img
          src={
            slot.hero
              ? slot.hero.banner
              : 'https://hjckoxvrzttyaelxpccc.supabase.co/storage/v1/object/public/banners/aamon.png?t=2024-11-22T02%3A10%3A15.480Z'
          }
          alt={slot.hero ? slot.hero.name : 'without hero'}
        />
      </section>
      <span>
        <p>{slot.hero ? slot.hero.name : 'No hero'}</p>
        <p>{`${position} ${slot.player.nickname}`}</p>
      </span>
    </article>
  )
}
