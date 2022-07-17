import { Input,Box, Stack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    let navigate = useNavigate();
    let postUser = () => {
        axios
            .post("https://mitramas-test.herokuapp.com/auth/login",{
                email : email,
                password : password
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.access_token);
                navigate("/listUser");
            })
    }
   
    return (
        <>
        <Box w="500px" m="auto" display="block" >
            <Stack>
                <Text>email : akun13@mig.id</Text>
                <Input type="email" placeholder="masukkan email" onChange={(event) => setEmail(event.target.value)} value={email}/>
            </Stack>
            <Stack mt={5}>
                <Text>password : 3D339E7F</Text>
                <Input type="password" placeholder="masukkan password" onChange={(event) => setPassword(event.target.value)} value={password}/>
            </Stack>
            <Button mt={5} colorScheme="teal" onClick={postUser}>Submit</Button>
        </Box>
        </>
    )
    
}