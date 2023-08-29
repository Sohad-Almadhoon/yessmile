import { useState } from 'react'
import { Department, ExtraTreatment, Hotel, OrganizedStay, ProfileStatus, Treatments } from '.'

const tabs = [
  { name: 'Treatments', href: '#', current: false },
  { name: 'Extra treatment', href: '#', current: false },
  { name: 'Hotel', href: '#', current: true },
  { name: 'Profile Status', href: '#', current: false },
  { name: 'Department', href: '#', current: false },
  { name: 'Organized stay', href: '#', current: false },
]

export default function Tabs() {
  const [active, setActive] = useState('Treatments')
  return (
    <div>
      <nav className="flex gap-x-8 gap-y-4 mt-12 pt-5 pl-5 flex-wrap" aria-label="Tabs">
        {tabs.map(tab => (
          <a
            key={tab.name}
            href={tab.href}
            className={
              'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2  text-sm font-medium focus:text-primary focus:border-primar bg-gray-200 px-3 py-2 rounded-lg'
            }
            aria-current={tab.current ? 'page' : undefined}
            onClick={() => setActive(tab.name)}
          >
            {tab.name}
          </a>
        ))}
      </nav>
      <div className="mt-12">
        {active === 'Treatments' && <Treatments />}
        {active === 'Extra treatment' && <ExtraTreatment />}
        {active === 'Hotel' && <Hotel />}
        {active === 'Profile Status' && <ProfileStatus />}
        {active === 'Department' && <Department />}
        {active === 'Organized stay' && <OrganizedStay />}
      </div>
    </div>
  )
}
