/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [job, setJob] = useState();
  const [status, setStatus] = useState();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const filterStatus = () => {
    if (status.toString() === "Aktif") {
      return true;
    } else if (status.toString() === "Tidak Aktif") {
      return false;
    }
  }
  

  const userEdit = [];
  userEdit.push({
    name: name,
    address: address,
    country: country,
    phone_number: phoneNumber,
    job_title: job,
  });

  const handleSubmit = () => {
    axios
      .post(
        "https://mitramas-test.herokuapp.com/customers",
        {
          name: name,
          address: address,
          country: country,
          phone_number: phoneNumber,
          job_title: job,
          status: filterStatus(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(navigate("/listUser"));
  };

  const option = ["Aktif", "Tidak Aktif"];

  return (
    <>
      <Text fontSize="5xl" m={10}>
        Create User
      </Text>
      <FormControl w="900px" mt="30px" ml="50px">
        <FormLabel htmlFor="name">Nama</FormLabel>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Input>
        <FormLabel htmlFor="address">Address</FormLabel>
        <Input
          id="address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        ></Input>
        <FormLabel htmlFor="Country">Country</FormLabel>
        <Input
          id="country"
          type="text"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        ></Input>
        <FormLabel htmlFor="phone-number">Phone Number</FormLabel>
        <Input
          id="phone-number"
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        ></Input>
        <FormLabel htmlFor="job-title">Job</FormLabel>
        <Input
          id="job-title"
          type="text"
          value={job}
          onChange={(event) => setJob(event.target.value)}
        ></Input>
        <FormLabel htmlFor="Status">Status</FormLabel>
        <Select
          placeholder="Select Option"
          onChange={(event) => setStatus(event.target.value)}
        >
          {option.map((v) => (
            <option>{v}</option>
          ))}
        </Select>
        <Button colorScheme="teal" mt="30px" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </>
  );
}

export default CreateUser;
