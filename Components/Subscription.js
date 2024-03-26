import { useSession } from 'next-auth/react'
import React from 'react'

const Subscription = () => {
  const session = useSession();
  const status = session.status;


  return (
    <>
        <div className='flex justify-center items-center pb-10'>
          <div className="bg-red-400 rounded-sm p-8">
            Subscribed
          </div>
        </div>
    </>
  )
}

export default Subscription