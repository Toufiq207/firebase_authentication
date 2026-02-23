import React from 'react'

function Login() {
  return (
    <div>This Login 

      <form>
             <div>
              <label className='text-base text-scendary font-dm font-bold ' htmlFor="email">Email address</label><br />
      <input   className='py-6 mb-6 w-[508px]  border-b border-[#F0F0F0] ' id='email' type="email" placeholder='company@domain.com'/><br />
            </div>
          <div>
            <label className='text-base text-scendary font-dm font-bold ' htmlFor="password">Password</label><br />
      <input   className='py-6 mb-6 w-[508px]  border-b border-[#F0F0F0] ' id='password' type="password" placeholder='.....'/>
          </div>

      <button className="text-amber-50 hover:text-black 
bg-black hover:bg-amber-50 
border border-transparent hover:border-black 
py-2 px-4 rounded-2xl">
  login
</button>
      </form>
    </div>
  )
}

export default Login