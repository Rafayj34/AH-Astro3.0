
const FeaturedServices = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-300  py-4">
        <div className="flex ">
            <Service title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
            <Service title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
        </div>
        <div className="flex">
            <Service title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
            <Service title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
        </div>
        <div className="flex">
            <Service title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
            <Service title={"Some title"} desc={"Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsa pariatur amet iusto provident"}/>
        </div>
    </div>
  )
}

const Service = ({title,desc}) => {
    return(
        <div className="p-2 px-2 flex flex-col justify-center items-center border-r-[1px] border-secondary ">
            <h3 className="text-2xl py-1 bg-secondary w-full text-center text-white">{title}</h3>
            <p className="py-1">{desc}</p>
        </div>
    )
}

export default FeaturedServices