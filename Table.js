import React, {Component} from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Past Times</th>
        <th>Average</th>
      </tr>
    </thead>
  )
}

const getCompAverage = (props) => {
    var compavg = 0.00
    props.characterData.map((row, index) => {
        console.log(props.characterData.length)
        if (index!==0 && index!==props.characterData.length-1 && props.characterData.length > 2){
            compavg = (parseFloat(compavg)+parseFloat(row)).toFixed(3)
            compavg = (compavg/(props.characterData.length-2)).toFixed(3)
        }    
    })
    
    return compavg
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    var avgTime = getCompAverage(props)
    return (
      <tr key={index}>
            <td>{row}</td>
            <td>{avgTime}</td>
        </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const {characterData} = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData}/>
    </table>
  )
}
export default Table