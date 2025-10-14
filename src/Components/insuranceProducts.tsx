import { Car, HeartPlus, LifeBuoy, Torus } from "lucide-react";
import Image from "next/image";


const products = [
    {
        name: 'Car Insurance',
        icon: <Car/>
    },
    {
        name: 'Health Insurance',
        icon: <HeartPlus/>
    },
    {
        name: 'Life Insurance',
        icon: <LifeBuoy/>
    },
    {
        name: 'Travel Insurance',
        icon: <Torus/>
    },
    {
        name: 'Yacht/ Boat / Jetskie Insurance',
        icon: <Car/>
    },
    {
        name: 'Personal Accident Insurance',
        icon: <Car/>
    },
    {
        name: 'Maid & Driver Insurance',
        icon: <Car/>
    },
    {
        name: 'Property Insurance',
        icon: <Car/>
    },
    {
        name: 'Motor Fleet Insurance',
        icon: <Car/>
    },
    {
        name: 'Group Medical & Life Insurance',
        icon: <Car/>
    },
    {
        name: 'Casuality & Liability Insurance',
        icon: <Car/>
    },
    {
        name: 'Engineering Insurance',
        icon: <Car/>
    },
    {
        name: 'Marine & Aviation Insurance',
        icon: <Car/>
    },
    {
        name: 'Term Insurance',
        icon: <Car/>
    }
]

const InsuranceProducts = () => {
    return(
        <section className="container mx-auto px-6 sm:px-20 py-6 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                {
                    products.map((product, index)=>(
                        <div
                            key={index}
                            
                        >
                            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#F0E4E4] hover:bg-[#e8d8d8] transition-colors cursor-pointer mb-1">
                                <div className="relative w-12 h-12 flex items-center justify-center">
                                    {product.icon}
                                </div>
                            </div>
                            <p className="text-center text-sm">
                                {product.name}
                            </p>
                            
                            
                            
                        </div>
                        
                    ))
                }
            </div>
            <div className='text-center mt-8'>
                <button className='px-6 py-2 border border-[#8B1538] text-[#8B1538] rounded-full hover:bg-[#8B1538] hover:text-white transition-colors text-sm md:text-base'>
                View all products
                </button>
            </div>
        </section>
    )
}

export default InsuranceProducts;