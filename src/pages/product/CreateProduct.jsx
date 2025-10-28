import { Package, PlusCircle } from "lucide-react";
import ProductAddForm from "../../component/product/ProductAddForm";

export default function CreateProduct() {
    return (
       <>
            <div className="flex justify-between items-center bg-white px-4 py-2 border-t-2 border-indigo-900 rounded-sm">
                <h2 className="flex items-center gap-x-1 text-gray-800">Add Product <PlusCircle className="w-5" /> </h2>
                <button className="flex items-center gap-x-1 text-white px-2 py-[3px] rounded-full font-semibold text-sm bg-purple-500"> Products <Package className="w-5" /> </button>
            </div>

            <ProductAddForm />
       </>
    );
}