import React, {useId} from 'react'

function Select({
  Options,
  label,
  className, // its batter to have string here !
  ...props

}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label> }
      <select 
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py2 rounded-lg lg-white text-black outline-none focus:bg-gray-50
      duration-200 border border-gray-200 w-full ${className}
      `}>
        
        {Options?.map((option) => (
          <option key={option} value={option}>
            {option}

          </option>
        ))}
        


      </select>
    </div >

  
  )
}

export default Select