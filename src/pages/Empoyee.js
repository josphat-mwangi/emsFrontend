import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmployeeTable from '../component/EmployeeTable'
import AddEmployee from "../component/AddEmployee";
import { IoMdAdd } from 'react-icons/io';

const Empoyee = () => {
  const { employees } = useSelector((state) => state.employees);
  const [ openForm, setOpenForm ] = useState(false);
  console.log("employee datawqui", employees)



  return (
    <div className="mt-28" >
        { openForm ? <AddEmployee  setOpenForm={setOpenForm} openForm={openForm} /> : null}
        <div className='flex justify-end py-1 px-10'>
          <button  className='bg-[#00024C] rounded-full p-2' onClick={()=>setOpenForm(true)}>
            <IoMdAdd  size={24} color="white" />
          </button>
          
        </div>
      <EmployeeTable items={employees} />
    </div>
  )
}

export default Empoyee