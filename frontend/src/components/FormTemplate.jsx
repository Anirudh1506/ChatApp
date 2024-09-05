import { Outlet } from 'react-router-dom'

import poster from '../assets/poster.jpeg'
const FormTemplate = () => {
  return (
    <div className='flex flex-row h-screen'>
        <img src={poster} alt='poster' className='w-1/2'/>
        <div className=' bg-red-600 w-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default FormTemplate