import '@renderer/assets/dashboard.css'
import React, { useState } from 'react'
import { Hero } from '../../../../models/Hero'
import { HeroTable } from '@renderer/components/dashboard/HeroTable'
import { HeroOptions } from '@renderer/components/dashboard/HeroOptions'
import { ControlPanel } from '@renderer/components/dashboard/ControlPanel'
import { Team } from '../../../../models/Team'

export const Dashboard: React.FC = () => {
  const teams: Team[] = []
  const [pickHero, setPickHero] = useState<Hero | null>(null)
  const [selectedRole, setSelectedRole] = useState<string>('')
  return (
    <div className={'dashboard'}>
      <ControlPanel teams={teams} />
      <HeroOptions setSelectedRole={setSelectedRole} />
      <HeroTable
        selectedHero={pickHero}
        selectedRole={selectedRole}
        setSelectedHero={setPickHero}
      />
    </div>
  )
}

export interface StateComponent {
  classname: string
  isState: boolean
}
