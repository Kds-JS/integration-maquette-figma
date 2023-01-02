import Head from 'next/head'
import Link from 'next/link'

import Header from '../Components/Header'
import { Button } from '../Components/Button'

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Save Space</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>

      <Header />

      <HeroSection />

      <FeatureStepOne />

      <Transactions />

    </div>
  )
}

function HeroSection () {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="flex items-center space-x-14 py-14">
        <div className="w-1/2">
          <div>
            <h1 className="text-4.5xl font-bold text-slate-900">
              <span className="block">
                You Don’t Save, {' '}
                <span className="relative inline-block before:block before:absolute before:-inset-1 before:bg-brand-500 custom-skew">
                  <span className="relative text-white">We Save!</span>
                </span>
              </span>
              <span className="block mt-2">Your Money, Your Terms.</span>
            </h1>
            <p className="mt-4 text-lg leading-7 text-brand-gray">
              Disrupting the traditional financial sector by offering better financial solutions,
              while staying true to the human values of trust,
              honesty, and fairness. Secure your future with our secure investments.
            </p>
            <Button>Create Free Account</Button>
          </div>
          <div className="flex items-center mt-12 space-x-4">
            <Link href="/" className="inline-flex items-center px-6 py-4 text-lg font-bold bg-transparent border rounded-lg border-brand-500 text-brand-500 hover:bg-blue-50">
   
                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.517 12.556c-.01-1.599.715-2.804 2.178-3.692-.818-1.172-2.056-1.816-3.687-1.94-1.545-.122-3.235.9-3.853.9-.654 0-2.15-.858-3.326-.858C6.4 7.003 3.82 8.902 3.82 12.764c0 1.142.209 2.32.626 3.534.558 1.599 2.569 5.515 4.667 5.452 1.096-.026 1.872-.778 3.3-.778 1.385 0 2.102.778 3.325.778 2.117-.03 3.935-3.59 4.465-5.194-2.838-1.338-2.686-3.919-2.686-4Zm-2.463-7.149c1.188-1.41 1.08-2.695 1.045-3.157-1.05.06-2.264.715-2.955 1.519-.762.862-1.21 1.929-1.114 3.131 1.135.087 2.17-.497 3.024-1.493Z" fill="#1E1E1E"/>
                </svg>
                Get On Apple
 
            </Link>
            <Link href="/" className="inline-flex items-center px-6 py-4 text-lg font-bold bg-transparent border rounded-lg border-brand-500 text-brand-500 hover:bg-blue-50">
             
                <svg className="w-6 h-6 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g clipPath="url(#a)">
                    <path d="M18.423 8.232C15.635 6.672 11.16 4.17 4.22.282A1.673 1.673 0 0 0 2.748.09L14.656 12l3.767-3.767Z" fill="#32BBFF"/>
                    <path d="M2.748.09a1.675 1.675 0 0 0-1.144 1.597V22.31a1.674 1.674 0 0 0 1.144 1.598l11.908-11.91L2.748.09ZM14.657 11.999 2.748 23.908a1.656 1.656 0 0 0 1.472-.193c6.731-3.769 11.155-6.243 13.976-7.816l.231-.13-3.77-3.77Z" fill="#32BBFF"/>
                    <path d="M1.604 11.999v10.312a1.674 1.674 0 0 0 1.144 1.597l11.908-11.909H1.604Z" fill="#2C9FD9"/>
                    <path d="M4.22.283A1.679 1.679 0 0 0 2.495.199l11.981 11.98 3.947-3.947C15.637 6.673 11.162 4.17 4.22.282Z" fill="#29CC5E"/>
                    <path d="m14.476 11.819-11.98 11.98a1.667 1.667 0 0 0 1.724-.083 9959.34 9959.34 0 0 1 13.976-7.817l.231-.13-3.95-3.95Z" fill="#D93F21"/>
                    <path d="M23.397 11.999a1.67 1.67 0 0 0-.86-1.468s-1.069-.596-4.345-2.428l-3.896 3.896 3.9 3.9c3.24-1.819 4.34-2.432 4.34-2.432.572-.32.86-.897.86-1.468Z" fill="#FFD500"/>
                    <path d="M22.537 13.467c.571-.32.86-.897.86-1.468h-9.101l3.9 3.9c3.24-1.819 4.34-2.432 4.34-2.432Z" fill="#FA0"/>
                  </g>
                  <defs>
                    <clipPath id="a"><path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z"/></clipPath>
                  </defs>
                </svg>
                Get On Android
     
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <img className="h-[656px] w-auto object-cover" src="/girl-smiling.png" alt="Girl Smiling"/>
            <div className="absolute left-0 bottom-0 z-[-1] h-[523px] w-[478px] bg-brand-500 rounded-xl" />
            <div className="absolute right-0 bottom-[52px] w-[438px] h-[424px] bg-brand-700 rounded-xl z-[-2]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureStepOne() {
  const features = [
    {
      id: 1,
      title: 'Create a SaveSpace account to get started. It’s free!!! ',
      icon: () => (
        <svg className="h-8 w-8 text-brand-500" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 16a6.667 6.667 0 1 0 0-13.333A6.667 6.667 0 0 0 16 16ZM4.547 29.333C4.547 24.173 9.68 20 16 20c1.28 0 2.52.173 3.68.493" />
          <path d="M29.333 24c0 .427-.053.84-.16 1.24a4.979 4.979 0 0 1-.613 1.507A5.293 5.293 0 0 1 24 29.333a5.228 5.228 0 0 1-3.547-1.373c-.4-.347-.746-.76-1.013-1.213A5.227 5.227 0 0 1 18.667 24 5.327 5.327 0 0 1 24 18.667c1.573 0 3 .68 3.96 1.773A5.312 5.312 0 0 1 29.333 24ZM25.987 23.973h-3.974M24 22.027v3.986" strokeMiterlimit="10"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Link your bank account to your SaveSpace account. Don’t worry your details are safe with us.',
      icon: () => (
        <svg className="h-8 w-8 text-brand-500" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M2.667 11.333H18M8 22h2.667M14 22h5.333" strokeMiterlimit="10"/>
          <path d="M29.333 16.04v5.44c0 4.68-1.186 5.853-5.92 5.853H8.587c-4.734 0-5.92-1.173-5.92-5.853V10.52c0-4.68 1.186-5.853 5.92-5.853H18"/>
          <path d="M22 8.333h7.333M25.667 12V4.667" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Start saving!!! You don’t have to worry about late payments, you can tell us to automatically save for you.',
      icon: () => (
        <svg className="h-8 w-8 text-brand-500" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M19.016 20.585h-6.667M15.682 17.33v6.667" strokeMiterlimit="10" />
          <path d="m16.88 3.358-.04.093-3.867 8.973h-3.8c-.906 0-1.773.187-2.56.52l2.334-5.573L9 7.238l.093-.214c.027-.08.054-.16.094-.226 1.746-4.04 3.72-4.96 7.693-3.44ZM24.067 12.69a6.346 6.346 0 0 0-1.88-.266h-9.213l3.867-8.973.04-.094c.2.067.386.16.586.24l2.947 1.24c1.64.68 2.787 1.387 3.48 2.24.133.16.24.307.333.48.12.187.214.374.267.574.053.12.093.24.12.346.36 1.12.147 2.494-.547 4.214Z" />
          <path d="M28.696 18.931v2.6c0 .267-.014.534-.027.8-.253 4.654-2.853 7-7.787 7h-10.4c-.32 0-.64-.026-.946-.066-4.24-.28-6.507-2.547-6.787-6.787a7.356 7.356 0 0 1-.067-.947v-2.6a6.525 6.525 0 0 1 3.947-5.987c.8-.333 1.653-.52 2.56-.52h13.013a6.67 6.67 0 0 1 1.88.267c2.654.813 4.614 3.293 4.614 6.24Z" />
          <path d="m8.947 7.371-2.334 5.573a6.525 6.525 0 0 0-3.946 5.987v-3.907a7.798 7.798 0 0 1 6.28-7.653ZM28.692 15.024v3.906a6.505 6.505 0 0 0-4.614-6.226c.694-1.734.893-3.094.56-4.227a1.516 1.516 0 0 0-.12-.347 7.764 7.764 0 0 1 4.174 6.893Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Participate in thrifts (ajo, esusu and adashe) with your family and friends. Create a thrift plan and invite your friends to join you.',
      icon: () => (
        <svg className="h-8 w-8 text-brand-500" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M24 9.547a.808.808 0 0 0-.254 0 3.431 3.431 0 0 1-3.306-3.44 3.431 3.431 0 0 1 3.44-3.44 3.44 3.44 0 0 1 3.44 3.44A3.452 3.452 0 0 1 24 9.547ZM22.627 19.254c1.827.306 3.84-.014 5.253-.96 1.88-1.254 1.88-3.307 0-4.56-1.426-.947-3.466-1.267-5.293-.947M7.96 9.547a.807.807 0 0 1 .254 0 3.431 3.431 0 0 0 3.306-3.44 3.431 3.431 0 0 0-3.44-3.44 3.44 3.44 0 0 0-3.44 3.44 3.452 3.452 0 0 0 3.32 3.44ZM9.334 19.254c-1.827.306-3.84-.014-5.254-.96-1.88-1.254-1.88-3.307 0-4.56 1.427-.947 3.467-1.267 5.294-.947M16 19.507a.804.804 0 0 0-.254 0 3.431 3.431 0 0 1-3.306-3.44 3.431 3.431 0 0 1 3.44-3.44 3.44 3.44 0 0 1 3.44 3.44c-.014 1.867-1.48 3.387-3.32 3.44ZM12.12 23.707c-1.88 1.253-1.88 3.307 0 4.56 2.133 1.427 5.626 1.427 7.76 0 1.88-1.253 1.88-3.306 0-4.56-2.12-1.413-5.627-1.413-7.76 0Z" />
        </svg>
      )
    },
  ]

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
      <div className="flex items-center justify-between">
        <div className="shrink-0">
          <img src="/images/iphone.png" className="h-auto w-80 object-cover" alt="" />
        </div>
        <div className="space-y-10 sm:max-w-2xl">
          <div>
            <h1 className="font-bold text-3xl text-brand-black lg:text-[40px] leading-[56px]">Rewarding Your Every Step Of Financial journey</h1>
            <p className="mt-4 text-brand-gray text-lg">We have your back! You can count on us too. We want to give you the freedom of opening a save and secure savings and investment account with  ₦0.</p>
          </div>
          <div>
            <ul role="list" className="space-y-8">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-center space-x-10">
                  <div className="p-2 rounded inline-flex items-center bg-brand-200">
                    {feature.icon()}
                  </div>
                  <p className="text-lg text-brand-gray">{feature.title}</p>
                </li>
              ))}
            </ul>
            <Button className="mt-8">Try For Free</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Transactions() {
  return (
    <section aria-label="Recent Transactions" className="max-w-7xl mx-auto px-4 py-10 sm:py-12 sm:px-6 lg:py-16">
      <div className="grid grid-cols-8 gap-x-10">
        <div className="col-span-4 py-8">
          <h2 className="text-4xl leading-14 font-bold text-brand-black">SaveSpace, Your all in one savings application.</h2>
          <ul className="mt-4 space-y-6 list-disc pl-5" role="list">
            <li className="text-lg text-brand-gray">SaveSpace allows you to track your transactions quick and easily.</li>
            <li className="text-lg text-brand-gray">SaveSpace products and services are complete and varies in all segments according to users needs.</li>
            <li className="text-lg text-brand-gray">User friendly and easy navigation savings and investment mobile app.</li>
          </ul>
          <Button className="mt-8">Try For Free</Button>
        </div>
        <div className="col-start-6 col-span-3 relative">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-brand-black">Recent transactions</h4>
              <Link href="/" className="ml-4 text-brand-500 font-bold text-base">
                See All
              </Link>
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between py-2">
                <div className="max-w-[270px] flex items-center">
                  <div className="p-2 rounded inline-flex items-center bg-brand-200">
                    <svg className="h-5 w-5 text-brand-500" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M14.793 5.875a3.81 3.81 0 0 0-.625-.042H5.835c-.234 0-.459.017-.675.05.116-.233.283-.45.483-.65L8.35 2.517a2.937 2.937 0 0 1 4.133 0l1.459 1.475c.533.525.816 1.191.85 1.883Z" />
                      <path d="M7.5 15.833c0 .625-.175 1.217-.483 1.717a3.308 3.308 0 0 1-2.85 1.617 3.308 3.308 0 0 1-2.85-1.617 3.268 3.268 0 0 1-.484-1.717 3.332 3.332 0 1 1 6.667 0ZM5.41 15.816H2.926M4.167 14.6v2.491" strokeMiterlimit="10" />
                      <path d="M18.333 10v4.167c0 2.5-1.666 4.166-4.166 4.166H6.358c.259-.216.484-.483.659-.783.308-.5.483-1.092.483-1.717a3.332 3.332 0 0 0-5.833-2.2V10c0-2.267 1.366-3.85 3.491-4.117.217-.033.442-.05.675-.05h8.334c.216 0 .425.009.625.042 2.15.25 3.541 1.842 3.541 4.125Z" />
                      <path d="M18.333 10.417h-2.5c-.916 0-1.666.75-1.666 1.666 0 .917.75 1.667 1.666 1.667h2.5" />
                    </svg>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <dt className="text-base font-bold text-brand-black">Autosave</dt>
                    <dd className="text-xs text-brand-gray-light">Your monthly autosave of ₦10,000 was deducted from your kuda bank.</dd>
                  </div>
                </div>
                <time className="text-[10px] text-brand-gray-light" dateTime="30, June 2022 21:20:25">30 June, 2022</time>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="max-w-[270px] flex items-center">
                  <div className="p-2 rounded inline-flex items-center bg-brand-200">
                    <svg className="h-5 w-5 text-brand-500" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="m6.167 5.267 7.075-2.359c3.175-1.058 4.9.675 3.85 3.85l-2.358 7.075c-1.584 4.759-4.184 4.759-5.767 0l-.7-2.1-2.1-.7c-4.759-1.583-4.759-4.175 0-5.766ZM8.425 11.375l2.983-2.992" />
                    </svg>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <dt className="text-base font-bold text-brand-black">Withdraw</dt>
                    <dd className="text-xs text-brand-gray-light">You withdrew ₦5,000 out of your personal savings.</dd>
                  </div>
                </div>
                <time className="text-[10px] text-brand-gray-light" dateTime="27, June 2022 21:20:25">27 June, 2022</time>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="max-w-[270px] flex items-center">
                  <div className="p-2 rounded inline-flex items-center bg-brand-200">
                    <svg className="h-5 w-5 text-brand-500" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M14.793 5.875a3.81 3.81 0 0 0-.625-.042H5.835c-.234 0-.459.017-.675.05.116-.233.283-.45.483-.65L8.35 2.517a2.937 2.937 0 0 1 4.133 0l1.459 1.475c.533.525.816 1.191.85 1.883Z" />
                      <path d="M7.5 15.833c0 .625-.175 1.217-.483 1.717a3.308 3.308 0 0 1-2.85 1.617 3.308 3.308 0 0 1-2.85-1.617 3.268 3.268 0 0 1-.484-1.717 3.332 3.332 0 1 1 6.667 0ZM5.41 15.816H2.926M4.167 14.6v2.491" strokeMiterlimit="10" />
                      <path d="M18.333 10v4.167c0 2.5-1.666 4.166-4.166 4.166H6.358c.259-.216.484-.483.659-.783.308-.5.483-1.092.483-1.717a3.332 3.332 0 0 0-5.833-2.2V10c0-2.267 1.366-3.85 3.491-4.117.217-.033.442-.05.675-.05h8.334c.216 0 .425.009.625.042 2.15.25 3.541 1.842 3.541 4.125Z" />
                      <path d="M18.333 10.417h-2.5c-.916 0-1.666.75-1.666 1.666 0 .917.75 1.667 1.666 1.667h2.5" />
                    </svg>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <dt className="text-base font-bold text-brand-black">Autosave</dt>
                    <dd className="text-xs text-brand-gray-light">Your monthly autosave of ₦10,000 was deducted from your kuda bank.</dd>
                  </div>
                </div>
                <time className="text-[10px] text-brand-gray-light" dateTime="20, June 2022 21:20:25">20 June, 2022</time>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="max-w-[270px] flex items-center">
                  <div className="p-2 rounded inline-flex items-center bg-brand-200">
                    <svg className="h-5 w-5 text-brand-500" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M14.793 5.875a3.81 3.81 0 0 0-.625-.042H5.835c-.234 0-.459.017-.675.05.116-.233.283-.45.483-.65L8.35 2.517a2.937 2.937 0 0 1 4.133 0l1.459 1.475c.533.525.816 1.191.85 1.883Z"/>
                      <path d="M7.5 15.833c0 .625-.175 1.217-.483 1.717a3.308 3.308 0 0 1-2.85 1.617 3.308 3.308 0 0 1-2.85-1.617 3.268 3.268 0 0 1-.484-1.717 3.332 3.332 0 1 1 6.667 0ZM5.41 15.816H2.926M4.167 14.6v2.491" strokeMiterlimit="10"/>
                      <path d="M18.333 10v4.167c0 2.5-1.666 4.166-4.166 4.166H6.358c.259-.216.484-.483.659-.783.308-.5.483-1.092.483-1.717a3.332 3.332 0 0 0-5.833-2.2V10c0-2.267 1.366-3.85 3.491-4.117.217-.033.442-.05.675-.05h8.334c.216 0 .425.009.625.042 2.15.25 3.541 1.842 3.541 4.125Z"/>
                      <path d="M18.333 10.417h-2.5c-.916 0-1.666.75-1.666 1.666 0 .917.75 1.667 1.666 1.667h2.5"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <dt className="text-base font-bold text-brand-black">Thrift</dt>
                    <dd className="text-xs text-brand-gray-light">₦50,000 was added to Ajo kiko from your personal savings.</dd>
                  </div>
                </div>
                <time className="text-[10px] text-brand-gray-light" dateTime="10, June 2022 21:20:25">10 June, 2022</time>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="max-w-[270px] flex items-center">
                  <div className="p-2 rounded inline-flex items-center bg-brand-200">
                    <svg className="h-5 w-5 text-brand-500" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5 8.333V6.667c0-2.759.833-5 5-5s5 2.241 5 5v1.666M10 15.417a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"/>
                      <path d="M14.167 18.333H5.833c-3.333 0-4.166-.833-4.166-4.166V12.5c0-3.333.833-4.167 4.166-4.167h8.334c3.333 0 4.166.834 4.166 4.167v1.667c0 3.333-.833 4.166-4.166 4.166Z"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <dt className="text-base font-bold text-brand-black">Safelock</dt>
                    <dd className="text-xs text-brand-gray-light">You added ₦100,000 to Safelock from your UBA bank card.</dd>
                  </div>
                </div>
                <time className="text-[10px] text-brand-gray-light" dateTime="30, May 2022 21:20:25">30 May, 2022</time>
              </div>
            </div>
          </div>
          <svg className="absolute -left-6 -bottom-6 h-24 w-24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 104">
            <path d="M16 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 23.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 34.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 45.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 56.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 67.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 78.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 89.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM25.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM36.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM47.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM58.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM69.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM80.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM91.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM102.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM113.5 88a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM3 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 25.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 47.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 58.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 69.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 80.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 91.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 102.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM23.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM34.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM45.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM56.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM67.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM78.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM89.5 101a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM100.5 101a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 100.5 101ZM111.5 101a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 111.5 101Z" fill="#5684FE"/>
          </svg>
        </div>
      </div>
    </section>
  )
}