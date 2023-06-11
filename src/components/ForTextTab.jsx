import { MdKeyboardVoice } from "react-icons/md";

const ForTextTab = () => {
  return (
    <div className="w-11/12 mx-auto px-3">
      <div className="flex justify-between">
        <div className="w-[49.5%]  border rounded-lg  h-auto">
          <input
            type="text"
            className="h-auto w-11/12  mt-5 appearance-none outline-none whitespace-normal mx-3 "
          />
          <div className="mt-24 h-10 w-[95%] mx-auto flex justify-between">
            <MdKeyboardVoice className="w-6 h-10 ml-3 text-gray-700" />
            <div className="text-sm mr-3 mt-3">0/5000</div>
          </div>
        </div>
        <div className="w-[49.5%] border bg-gray-100 rounded-lg  h-48"></div>
      </div>
    </div>
  );
};

export default ForTextTab;
