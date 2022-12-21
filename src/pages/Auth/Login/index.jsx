import { useState } from 'react';
import Logo from '../../../assets/images/logo-no-background.svg';

import { MdEmail, MdLock } from 'react-icons/md';
import { useAuth } from '../../../hooks/useAuth';

export default function Login() {

  const [email, setEmail] = useState('matheus@unlv.edu')
  const [password, setPassword] = useState('secret')

  const { signIn } = useAuth()

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-primary-300 p-40">
      <header>
        <img className="w-[300px] h-auto" src={Logo} alt="logo" />
      </header>
      <div className="bg-white w-1/3 rounded-lg shadow-lg my-8 flex flex-col justify-center items-center py-6">
        <h1 className="text-secondary-700 text-2xl font-semibold">Welcome Back</h1>
        <p className="text-secondary-500 mt-2">Enter your credentials to access your account</p>
        <form onSubmit={handleOnSubmit} className="mt-8 w-full px-12 flex flex-col gap-6">
          <fieldset className="">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary-400">
                <MdEmail size={18} />
              </div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="outline-none font-semibold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-500" placeholder="Enter your email" />
            </div>
          </fieldset>
          <fieldset className="">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary-400">
                <MdLock size={18} />
              </div>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-500" placeholder="Enter your password" />
            </div>
          </fieldset>
          <div className="flex flex-col gap-4">
          <button type="submit" className="bg-primary-400 text-white font-semibold text-sm rounded-lg py-2.5">Sign in</button>
          </div>
        </form>
      </div>
      <footer>
        <p className="text-white">Forgot your password? <span className="font-semibold cursor-pointer hover:underline "> Reset Password</span></p>
      </footer>
    </div>
  )
}
