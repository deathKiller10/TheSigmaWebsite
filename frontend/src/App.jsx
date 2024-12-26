import './App.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { PiSigmaBold } from "react-icons/pi";

function App() {
  

  return (
    <>
      <div className="h-[8vh] bg-gray-900 text-white shadow-md">
        <div className="flex justify-between mx-4 justify-center items-center h-full">
          <RxHamburgerMenu size={24} className="hover:scale-[1.15] hover:cursor-pointer" />
          <PiSigmaBold size={24} className="hover:cursor-pointer"/>
          <ul className="flex gap-4">
            <li className="hover:scale-[1.15] hover:cursor-pointer"><IoSearch size={24}/></li>
            <li className="hover:scale-[1.15] hover:cursor-pointer"><FaCartShopping size={24}/></li>
          </ul>
        </div>
      </div>
      {/* <div className="flex justify-center h-[92vh] bg-gray-800">
        
      </div> */}
      <section class="py-10 sm:py-16 lg:py-20 bg-gray-800 text-gray-200 h-[calc(100vh-8vh)]">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-md mx-auto text-center">
            <h2 class="text-2xl font-bold sm:text-3xl">Our featured items</h2>
            <p class="mt-4 text-base font-normal leading-7">Welcome to The Sigma Website</p>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png" alt="" />
                </div>
                <div class="absolute left-3 top-3">
                    <p class="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
                </div>
                <div class="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 class="text-xs font-bold sm:text-sm md:text-base">
                            <a href="#" title="">
                                Beoplay M5 Bluetooth Speaker
                                <span class="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                    </div>

                    <div class="text-right">
                        <p class="text-xs font-bold sm:text-sm md:text-base">$99.00</p>
                    </div>
                </div>
            </div>

            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png" alt="" />
                </div>
                <div class="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 class="text-xs font-bold sm:text-sm md:text-base">
                            <a href="#" title="">
                                Apple Smart Watch 6 - Special Edition
                                <span class="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                    </div>

                    <div class="text-right">
                        <p class="text-xs font-bold sm:text-sm md:text-base">$299.00</p>
                    </div>
                </div>
            </div>

            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png" alt="" />
                </div>
                <div class="absolute left-3 top-3">
                    <p class="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">Sale</p>
                </div>
                <div class="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 class="text-xs font-bold sm:text-sm md:text-base">
                            <a href="#" title="">
                                Beylob 90 Speaker
                                <span class="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                    </div>

                    <div class="text-right">
                        <p class="text-xs font-bold sm:text-sm md:text-base">$49.00</p>
                        <del class="mt-0.5 text-xs sm:text-sm font-bold text-gray-400"> $99.00 </del>
                    </div>
                </div>
            </div>

            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png" alt="" />
                </div>
                <div class="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 class="text-xs font-bold sm:text-sm md:text-base">
                            <a href="#" title="">
                                Martino 75 Bluetooth
                                <span class="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                    </div>

                    <div class="text-right">
                        <p class="text-xs font-bold sm:text-sm md:text-base">$79.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default App
