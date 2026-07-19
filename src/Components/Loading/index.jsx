import React from 'react';

export default function Loading() {
  return (
    <div className='flex justify-between gap-3 animate-pulse'>
      <div className='h-screen w-64 bg-gray-200'></div>
      <div className='flex flex-col gap-3 items-center w-full justify-between h-screen'>
        <div className='w-full h-[10vh]  bg-gray-200'>header</div>
        <div className='w-full h-[89vh] bg-gray-200 border-r'>outlet</div>
      </div>
      
    </div>
  );
}
