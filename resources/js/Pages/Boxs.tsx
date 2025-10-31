import React from 'react'
import Camera from '../asssets/Img/camera.jpg'

export default function Boxs() {
  return (
     <div className='py-6'>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
                            <div style={{
                                backgroundImage: `url(${Camera})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                                className=" rounded-lg h-[350px] shadow-md p-4 md:p-6 text-white flex-1">
                                <h2 className="text-xl md:text-2xl font-semibold bg-transparent  mb-2"> بهترین دوربین های عکاسی</h2>
                                <p className="text-blue-100 bg-transparent ">دوربین های عکاسی حرفه ای با بهترین قیمت ممکن</p>
                            </div>

                            <div className="bg-green-500 rounded-lg shadow-md p-4 md:p-6 md:w-1/3">
                                <h2 className="text-lg md:text-xl font-semibold text-white mb-2">باکس کوچک</h2>
                                <p className="text-green-100">این یک باکس کوچک است که در کنار باکس بزرگ قرار گرفته است.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            <div className="bg-purple-500 rounded-lg shadow-md p-4 md:p-6">
                                <h2 className="text-lg md:text-xl font-semibold text-white mb-2">باکس ۱</h2>
                                <p className="text-purple-100">این اولین باکس در ردیف پایینی است.</p>
                            </div>

                            <div className="bg-yellow-500 rounded-lg shadow-md p-4 md:p-6">
                                <h2 className="text-lg md:text-xl font-semibold text-white mb-2">باکس ۲</h2>
                                <p className="text-yellow-100">این دومین باکس در ردیف پایینی است.</p>
                            </div>

                            <div className="bg-red-500 rounded-lg shadow-md p-4 md:p-6">
                                <h2 className="text-lg md:text-xl font-semibold text-white mb-2">باکس ۳</h2>
                                <p className="text-red-100">این سومین باکس در ردیف پایینی است.</p>
                            </div>
                        </div>
                    </div>
  )
}
