"use client";
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SubmitButton from './submitbutton';
import TextInputs from './ui/textinput';
import { useState } from 'react';

const LoginPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a login API call or any login logic
    setTimeout(() => {
      setIsLoading(false);
      // Redirect or handle successful login here
    }, 2000);
  };

  return (
    <div className="relative z-[1000] text-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Login</title>
        <meta name="description" content="Blog" />
      </Head>
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full max-w-md">
          <div className="p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">
              Login
            </h1>
            <form className="space-y-6" onSubmit={handleLogin}>
              <TextInputs
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                errors={""} // Adjust according to your error handling
              />
              <TextInputs
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                errors={""} // Adjust according to your error handling
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">Remember me</label>
                  </div>
                </div>
                <Link href="/forgot-password" className="text-sm font-medium text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          LogIn
          
        </button>
            </form>
            <p className="text-sm font-light text-gray-400 mt-6 text-center">
              Don’t have an account yet? <Link href="/registration" className="font-medium text-blue-500 hover:underline">Sign up</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
