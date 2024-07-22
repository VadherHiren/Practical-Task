import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    userData: (state, action) => {
      state.push(action.payload);
    },
    addUserData: (state, action) => {
        fetch(`http://localhost:4000/users`,{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(action.payload)
        })
        .then((res)=>{
            if(res)
            {
                alert("Added..!");
            }
        })
      },

      EditUserData: (state, action) => {
        fetch(`http://localhost:4000/users/`+action.payload.id,{
            method:"put",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(action.payload)
        })
        .then((res)=>{
            if(res)
            {
                window.location.reload();
                alert("Updated..!");
            }
        })
      },

      deleteUserData: (state, action) => {
        fetch(`http://localhost:4000/users/`+action.payload.id,{
            method:"delete",
            headers:{"content-type":"application/json"},
        })
        .then((res)=>{
            if(res)
            {
                alert("deleted..!");
                window.location.reload();
            }
        })
      },
  },
});

export const { userData,addUserData,EditUserData,deleteUserData } = userSlice.actions;
export default userSlice.reducer;
