'use client'
import Link from "next/link";
import { insuranceProducts } from "@/lib/insuranceData";
import { useState } from "react";
import { X } from "lucide-react";



const InsuranceProducts = () => {
    const [showModal, setShowModal] = useState(false);
    return(
         <>
        <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-6 w-full  overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
                {
                    insuranceProducts.map((product, index)=>{
                        const IconComponent = product.icon;
                        return(
                            <Link
                                key={index}
                                href={`/insurance/${product.slug}`}
                                data-testid={`insurance-product-${product.slug}`}
                                className="block"
                            >
                                <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl bg-[#F0E4E4] hover:bg-[#E5D4D4] transition-colors cursor-pointer mb-1">
                                    <div className="relative w-10 h-10 sm:w-12 flex items-center justify-center text-[#8B1538]">
                                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8"/>
                                    </div>
                                </div>
                                <p className="text-center text-xs sm:text-sm leading-tight">
                                    {product.name}
                                </p>

                            </Link>
                        )
                    })
                }
            </div>
            {/* view all button */}
            <div className="text-center mt-6 sm:mt-8">
                <button
                    onClick={()=> setShowModal(true)}
                    className="px-6 py-2 border border-[#8B1538] text-[#8B1538] rounded-full hover:bg-[#8B1538] hover:text-white transition-colors text-sm md:text-base"
                >
                    View all products
                </button>
            </div>
            
        </section>

        {/* Modal */}
        {
            showModal && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
                    onClick={()=> setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[85vh] overflow-y-auto"
                        onClick={(e)=> e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl">
                             <h3 className="text-xl sm:text-2xl font-semibold text-[#8B1538]">All Insurance Products</h3>
                             <button
                                onClick={() => setShowModal(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close modal"
                             >
                                <X size={24} className="text-gray-600 cursor-pointer"/>
                             </button>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {
                                insuranceProducts.map((product, index)=>{
                                    const IconComponent = product.icon;
                                    return (
                                        <Link
                                            key={index}
                                            href={`/insurance/${product.slug}`}
                                            data-testid={`modal-insurance-product-${product.slug}`}
                                            onClick={() => setShowModal(false)}
                                            className="block group"
                                        >
                                            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#F0E4E4] hover:bg-[#8B1538] transition-all cursor-pointer">
                                                <div className="relative w-12 h-12 flex items-center justify-center text-[#8B1538] group-hover:text-white transition-colors">
                                                    <IconComponent size={32} />
                                                </div>
                                                <p className="text-center text-sm font-medium text-gray-800 group-hover:text-white transition-colors">
                                                    {product.name}
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })
                            }
                            </div>
                        </div>

                    </div>

                </div>
            )
        }
        
        </>
    )
}

export default InsuranceProducts;