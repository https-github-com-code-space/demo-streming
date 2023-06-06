
import image1 from './../../../assets/property/work-1.jpg.webp'
import image2 from './../../../assets/property/work-2.jpg.webp'
import image3 from './../../../assets/property/work-3.jpg.webp'
import image4 from './../../../assets/property/work-4.jpg.webp'
import image5 from './../../../assets/property/work-5.jpg.webp'


const Proparty = () => {

    const propartys = [
        {
            id:1,
            image: image1,
            condition: 'Sell',
            name:'Compex Subdivision',
            price: 200,
            location: 'Dhaka - Bangladesh'
        },
        {
            id:2,
            image: image2,
            condition: 'Rent',
            name:'Compex Subdivision',
            price: 200,
            location: 'Dhaka - Bangladesh'
        },
        {
            id:3,
            image: image3,
            condition: 'sell',
            name:'Compex Subdivision',
            price: 200,
            location: 'Dhaka - Bangladesh'
        },
        {
            id:4,
            image: image4,
            condition: 'Rent',
            name:'Compex Subdivision',
            price: 200,
            location: 'Dhaka - Bangladesh'
        },
        {
            id:5,
            image: image5,
            condition: 'sell',
            name:'Compex Subdivision',
            price: 200,
            location: 'Dhaka - Bangladesh'
        },
    ]


  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-20">
      <h2 className="mb-20 text-4xl text-[#4b69bd] font-bold text-center">
        Our Property
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            propartys.map((proparty) => (
                <div className='mx-auto shadow py-4 px-2 rounded-lg' key={proparty.id}>
                <div>
                <img src={proparty.image} className='rounded-lg w-100% h-[400px]' alt="" />
                </div>
                <div className=''>
                  <p className=' w-14 h-14 bg-[#4b69bd] flex justify-center items-center font-bold text-lg translate-y-[-25px] translate-x-[15px]  rounded-full text-white'><span>{proparty.condition}</span></p>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold'>{proparty.name}</h2>
                    <p className='text-xl text-[#4b69bd] font-bold'>${proparty.price}</p>
                  </div>
                  <div className='mt-5'>
                      <p className='text-xl text-[#4b69bd] font-bold'>{proparty.location}</p>
                  </div>
                </div>
              </div>
              ))
        }
      </div>
    </div>
  );
};

export default Proparty;
