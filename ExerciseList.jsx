import React from 'react'
import Arms from './Arms'
import Back from './Back'
import Abs from './Abs'
import Chest from './Chest'
import Legs from './Legs'

export default function ExerciseList({ exercises, onMuscleClick, updateMaxWeight }) {
  return (
    <div className='flex gap-10 justify-center my-10 flex-wrap'>
      <Arms 
        exercises={exercises.arms} 
        updateMaxWeight={updateMaxWeight}
        onMuscleClick={onMuscleClick}
      />
      <Back 
        exercises={exercises.back} 
        updateMaxWeight={updateMaxWeight}
        onMuscleClick={onMuscleClick}
      />
      <Abs 
        exercises={exercises.abs} 
        updateMaxWeight={updateMaxWeight}
        onMuscleClick={onMuscleClick}
      />
      <Chest 
        exercises={exercises.chest} 
        updateMaxWeight={updateMaxWeight}
        onMuscleClick={onMuscleClick}
      />
      <Legs 
        exercises={exercises.legs} 
        updateMaxWeight={updateMaxWeight}
        onMuscleClick={onMuscleClick}
      />
    </div>
  )
}