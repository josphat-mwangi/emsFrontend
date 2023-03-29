import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { createEmployee } from '../features/employeeReducer';

const AddEmployee = ({ setOpenForm, openForm }) => {
    const [firstName, setFirtsname] = useState()
    const [lastName, setLastname] = useState()
    const [email, setEmail] = useState()
    const [employeeNumber, setemployeeNumber] = useState()
    const [salary, setSalary] = useState()
    const [employeementDate, setEmployeementDate] = useState()
    const [employeePosition, setEmployeePosition] = useState()
    const dispatch = useDispatch();

    const handleEmployee = (e) => {
        e.preventDefault();
        
        const data = {
            firstName: firstName, 
            lastName: lastName,
            email:  email,
            employeeNumber: employeeNumber,
            employeePostion: employeePosition,
            employeementDate: employeementDate,
            salary: salary
        };
        dispatch(createEmployee(data));
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
                            <button onClick={() => setOpenForm(!openForm)} className="bg-[#00024C] rounded-full py-2 px-2">
                                <AiOutlineClose size={20} color="white" />
                            </button>
                            </div>
                            <div className="font-semibold text-3xl text-center text-black">
                                <p>Add Employee</p>
                            </div>
                            <div className='flex items-center w-full px-8 py-3'>
                            <form  onSubmit={(e) => handleEmployee(e)} method="post" className='"w-full max-w-lg'>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        First Name
                                    </label>
                                    <input value={firstName} onChange={(e) => { setFirtsname(e.target.value);}} className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text"  />
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                       Last Name
                                    </label>
                                    <input value={lastName} onChange={(e) => { setLastname(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text" required /> 
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        Email
                                    </label>
                                    <input value={email} onChange={(e) => { setEmail(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="email" required />
                                </div>
                                
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        Employeement Number
                                    </label>
                                    <input value={employeeNumber} onChange={(e) => { setemployeeNumber(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text" required />
                                </div> 
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        Employee Position
                                    </label>
                                    <input value={employeePosition} onChange={(e) => { setEmployeePosition(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text" required />
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        Salary
                                    </label>
                                    <input value={salary} onChange={(e) => { setSalary(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="text" required />
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <label className="block uppercase tracking-wide text-[#000000] text-xs font-bold mb-2">
                                        Employeement Date
                                    </label>
                                    <input value={employeementDate} onChange={(e) => {setEmployeementDate(e.target.value);}}  className="appearance-none block w-full bg-[#F9F9F9] text-[#000000] border-none rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none outline-none"  type="date" required />
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="text-center  border-none rounded-xl outline-none px-16 py-3 bg-[#00024C]  text-white text-sm shadow-sm" type='submit'>
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

export default AddEmployee