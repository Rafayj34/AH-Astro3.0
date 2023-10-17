"use client"
import Image from "next/image"
;
import React, { useState, useEffect } from 'react';
import { logowhite } from "@/public";
const DiscountBanner = () => {
  const isServer = typeof window === 'undefined';
  const targetDate = Date.now() + 10000000;
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    if (!isServer) {
      const timerInterval = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [isServer]);

   function  calculateTimeRemaining () {
    const currentTime =  Date.now();
    const timeDifference = targetDate - currentTime;

    if (timeDifference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="bg-pink-800 lg:mx-auto lg:max-w-5xl xl:max-w-6xl -mt-28 relative mx-3">
   
      <div className="grid grid-cols-1 lg:grid-cols-12  lg:py-10">
      <div className="w-full col-span-2 flex justify-center items-center">
        <Image src={logowhite} width={130} height={130} alt="white logo"/>
        </div>
        <div className="text-white p-2 px-5 pr-10 col-span-7 text-center lg:text-left flex flex-col justify-center items-center">
          <h2 className="text-3xl mb-2">Dive into the Ocean of Knowledge</h2>
            <p>Start Your Journey Today with Essay Writing UK. Get a <span className="text-primary font-bold">15% discount</span> on our Writing Services. Hurry up, you get the chance to avail this limited-time offer.</p>
        </div>
        <div className="w-full col-span-2 justify-center items-center flex flex-col">
          <div className="rounded-full p-2 text-2xl relative w-56">
          <h3 className="text-primary p-2 font-bold text-lg text-left w-full">Hurry ...</h3>

            <div className="flex z-10 text-center">
              <div className="bg-black/50 rounded-lg w-full h-15 p-2">
                <p className="text-xs text-gray-300 ">Hours</p>
              <span className="text-white">{timeRemaining.hours.toString().padStart(2, '0')}</span>
              </div>
              <div className="bg-black/50 rounded-lg  w-full h-15 ml-2 mr-2 p-2">
              <p className="text-xs text-gray-300 ">Minutes</p>

              <span className="text-white">{timeRemaining.minutes.toString().padStart(2, '0')}</span>
              </div>
              <div className="bg-black/50 rounded-lg  w-full h-15 p-2">
              <p className="text-xs text-gray-300">Seconds</p>

              <span className="text-white">
                {timeRemaining.seconds.toString().padStart(2, '0')}
              </span>

              </div>
              
            </div>
            <p className="text-primary font-bold text-lg p-2 text-right">... remaining</p>

          </div>
        </div>
      
        {/* <div className="flex justify-center items-center">
          <Image src={bannerimg} height={200} width={300} alt="avail discount" className="opacity-70" />
        </div> */}
      </div>
    </div>
  );
}

export default DiscountBanner;
