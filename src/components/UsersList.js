import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { addUser, removeUsers } from "../store/dataSlice";
import { useNavigate } from "react-router";

export const UsersList = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        sx={{ m: 2 }}
        onClick={() => navigate("/AddUser")}>
        ADD USER
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fisrt Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <Button variant="contained">EDIT</Button>
                  <Button
                    variant="contained"
                    sx={{ ml: 1 }}
                    onClick={() => dispatch(removeUsers(item.id))}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
