import React from 'react'
import back from '@/assets/back.svg'

export default function Back({ exercises = [], updateMaxWeight, onMuscleClick }) {
  return (
    <div>
      <button 
        onClick={() => onMuscleClick('back')}
        className="flex flex-col items-center justify-center bg-slate-200 w-[160px] h-auto min-h-[160px] rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-100 py-3"
      > 
        <img src={back} alt="Back exercise icon" className="w-14 h-14 justify-center"/>
        <p className='font-bold'>Back</p>
        
        {exercises.map((exercise) => (
          <div key={exercise.name} className="w-full px-2 mt-2">
            <div className="flex flex-col items-start gap-1 w-full">
              <span className="font-semibold">{exercise.name}</span>
              <div className="flex gap-2 text-sm w-full">
                <span>Weight: {exercise.weight || 0}kg</span>
                <span>Reps: {exercise.reps || 0}</span>
                <span>Sets: {exercise.sets || 0}</span>
              </div>
              {exercise.maxWeight && (
                <span className="text-sm text-green-600">
                  Max: {exercise.maxWeight}kg
                </span>
              )}
            </div>
          </div>
        ))}
      </button>
    </div>
  )
}