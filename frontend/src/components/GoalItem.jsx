/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  if (!goal) return null;  // Handle the case where goal might be undefined

const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      <button
      onClick={() => dispatch(deleteGoal(goal._id))}
       className="close"
       >X</button>
    </div>
  )
}

export default GoalItem
