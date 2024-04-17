import { useSelector, useDispatch } from "react-redux";
import { React, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { addUser } from "../store/dataSlice";

export const AddUser = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    id: Math.random(),
    state: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.state === false) {
      navigate("/");
    } else {
      navigate("/");
      dispatch(addUser(value));
    }
  };
  return (
    <div>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="280px"
        width="250px"
        margin="0 auto"
        border="2px solid blue"
        marginTop="50px"
        padding="10px"
        borderRadius="10px">
        <TextField
          id="outlined-password-input"
          label="First Name"
          type="text"
          onChange={(e) =>
            setValue({ ...value, firstName: e.target.value, state: true })
          }
        />
        <TextField
          id="outlined-password-input"
          label="Last Name"
          type="text"
          onChange={(e) =>
            setValue({ ...value, lastName: e.target.value, state: true })
          }
        />
        <TextField
          id="outlined-password-input"
          label="Age"
          type="number"
          onChange={(e) =>
            setValue({ ...value, age: e.target.value, state: true })
          }
        />
        <TextField
          id="outlined-password-input"
          label="Address"
          type="text"
          onChange={(e) =>
            setValue({ ...value, address: e.target.value, state: true })
          }
        />
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          onChange={(e) =>
            setValue({ ...value, email: e.target.value, state: true })
          }
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Box>
    </div>
  );
};
