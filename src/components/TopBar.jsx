
import {AiOutlineMenu} from 'react-icons/ai'
import {IoApps} from 'react-icons/io5'
import {VscAccount} from 'react-icons/vsc'


const TopBar = () => {



  return (
    <>
        <header className='flex justify-between w-full py-2 px-4 border-b-2 h-20'>
            <div className='flex w-10/12 h-18'>
            <div className='h-11 w-11 border rounded-full mx-2 mt-2 hover:cursor-pointer hover:bg-gray-100'  >
            <AiOutlineMenu className='h-8 w-4 my-auto ml-[13px] mt-1  ' />
            </div>

            

               <img src='https://s.yimg.com/fz/api/res/1.2/nnrsb9GYocIjD7MXGCNVmA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTY2/https://s.yimg.com/zb/imgv1/036c1488-0018-3aca-92d4-f52c84772171/t_500x300' alt='logo' className='h-8 my-auto pt-1 ml-2 hover:cursor-pointer' />
                
                <p className='text-2xl my-auto ml-1 text-gray-600 hover:cursor-pointer'>Translate</p>
            </div>
                
            <div className='flex h-16 w-1/12 px-2'>
            <IoApps className='h-14 w-6 my-auto mx-4 ' />
            <VscAccount className='h-14 w-6 my-auto' />
            </div>
        </header>
    </>
  )
}

export default TopBar