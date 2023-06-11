import {MdTranslate} from 'react-icons/md'
import {IoDocumentSharp, IoImageSharp } from 'react-icons/io5'
import {TbWorld} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className=" w-11/12 mt-2 mx-auto h-20 flex ">
            <Link to='/' ><div className='flex justify-between my-auto mx-4 border  h-10  px-2 rounded-md hover:bg-blue-100'>
            <MdTranslate className='text-blue-600 my-auto font-bold' />
            <p className='my-auto text-blue-600 '>Text</p>
        </div></Link>
            
            <Link to='/images' >
            <div className='flex justify-between my-auto mx-4 border h-10  px-2 rounded-md hover:bg-blue-100'>
            <IoImageSharp className='text-blue-600 my-auto mr-2 font-bold'/>
            <p className='my-auto text-blue-600  '>Images</p>
        </div>
            </Link>
            
            <Link to='/documents' >
            <div className='flex justify-between my-auto mx-4 border  h-10  px-2 rounded-md hover:bg-blue-100'>
            <IoDocumentSharp className='text-blue-600 my-auto mr-2 font-bold'/>
            <p className='my-auto text-blue-600 '>Documents</p>
        </div>
            </Link>
            

            <Link to='/website'>
            <div className='flex justify-between my-auto mx-4 border  h-10 px-2 rounded-md hover:bg-blue-100'>
            <TbWorld className='text-blue-600 my-auto mr-2 font-bold'/>
            <p className='my-auto text-blue-600 '>Websites</p>
        </div>
            </Link>
            
        </div>
    </>
  )
}

export default NavBar