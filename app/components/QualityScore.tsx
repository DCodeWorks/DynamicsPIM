'use client'
import {useState} from 'react'

export default function QualityScore(){
    const [qualityScore, setQualityScore] = useState('A');

    return(
        <div className=' space-y-2 flex '>
            <h2 className='text-sm text-gray-600'>Quality Score: </h2>
            <span className='bg-green-300 rounded p-1 mx-2'>{qualityScore}</span>
        </div>
    );
}