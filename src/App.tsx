import { TabComponent } from './component/Tabs'
import './App.css'

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

function App() {
  return (
    <div className='App'>
      <TabComponent data={data} />
    </div>
  )
}

export default App
