import { Card } from "flowbite-react";
import img from '../assets/images/1.png'
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({coffee,setCoffees,coffees}) => {
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/coffee/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remaining = coffees.filter(cof => cof._id !== id);
                      setCoffees(remaining);
                    }
                  });
               
            }
         
        })
    }
    return (
        <div>
            <Card className="w-full" imgSrc={coffee.photo} horizontal>
                <div className="flex items-center gap-8">
                    <div className="flex-1 font-raleway text-xl">
                        <p className="text-neutral-500"><span className="text-[#3C393B] font-semibold">Name: </span>{coffee.name}</p>
                        <p className="text-neutral-500"><span className="text-[#3C393B] font-semibold">Chef: </span>{coffee.chef}</p>
                        <p className="text-neutral-500"><span className="text-[#3C393B] font-semibold">Price: </span>{coffee.price} Taka</p>

                    </div>
                    <div className="flex flex-col gap-4">
                        <Link to={`/coffees/view-details/${coffee._id}`} className="btn bg-[#D2B48C] text-lg hover:bg-[#cfab7c] text-white"><FaEye /></Link>
                        <Link to={`/coffees/update-coffee/${coffee._id}`} className="btn bg-[#3C393B] text-lg hover:bg-[#2a292a] text-white"><FaPen /></Link>
                        <button onClick={()=>handleDelete(coffee._id)} className="btn bg-[#EA4744] text-lg hover:bg-[#dc3b38] text-white"><FaTrash /></button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;