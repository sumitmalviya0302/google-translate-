
import {AiOutlineArrowRight} from 'react-icons/ai'

const ForWebsiteTab = () => {
  return (
    <div className="w-[90%] mx-auto px-3 border h-auto rounded-xl p-7">
        <div className='flex justify-center mx-auto w-8/12 h-40 mt-5'>
            <div className='h-12 w-8/12 border border-gray-400 rounded-md hover:border-black' >
                <input type='text' placeholder='Website' className='w-10/12 h-full ml-3 outline-none' />
            </div>
            <div className='h-12 w-12 mx-4 border rounded-full bg-blue-500 hover:bg-blue-600 '> 
            <AiOutlineArrowRight className='w-6 h-6 mt-3 ml-3 text-white ' />
            </div>

            
        </div>
    </div>
  )
}

export default ForWebsiteTab