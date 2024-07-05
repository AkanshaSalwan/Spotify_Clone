import React from 'react'

const AlbumItem = ({image,name,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26'>
        <img className='rounded' src={image} alt="" />
        <img className='font-bold mt-2 mb-1' src={name} alt="" />
        <img className='text-slate-200 text-sm' src={desc} alt="" />
    

    </div>
  )
}

export default AlbumItem