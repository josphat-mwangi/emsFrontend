import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { instance } from "../utils/axios";

export const fetchAllEmployees = createAsyncThunk(
    "employees/fetchallempoyeees",
    async (thunkAPI) => {
      try {
        const response = await instance.get("/allemployees", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response.data)
    
        return response.data;

      } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
);




export const fetchEmployee = createAsyncThunk(
    "employee/fetchemployee",
    async (apidata, thunkAPI) =>{
        try{
            const response = await instance.get("/employee",{
                email: apidata.email
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            return data;
        }catch (error) {
            thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const deleteEmployee = createAsyncThunk(
    "employee/deleteemployee",
    async (apidata, thunkAPI) => {
      try {
        const response = await instance.delete(
          `/employee/${apidata.id}`,
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        );
        const data = response.data;
        thunkAPI.dispatch(fetchAllEmployees())
        return data;
      } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
);

export const updateEmployee = createAsyncThunk(
    "employee/updateemployee",
    async (apidata, thunkAPI) => {
      const employee = toast.loading("updating employee...");
      try {
        const response = await instance.put(
          `/employee/${apidata.id}`,
          {
            firstName: apidata.firstName,
            lastName: apidata.lastName
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("put response", response.data)
        const data = response.data;
        thunkAPI.dispatch(fetchAllEmployees())
        toast.success(data.message, {
          id: employee,
          duration: 8000,
        });
      } catch (error) {
        toast.error(error.response.data.message, {
          id:employee,
        });
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
);

export const createEmployee = createAsyncThunk(
    "employee/createEmployee",
  
    async (data, thunkAPI) => {
      const employee = toast.loading("creating employee..");
      try {
        const response = await instance
          .post(
            "/",
            { 
                firstName: data.firstName, 
                lastName: data.lastName,
                email:  data.email,
                employeeNumber: data.employeeNumber,
                employeePostion: data.employeePostion,
                employeementDate: data.employeementDate,
                salary: data.salary
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
          )
          .then((response) => {
            toast.success(response.data.message, {
              id: employee,
              duration: 8000,
            });
          });
          thunkAPI.dispatch(fetchAllEmployees())
        return response.data.message;
      } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
        toast.error(error.response.data.message, {
          id: employee,
        });
      }
    }
  );


const initialState = {
    employees: [],
    loading: false,
    error: "",
    message: "",
  };
  
const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
      clearEmployeeState() {
        return initialState;
      },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEmployees.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchAllEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(fetchAllEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder
            .addCase(fetchEmployee.pending, (state, action) => {
            state.loading = true;
            })
            .addCase(fetchEmployee.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload;
            
            })
            .addCase(fetchEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        builder
            .addCase(deleteEmployee.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload;
                
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        
        builder
            .addCase(updateEmployee.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload;
                
            })
            .addCase(updateEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        
        builder
            .addCase(createEmployee.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload;
                
            })
            .addCase (createEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    
          
    }
});
export const { clearEmployeeState } =employeeSlice.actions;
export default employeeSlice.reducer;