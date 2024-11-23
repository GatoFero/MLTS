import { forwardRef, useImperativeHandle, useState } from 'react'
import { Hero } from '../../../../models/Hero'
import { StateComponent } from '@renderer/components/dashboard/Dashboard'
import { formatRole } from '@renderer/components/dashboard/HeroTable'

export type HeroBannerRef = {
  toggleState: () => void
}

export const HeroBanner = forwardRef<
  HeroBannerRef,
  { hero: Hero; selectedHero: (hero: Hero) => void }
>(({ hero, selectedHero }, ref) => {
  const roles = Array.isArray(hero.roles) ? hero.roles.map(formatRole).join(' | ') : ''
  const [stateBanner, setStateBanner] = useState<StateComponent>({
    classname: 'heroBanner',
    isState: false
  })

  const changeState = (): void => {
    setStateBanner((prev) => ({
      classname: prev.isState ? 'heroBanner' : 'heroBannerSelected',
      isState: !prev.isState
    }))
  }
  useImperativeHandle(
    ref,
    () => ({
      toggleState: changeState
    }),
    []
  )

  return (
    <article
      className={stateBanner.classname}
      onClick={() => {
        changeState()
        selectedHero(hero)
      }}
    >
      <img src={hero.banner} alt={hero.name} />
      <section>
        <p>{roles}</p>
        <h1>{hero.name}</h1>
      </section>
    </article>
  )
})
HeroBanner.displayName = 'HeroBanner'
