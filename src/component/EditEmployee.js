import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { updateEmployee } from '../features/employeeReducer';
import { useDispatch } from "react-redux";

const EditEmployee = ({ setOpenForm, openForm, datas}) => {
    const [ firstName, setFirstname] = useState(datas?.firstName)
    const [ lastName, setLastname] = useState(datas?.lastName);
    const dispatch = useDispatch();

    const handleEditEmployee = (e) => {
        e.preventDefault();
        
        const data = {
            firstName: firstName, 
            lastName: lastName,
            id: datas._id
        };
        dispatch(updateEmployee(data));
        
        setOpenForm(false);
      };

  return (
    <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative flex  flex-col justify-center overflow-hidden  py-12">
                <div className='container mx-auto px-3'>
                    <div className=" bg-[#1AA8E9] px-4 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                        <div className="mx-auto flex w-full max-w-md flex-col">
                            <div className="flex flex-row items-center justify-end text-center space-y-2 mb-4">
                            <button onClick={() => setOpenForm(!openForm)}  className="bg-[#00024C] rounded-full py-2 px-2">
                                <AiOutlineClose size={20} color="white" />
                            </button>
                            </div>
                            <div className="font-semibold text-3xl text-center text-black">
                                <p>Edit Employee</p>
                            </div>
                            <div className='flex items-center w-full px-8 py-3'>
                            <form onSubmit={(e) => handleEditEmployee(e)} method="post" className='"w-full max-w-lg'>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        First Name
                                    </label>
                                    <input value={firstName} onChange={(e) => { setFirstname(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text"  />
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                    Last Name
                                    </label>
                                    <input value={lastName} onChange={(e) => { setLastname(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text" required /> 
                                </div>
                                
                                <div className="flex justify-center items-center">
                                    <button className="text-center  border-none rounded-xl outline-none px-16 py-3 bg-[#00024C]  text-white text-sm shadow-sm">
                                        Add 
                                    </button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default EditEmployee