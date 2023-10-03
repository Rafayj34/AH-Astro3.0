const ValueProposition = () => {
  return (
    <div className="my-32 flex flex-col justify-center items-center">
      <div className="flex p-4 ">
        <div className="flex flex-col gap-5 border-r-[1px] border-secondary ">
          <h2 className="text-4xl text-center">Why Us?</h2>
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et,
            vel quis debitis quas atque fugiat eveniet! Blanditiis autem
            praesentium quasi, dicta nam sed esse dolores error nostrum ad
            facilis.
          </p>
        </div>
        <div className="flex-col justify-center items-center pl-4">
            <h3 className="text-gray-600 text-center pb-4">Our Reviews</h3>
            <div className="grid grid-cols-3 ">
            <div className="">
                <h3 className="text-2xl text-center">Trustpilot</h3>
            </div>
            <div className="">
                <h3 className="text-2xl text-center">Sitejabber</h3>
            </div>
            <div className="">
                <h3 className="text-2xl text-center">Google My Business</h3>
            </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-5 mt-20">
            <ValueCard title={"some title"} desc={"itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."}/>
            <ValueCard title={"some title"} desc={"itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."}/>
            <ValueCard title={"some title"} desc={"itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."}/>
        </div>
        <div className="flex gap-5 mt-10">
            <ValueCard title={"some title"} desc={"itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."}/>
            <ValueCard title={"some title"} desc={"itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."}/>
            <ValueCard title={"some title"} desc={"itis quas atque fugiat eveniet! Blanditiis autem praesentium quasi, dicta nam sed esse dolores error nostrum ad facilis."}/>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({title,desc}) => {
    return(
        <div className="flex flex-col max-w-lg">
            <h3 className="text-2xl text-center">{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default ValueProposition;
