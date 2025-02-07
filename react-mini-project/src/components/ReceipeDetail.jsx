import React from 'react'
import { useParams } from 'react-router-dom'

function ReceipeDetail() {

    const {receipeId} = useParams();
  return (
    <div>ReceipeDetail</div>
  )
}

export default ReceipeDetail