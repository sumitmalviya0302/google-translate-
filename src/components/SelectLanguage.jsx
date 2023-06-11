import { AiOutlineArrowDown } from "react-icons/ai";
import { TbArrowsExchange } from "react-icons/tb";


const SelectLanguage = () => {
  return (
    <>
    <div className="w-[48%]  flex px-2 h-12">
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      Detect Language
    </p>
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      English
    </p>
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      French
    </p>
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      Spanish
    </p>
    <AiOutlineArrowDown className="mt-[10px] text-gray-500 hover:text-black border w-5 h-5 rounded-xl ml-3" />
  </div>
  <div className="w-[3%]">
    <TbArrowsExchange className="mx-auto mt-[10px] h-6 w-6 rounded-xl hover:bg-gray-200" />
  </div>
  <div className="w-[48%] flex px-2 h-12 ">
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      English
    </p>
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      French
    </p>
    <p className="mt-2 text-gray-500 hover:text-black h-10 mx-3">
      Spanish
    </p>
    <AiOutlineArrowDown className="mt-[10px] text-gray-500 hover:text-black border w-5 h-5 rounded-xl ml-3" />

  </div>
    </>
  )
}

export default SelectLanguage