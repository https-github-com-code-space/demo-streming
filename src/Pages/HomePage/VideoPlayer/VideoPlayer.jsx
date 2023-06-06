import  { useState } from 'react';
import { MdClose } from "react-icons/md";
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'
import img from './../../../assets/property/tham.jpeg'

const videoData = [
    {
      id: 1,
      img: img,
      title: 'Video 1',
      url: 'https://youtu.be/0SCopio77gM',
    },
    {
      id: 2,
      img: img,
      title: 'Video 2',
      url: 'https://youtu.be/CTF8LwhL9uE',
    },
    {
      id: 3,
      img: img,
      title: 'Video 3',
      url: 'https://youtu.be/y-X8mF_5PUw',
    },
    {
      id: 4,
      img: img,
      title: 'Video 4',
      url: 'https://youtu.be/CTF8LwhL9uE',
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
    <div className='w-[95%] md:w-[90%] mx-auto mt-20'>
      <h1 className='mb-20 text-4xl text-[#4b69bd] font-bold text-center'>Video Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {videoData.map((video) => (
          <div key={video.id} className="video-item mx-auto" onClick={() => openModal(video)}>
            <img src={video.img} />
            <h2>{video.title}</h2>
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button className='ml-auto block text-3xl mb-10' onClick={closeModal}><MdClose></MdClose></button>
        <ReactPlayer url={currentVideo?.url} controls volume  width='100%' height='100%' />
      </Modal>
    </div>
  )
}

export default VideoPlayer