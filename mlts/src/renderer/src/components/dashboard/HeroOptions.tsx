import React from 'react'
import { RoleOption } from '@renderer/components/dashboard/RoleOption'

export const HeroOptions: React.FC<{
  setSelectedRole: (selectedRole: string) => void
}> = ({ setSelectedRole }) => {
  const roles = ['recent', 'all', 'tank', 'fighter', 'assassin', 'mage', 'marksman', 'support']
  return (
    <div className={'heroRoleOptions'}>
      {roles.map((role, index) => (
        <RoleOption key={index} role={role} selectedRole={setSelectedRole} />
      ))}
    </div>
  )
}
