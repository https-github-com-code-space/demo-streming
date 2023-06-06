import './NewsLetter.css'
import { IoIosPaperPlane } from 'react-icons/io';

const NewsLetter = () => {
  return (
    <div className='Newslatter'>
        <div className='newsletterIcon-div'>
            <IoIosPaperPlane className='newsletterIcon'/>
        </div>
        <h2 className='text-[#4b69bd] text-2xl font-bold'>Get the best blog stories
            <br />
            into your inbox
        </h2>
        <div className='subscribe'>
            <input type="email" placeholder='Enter Your Email' />
            <button><span className='flex justify-center items-center text-[#4b69bd]'><IoIosPaperPlane/> Subscribe</span></button>
        </div>
    </div>
  )
}

export default NewsLetter