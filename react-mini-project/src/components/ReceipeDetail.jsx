import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ReceipeDetail(props) {

    const {receipeId} = useParams();
    
    const ListsOfReceipeDetails = props.receipeArr.find((receipeObj)=>{
        return receipeObj.Id === parseInt(receipeId)
    });
  return (
    <div>ReceipeDetail {receipeId}</div>
    
  )
}

export default ReceipeDetail