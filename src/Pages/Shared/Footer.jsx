import { Link } from "react-router-dom"


const Footer = () => {
  return (
<footer className=""> <hr/>
            <div className="container mx-auto pt-20 ">
              <div className="grid grid-cols-12 px-4 lg:px-8 xl:px-16" id="footer">
                <div className="col-span-12 md:col-span-6 lg:col-span-5">
                  <div>
                    <h3>Company Logo</h3>
                  </div>
                  
                  <p className="w-11/12 leading-loose text-slate-500 text-start mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <p className="text-xl font-semibold pb-7 pt-10 md:pt-2 text-start text-[#4b69bd]">Helpful Links</p>
                  <div className="flex">
                    <div className="w-6/12">
                      <ul className="list-none space-y-3">
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Link 1</Link>
                        </li>
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Link 2</Link>
                        </li>
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Link 3</Link>
                        </li>
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Link 4</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-6/12">
                      <ul className="list-none space-y-3">
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Teachers Profile</Link>
                        </li>
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Teachers Listings</Link>
                        </li>
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Bookmarks</Link>
                        </li>
                        <li className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" fill="#4b69bd" className="mt-1" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                          
                          <Link to='/' className="ml-1 hover:text-[#4b69bd] hover:translate-x-2 duration-200">Students Profile</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 text-start">
                  <p className="text-xl font-semibold pb-7 pt-10 md:pt-2 text-[#4b69bd]">Contact Us</p>
                  <ul className="space-y-2">
                    <li className="leading-relaxed w-10/12">Bir Uttam AK Khandakor Road, Mohakhali Dhaka-1212, Bangladesh</li>
                    <li>Phone: (123) 123-456</li>
                    <li>E-Mail:<Link to='/' className="text-[#4b69bd] font-medium"> office@techmania.com</Link></li>
                  </ul>
                </div>
              </div>
              <hr className="w-10/12 mx-auto mt-20"/>
              <div className="flex justify-center py-8 text-lg text-[#4b69bd]">
                © Copyright 2023 by TCITS
              </div>
            </div>
          </footer>
  )
}

export default Footer