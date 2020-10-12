import React, {Component} from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Past Times</th>
        <th>Competitive Average</th>
        <th>Fastest Solve </th>
      </tr>
    </thead>
  )
}

const getCompAverage = (props) => {
    var compavg = 0.00
    var sortedData = [].concat(props.characterData)
            .sort()
    sortedData.map((row, index) => {
        if (index!==0 && index!==props.characterData.length-1 && props.characterData.length > 2){
            compavg = (parseFloat(compavg)+parseFloat(row)).toFixed(3)
            compavg = (compavg/(props.characterData.length-2)).toFixed(3)
        }    
    })
    
    return compavg
}

const getFastestTIme = (props) => {
    var fastest
    var fastestData = [].concat(props.characterData)
        .sort()
    fastest = fastestData[0]
    return fastest
}


const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    if (index===0){
        var avgTime = getCompAverage(props)
        var fastestTime = getFastestTIme(props)
        return (
          <tr key={index}>
                <td>{row}</td>
                <td>{avgTime}</td>
                <td>{fastestTime}</td>
            </tr>
        )
    }
    else{
        return (
          <tr key={index}>
                <td>{row}</td>
            </tr>
        )
    }
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