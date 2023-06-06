import { MdOutlineSmartDisplay } from 'react-icons/md';
import { GiBookmarklet, GiGraduateCap } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';
import './HomeAbout.css'

const HomeAbout = () => {
  return (
<div className="about">
      <div className="about-section">
        <div className="center">
          <div className="icon-div">
          <MdOutlineSmartDisplay className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#03B97C]'>Online Courses</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div  className="icon-div">
            <GiBookmarklet className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#03B97C]'>24/7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div  className="icon-div">
            <GiGraduateCap className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#03B97C]'>Personal Teacher</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="icon-div">
            <BsLaptop className="icon"/>
          </div>
          <div className="icon-text">
            <h3 className='font-bold text-xl mb-2 text-[#03B97C]'>Powerful Program</h3>
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