import { div } from "framer-motion/client";


export default function TopCustomers() {
    return (
        <div className="bg-white p-4 rounded-md shadow"> 
            <div className="flex justify-between items-center">
                <h2 className="text-gray-800 font-semibold mb-4">Top Customers </h2>
                <button className="flex items-center text-gray-400 gap-x-2 text-semibold text-sm cursor-pointer">View All <ArrowRight className="w-4 " /> </button>
            </div>

            {products.map((product, i) => (
                <div className="flex items-center justify-between my-4">
                    <div className="flex w-70 items-center gap-x-2">
                        <img src={product.image} alt="" className="w-10 h-10" />
                        <div>
                            <h2 className="font-semibold text-gray-700">{product.name} </h2>
                            <p className="text-sm text-gray-400">{product.cat}</p>
                        </div>
                    </div>
                    
                    <div className="space-x-4 w-30 flex justify-between">
                        <span className="text-sm text-blue-900 font-bold">{product.price}tk</span>
                        <button><Eye className="w-5 h-5 text-indigo-400 cursor-pointer"/></button>
                    </div>
                </div>
            ))}
            

        </div>

    );
}