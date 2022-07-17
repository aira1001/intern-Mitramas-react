/* eslint-disable react-hooks/exhaustive-deps */
import { Button, FormControl, FormLabel, Input, Text, Select} from "@chakra-ui/react"
import {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
    const [dataUser, setDataUser] = useState([]);
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState();
    const [status, setStatus] = useState();
    const [job, setJob] = useState();
    // const [isLoading, setIsLoading] = useState(false);

    const { idUser } = useParams();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://mitramas-test.herokuapp.com/customers", {
            headers:{
                Authorization: token
            }
        })
            .then((res) => {
                const dataFilter = res.data.data.filter((v) => v.id === Number(idUser));
                setDataUser(dataFilter);
            })
            .catch((err) => console.log(err))      
    }, [token])

    
    useEffect(() => {
       setName(dataUser.map((v) => v.name).toString())
    }, [dataUser.map((v) => v.name).toString()])

    useEffect(() => {
        setAddress(dataUser.map((v) => v.address).toString())
     }, [dataUser.map((v) => v.address).toString()])

     useEffect(() => {
        setCountry(dataUser.map((v) => v.country).toString())
     }, [dataUser.map((v) => v.country).toString()])

     useEffect(() => {
        setPhoneNumber(dataUser.map((v) => v.phone_number).toString())
     }, [dataUser.map((v) => v.phone_number).toString()])

     useEffect(() => {
        setJob(dataUser.map((v) => v.job_title).toString())
     }, [dataUser.map((v) => v.job_title).toString()])

     useEffect(() => {
        setStatus(dataUser.map((v) => v.status ? "Aktif" : "Tidak Aktif").toString())
     }, [dataUser.map((v) => v.status).toString()])

    const userEdit = [];
    userEdit.push({
        name : name,
        address : address,
        country : country,
        phone_number :phoneNumber,
        job_title : job
    })

    const filterStatus = () => {
        if (status.toString() === "Aktif") {
          return true;
        } else if (status.toString() === "Tidak Aktif") {
          return false;
        }
      }

    const handleSubmit = () => {
        axios.put("https://mitramas-test.herokuapp.com/customers", {
            id : idUser,
            name : name,
            address : address,
            country: country,
            phone_number : phoneNumber,
            job_title : job,
            status : filterStatus()
        }, {
            headers : {
                Authorization : token
            }
        })
        .then(navigate("/listUser"))
    }

    const option = ["Aktif", "Tidak Aktif"];

    return(
        <>
        <Text fontSize="5xl" m={10}>Edit User</Text>
            <FormControl w="900px" mt="30px" ml="50px">
                <FormLabel htmlFor="name">Nama</FormLabel>
                <Input id="name" type="text" value={name} onChange={(event)=>setName(event.target.value)}></Input>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input id="address" type="text" value={address} onChange={(event)=>setAddress(event.target.value)}></Input>
                <FormLabel htmlFor="Country">Country</FormLabel>
                <Input id="country" type="text" value={country} onChange={(event)=>setCountry(event.target.value)}></Input>
                <FormLabel htmlFor="phone-number">Phone Number</FormLabel>
                <Input id="phone-number" type="number" value={phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}></Input>
                <FormLabel htmlFor="job-title">Job</FormLabel>
                <Input id="job-title"type="text"  value={job} onChange={(event)=>setJob(event.target.value)}></Input>
                <FormLabel htmlFor="Status">Status</FormLabel>
                <Select placeholder="Select Option" onChange={(event) => setStatus(event.target.value)} value={status}>{option.map((v)=> <option>{v}</option>)}</Select>
                <Button colorScheme="teal" mt="30px" onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </>
    )
}

export default EditUser