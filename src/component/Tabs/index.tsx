import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { Table } from '../Table/index'

export const TabComponent = () => {
  const data = [
    {
      label: 'Income',
      value: 'Income'
    },
    {
      label: 'Outcome',
      value: 'Outcome'
    },
    {
      label: 'Loans',
      value: 'Loans'
    },
    {
      label: 'Investments',
      value: 'Investments'
    }
  ]

  return (
    <Tabs className='py-20' value='html'>
      <TabsHeader>
        {data.map(({ label, value }, index) => (
          <Tab key={value} value={value}>
            <NavLink className='p-10' to={`/navigator?tab=${index}`}>
              {label}
            </NavLink>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <Table />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
