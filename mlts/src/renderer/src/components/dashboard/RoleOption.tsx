import React from 'react'
import { formatRole } from '@renderer/components/dashboard/HeroTable'

export const RoleOption: React.FC<{
  role: string
  selectedRole: (role: string) => void
}> = ({ role, selectedRole }) => {
  return (
    <button className={'heroRoleOption'} onClick={() => selectedRole(role)}>
      <p>{formatRole(role)}</p>
    </button>
  )
}
