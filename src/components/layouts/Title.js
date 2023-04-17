import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="gap-4 font-titleFont mb-14">
        <h3 className="text-sum uppercase font-light text-designColor tracking-wide">{title}</h3>
        <h1 className="text-5xl text-gray font-bold capitalize">{des}</h1>
      </div>
  )
}

export default Title