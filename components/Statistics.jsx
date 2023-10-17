'use client';
import CountUp from "react-countup";
import Image from "next/image";

const Statistics = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-purple-900 to-primary py-32">
      <div className="container mx-auto lg:flex-row flex-col justify-center items-center py-4 lg:py-10">
        <h2 className="text-center lg:text-left text-gray-300 capitalize  pb-4">
          Let the Numbers talk.{" "}
        </h2>

        <div className="flex lg:justify-between flex-col lg:flex-row justify-center items-center">
          <div className="grid grid-cols-2 items-center justify-center h-fit xl:w-[750px]">
            <StatCounter
              name={"rating"}
              value={4.8}
              decimal={"."}
              decimalValue={1}
              suffix={"/5"}
            />
            <StatCounter name={"assignment"} value={43} suffix={"K+"} />
            <StatCounter name={"client"} value={9} suffix={"K+"} />
            <StatCounter name={"Writing Services"} value={40} suffix={"+"} />
            <StatCounter name={"Writing Services"} value={40} suffix={"+"} />
            <button className="bg-transparent ring-1 max-w-fit mx-auto ring-white text-white p-2 mt-2 px-5 hover:shadow-lg transition-all">
              See More {">"}
            </button>
          </div>
     
        </div>
      </div>
    </div>
  );
};

const StatCounter = ({
  name,
  value,
  decimal,
  decimalValue,
  suffix,
}) => {
  return (
    <div className="flex items-center p-2 sm:p-3 md:p-6 text-white">
      <div className="w-36 sm:w-56 md:w-72 lg:w-96 grid grid-cols-2 justify-center items-center pl-0 lg:pl-2 gap-0 lg:gap-10 xl:gap-2 ">
        <CountUp
          className="text-xl sm:text-4xl md:text-5xl "
          end={value}
          decimal={decimal}
          decimals={decimalValue}
          suffix={suffix}
          delay={0.75}
          duration={5}
        />
        <div>
          <p className="text-xs md:text-lg capitalize mt-2">{name}</p>
          <div className=" w-16 h-[1px] bg-gray-300 rounded-full my-2"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Statistics;
