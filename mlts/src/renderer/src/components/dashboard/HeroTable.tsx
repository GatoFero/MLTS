import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Hero } from '../../../../models/Hero'
import { supabase } from '@renderer/supabaseClient'
import { HeroBanner, HeroBannerRef } from '@renderer/components/dashboard/HeroBanner'

export const HeroTable: React.FC<{
  selectedHero: Hero | null
  selectedRole: string
  setSelectedHero: (hero: Hero) => void
}> = ({ selectedHero, selectedRole, setSelectedHero }) => {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const bannerRefs = useRef<Map<number, HeroBannerRef>>(new Map())
  const setRefBanners = useCallback((heroId: number, ref: HeroBannerRef | null): void => {
    if (ref) bannerRefs.current.set(heroId, ref)
    else bannerRefs.current.delete(heroId)
  }, [])
  const changeSelectedHero = (hero: Hero): void => {
    if (selectedHero) {
      const heroRef = bannerRefs.current.get(selectedHero.id)
      if (heroRef) heroRef.toggleState()
    }
    setSelectedHero(hero)
  }
  useEffect(() => {
    const fetchHeroes = async (): Promise<void> => {
      const { data, error } = await supabase.from('heroes').select('*')
      if (error) console.error('Error fetching heroes:', error.message)
      else setHeroes((data || []).sort((a, b) => a.id - b.id))
    }
    fetchHeroes()
  }, [])
  return (
    <div className={'heroBannerTable'}>
      {heroes.length === 0 ? (
        <div>Loading Heroes...</div>
      ) : (
        heroes
          .filter(
            (hero: Hero) =>
              selectedRole === '' || selectedRole === 'all' || hero.roles.includes(selectedRole)
          )
          .map((hero: Hero) => (
            <HeroBanner
              key={hero.id}
              hero={hero}
              selectedHero={changeSelectedHero}
              ref={(ref) => setRefBanners(hero.id, ref)}
            />
          ))
      )}
    </div>
  )
}

export function formatRole(text: string): string {
  return text.substring(0, 1).toUpperCase() + text.substring(1)
}
