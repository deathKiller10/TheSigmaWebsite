import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    

    return (
        <>
            <Header />

            <section className="py-10 sm:py-16 lg:py-20 bg-gray-800 text-gray-200">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-2xl font-bold sm:text-3xl">Our featured items</h2>
                        <p className="mt-4 text-base font-normal leading-7">Welcome to The Sigma Shopping Site</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png" alt="" />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold sm:text-sm md:text-base">
                                        <a href="#" title="">
                                            Beoplay M5 Bluetooth Speaker
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-bold sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold sm:text-sm md:text-base">
                                        <a href="#" title="">
                                            Apple Smart Watch 6 - Special Edition
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-bold sm:text-sm md:text-base">$299.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png" alt="" />
                            </div>
                            <div className="absolute left-3 top-3">
                                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">Sale</p>
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold sm:text-sm md:text-base">
                                        <a href="#" title="">
                                            Beylob 90 Speaker
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-bold sm:text-sm md:text-base">$49.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png" alt="" />
                            </div>
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold sm:text-sm md:text-base">
                                        <a href="#" title="">
                                            Martino 75 Bluetooth
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-bold sm:text-sm md:text-base">$79.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default App
