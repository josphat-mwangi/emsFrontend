import React, {useState} from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteEmployee } from '../features/employeeReducer';
import { useDispatch } from "react-redux";
import EditEmployee from './EditEmployee';




const EmployeeTable = ({items}) => {
  const [ openForm, setOpenForm ] = useState(false);
  const dispatch = useDispatch();
  const [ data, setData ] = useState()

  const handleDelete = (item) =>{
    const data = {
      id: item._id, 
    };
    dispatch(deleteEmployee(data));
   
  }

  const handleClick = (item) =>{
    setData(item)
    setOpenForm(true)
  }
  return (
    <div className='container mx-auto '>
      { openForm ? <EditEmployee datas={data} setOpenForm={setOpenForm} openForm={openForm} /> : null}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-lg text-left">
          <thead className="text-base text-[#FFFFFF]  bg-[#00024C] ">
              <tr> 
                  <th scope="col" className="px-6 py-3">
                      Employement Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                      First Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Last Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary(Ksh)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Employee position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Employement Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                  
                  </th>
                  
              </tr>
          </thead>
          <tbody>
            { items.map((item, index) => ( 
            
                <tr className="bg-sky-100 hover:bg-sky-50  text-base odd:bg-white border-b " key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        {item.employeeNumber}
                    </th>
                    <td className="px-6 py-4">
                        {item.firstName}
                    </td>
                    <td className="px-6 py-4">
                        {item.lastName}
                    </td>
                    <td className="px-6 py-4">
                        {item.email}
                    </td>
                    <td className="px-6 py-4">
                        {item.salary}
                    </td>
                    <td className="px-6 py-4">
                        {item.employeePosition}
                    </td>
                    <td className="px-6 py-4">
                        {item.employeementDate}
                    </td>
                    <td className="px-6 py-4">
                        <div className='flex gap-4 justify-center items-center'>
                          <AiFillEdit className='cursor-pointer'  onClick={()=>handleClick(item)} size={24} />
                          <AiFillDelete onClick={()=>handleDelete(item)}size={24}  />
                        </div>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeTable