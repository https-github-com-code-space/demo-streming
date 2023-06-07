import  { useState } from 'react';
import { MdClose } from "react-icons/md";
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'
import img from './../../../assets/property/thamb.jpg'

const videoData = [
    {
      id: 1,
      img: img,
      title: 'something you own that is attached to a piece of land.',
      url: 'https://youtu.be/y9j-BL5ocW8',
    },
    {
      id: 2,
      img: img,
      title: 'something you own that is attached to a piece of land.',
      url: 'https://youtu.be/4jnzf1yj48M',
    },
    {
      id: 3,
      img: img,
      title: 'something you own that is attached to a piece of land.',
      url: 'https://youtu.be/mgulkcaPMCY',
    },
    {
      id: 4,
      img: img,
      title: 'something you own that is attached to a piece of land.',
      url: 'https://youtu.be/7EHnQ0VM4KY',
    },
    {
      id: 5,
      img: img,
      title: 'something you own that is attached to a piece of land.',
      url: 'https://youtu.be/7EHnQ0VM4KY',
    },
    {
      id: 6,
      img: img,
      title: 'something you own that is attached to a piece of land.',
      url: 'https://youtu.be/7EHnQ0VM4KY',
    },
    // Add more videos as needed
  ];

const VideoPlayer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
  
    const openModal = (video) => {
      setCurrentVideo(video);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setCurrentVideo(null);
      setModalIsOpen(false);
    };

  return (
    <div className='w-[95%] md:w-[90%] mx-auto mt-28'>
      <h1 className='mb-20 text-4xl text-[#4b69bd] font-bold text-center'>Video Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {videoData.map((video) => (
          <div key={video.id} className=" mx-auto shadow shadow-[#4b69bd4d] rounded-lg px-2 py-2" onClick={() => openModal(video)}>
            <img className='cursor-pointer w-full' src={video.img} />
            <h2 className='text-lg text-slate-700 font-semibold mt-1 px-2'>{video.title}</h2>
          </div>
        ))}
      </div>
      <Modal className='m-20 bg-white border-none outline-none h-[80vh]' isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button className='ml-auto block text-3xl mb-1' onClick={closeModal}><MdClose className='text-[#4b69bd] font-extrabold'></MdClose></button>
        <ReactPlayer url={currentVideo?.url} controls volume  width='100%' height='80vh' />
      </Modal>
    </div>
  )
}

export default VideoPlayer