import {AiOutlineHistory} from 'react-icons/ai'
import {FaStar} from 'react-icons/fa'
import {MdPeopleAlt} from 'react-icons/md'
 

const Footer = () => {
  return (
    <div className='mt-3 w-11/12 mx-auto'>
        <div className="flex justify-between mx-auto  w-2/4 h-40  my-5 px-3">
            <div className="w-24 h-24 border rounded-full m-auto ">
                <AiOutlineHistory className='w-10 h-10 rounded-full m-7 text-gray-600'/>
            </div>
            <div className="w-24 h-24 border rounded-full m-auto ">
                <FaStar className='w-10 h-10 rounded-full m-7 text-gray-600'/>
            </div>
            <div className="w-24 h-24 border rounded-full m-auto ">
                <MdPeopleAlt className='w-10 h-10 rounded-full m-7 text-gray-600'/>
            </div>
        </div>
    </div>
  )
}

export default Footer