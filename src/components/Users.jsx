import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const usersLoader = useLoaderData();
    const [users, setUsers] = useState(usersLoader)
    const handleUserDelete = (id) => {
        fetch(`https://espresso-emporium-server-36b6arxvl.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
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
                            const remaining = users.filter(cof => cof._id !== id);
                            setUsers(remaining);
                        }
                    });

                }
            })
    }
    return (
        <div className="overflow-x-auto max-w-screen-xl mx-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-2xl text-black'>ID</th>
                        <th className='text-2xl text-black'>Name</th>
                        <th className='text-2xl text-black'>Email</th>
                        <th className='text-2xl text-black'>CreatedAt</th>
                        <th className='text-2xl text-black'>LogInTime</th>
                        <th className='text-2xl text-black'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id} className="hover">
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastSignInTime}</td>
                            <td className='flex gap-4'>
                                <button className='btn btn-success text-white'>Edit</button>
                                <button onClick={() => handleUserDelete(user._id)} className='btn btn-error text-white'>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;