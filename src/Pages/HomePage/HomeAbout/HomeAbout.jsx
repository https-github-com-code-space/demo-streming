import { FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { BsBuildings, BsWallet2 } from 'react-icons/bs';
import './HomeAbout.css'

const HomeAbout = () => {
  return (
<div className="about">
      <h1 className='mb-16 text-4xl text-[#4b69bd] font-bold text-center'>Our Services</h1>
      <div className="about-section">
        <div className="center">
          <div className="icon-div">
            <FaMapMarkedAlt className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#4b69bd]'>Find Places Anywhere in the World</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div  className="icon-div">
            <MdOutlineRealEstateAgent className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#4b69bd]'>We have agents</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div  className="icon-div">
            <BsBuildings className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#4b69bd]'>Buy & Rent Modern Properties</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="icon-div">
            <BsWallet2 className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#4b69bd]'>Making Money</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout