import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmployeeTable from '../component/EmployeeTable'
import AddEmployee from "../component/AddEmployee";
import { IoMdAdd } from 'react-icons/io';

const Empoyee = () => {
  const { employees } = useSelector((state) => state.employees);
  const [ openForm, setOpenForm ] = useState(false);
  const [ data, setData ] = useState(employees)
  const [ search, setSearch ] = useState();
  

  const handleSearch = (e) =>{
    e.preventDefault();
  
    const newItem = data.filter((newVal) => {
      return newVal.email === search; 
    });
    setData(newItem);
    
  }

  useEffect(()=>{
    if(search === ""){
      setData(employees);
    }
  }, [employees, data, search])






  return (
    <div className="mt-28" >
        { openForm ? <AddEmployee  setOpenForm={setOpenForm} openForm={openForm} /> : null}
        <div className='flex justify-end py-1 px-10'>
          <button  className='bg-[#00024C] rounded-full p-2' onClick={()=>setOpenForm(true)}>
            <IoMdAdd  size={24} color="white" />
          </button>
          
        </div>
        <div class=" container mx-auto py-8">
          <form onSubmit={(e) => handleSearch(e)} >
              <div class="flex relative  md:w-1/2 w-full max-w-md" >
                <input value={search} onChange={(e) => { setSearch(e.target.value);}} class="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-3xl focus:outline-none w-full text-black text-lg " type="email" name="search" placeholder="Search by email"  />
                <button type="submit" class="absolute right-0  bg-black py-3 px-8 rounded-3xl text-white">
                    Search 
                  </button>
              </div>
          </form>
        </div>
      <EmployeeTable items={data} />
    </div>
  )
}

export default Empoyee