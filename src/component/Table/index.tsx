import { useEffect, useState } from 'react'
import { getResourse } from '../../services/getResourse'

type TData = {
  Name: string
  'Market Capitalization': string
  No: number
}

export const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getResourse(
      'https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json'
    ).then(res => {
      setData(res.InsuranceCompanies['Top Insurance Companies'])
    })
  }, [])

  return (
    <table className='table-auto mx-auto'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: TData) => {
          return (
            <tr key={item.No}>
              <td className='px-5'>{item.Name} </td>
              <td className='px-5'>{item['Market Capitalization']}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
