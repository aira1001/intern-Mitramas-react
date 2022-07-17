/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Stack,
  Grid,
  Avatar,
  Flex,
  Text,
  Spacer,
  IconButton,
  Spinner,
  Button,
  Badge,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  useToast
} from "@chakra-ui/react";
import {
  FiMapPin,
  FiHome,
  FiPhone,
  FiBriefcase,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiSearch,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const cancelRef = useRef();
  const token = localStorage.getItem("token");
  const toast = useToast()

  
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await axios
        .get("https://mitramas-test.herokuapp.com/customers", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => setUser(res.data.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    })();
  }, [token]);

  let navigate = useNavigate();
  let editUser = (id_user) => {
    navigate(`/editUser/${id_user}`);
  };

  let deleteUser = (id_user) => {
    axios.delete("https://mitramas-test.herokuapp.com/customers",{
      headers: {
        Authorization :token
      },
      data :{
        id: id_user
      }
    }).then((res)=> {
      window.location.reload();
      toast({
        title: 'Account deleted.',
        description: "deleted user successfully",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
  }

  useEffect(() => {
    if(status === "Aktif"){
      setStatus(true)
    }else if(status === "Tidak Aktif"){
      setStatus(false)
    }
  }, [status])


  return (
    <>
      <Flex>
        <Text fontSize="5xl" mt={5} ml={10}>
          List User
        </Text>
        <Spacer />
        <Button
          leftIcon={<FiPlus />}
          mt="80px"
          mr="100px"
          colorScheme="teal"
          onClick={() => navigate("/createUser")}
        >
          Create User
        </Button>
      </Flex>
      <Flex>
        <InputGroup w="400px">
          <Input type="text" ml="50px" placeholder="Cari Nama" onChange={(event) => setSearch(event.target.value)}></Input>
          <InputRightAddon>
            <IconButton icon={<FiSearch />} />
          </InputRightAddon>
        </InputGroup>
        <Stack direction="row" ml="30px">
          <Text mt="5px">Status: </Text>
          <Select placeholder="Select Option" w="100px" borderRadius="xl" onChange={(event) => setStatus(event.target.value)}>
            <option value="Aktif">Aktif</option>
            <option value="Tidak Aktif">Tidak Aktif</option>
          </Select>
        </Stack>
      </Flex>

      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          margin="auto"
          display="block"
        />
      ) : (
        <div>
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={10} ml="50px">
            {search ? user.filter((v) => v.name === search ).sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                marginBottom="10px"
              >
                <Stack m={8}>
                  <Avatar bg="teal.500" size="xl" />
                  <Flex pt="15px">
                    <Text as="b" fontSize="xl">
                      {v.name}
                    </Text>
                    <Spacer />
                    <IconButton
                      icon={<FiEdit color="teal" />}
                      bg="transparent"
                      onClick={() => editUser(v.id)}
                    />
                    <IconButton
                      icon={<FiTrash2 color="teal" />}
                      bg="transparent"
                      onClick={() => deleteUser(v.id)}
                      // onClick={onOpen}
                    />
                  </Flex>
                  <Badge
                    variant="subtle"
                    colorScheme="green"
                    h="30px"
                    pt="5px"
                    w="95px"
                    borderRadius="full"
                  >
                    {v.status ? (
                      <Text textAlign="center">Aktif</Text>
                    ) : (
                      <Text textAlign="center">Tidak Aktif</Text>
                    )}
                  </Badge>
                  <Flex>
                    <FiHome color="teal" />
                    <Text ml="10px">{v.address}</Text>
                  </Flex>
                  <Flex>
                    <FiMapPin color="teal" />
                    <Text ml="10px">{v.country}</Text>
                  </Flex>
                  <Flex>
                    <FiPhone color="teal" />
                    <Text ml="10px">{v.phone_number}</Text>
                  </Flex>
                  <Flex>
                    <FiBriefcase color="teal" />
                    <Text ml="10px">{v.job_title}</Text>
                  </Flex>
                </Stack>
              </Box>
            )): status !== undefined? user.filter((v)=> v.status === status).sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                marginBottom="10px"
              >
                <Stack m={8}>
                  <Avatar bg="teal.500" size="xl" />
                  <Flex pt="15px">
                    <Text as="b" fontSize="xl">
                      {v.name}
                    </Text>
                    <Spacer />
                    <IconButton
                      icon={<FiEdit color="teal" />}
                      bg="transparent"
                      onClick={() => editUser(v.id)}
                    />
                    <IconButton
                      icon={<FiTrash2 color="teal" />}
                      bg="transparent"
                      onClick={()=>deleteUser(v.id)}
                      // onClick={onOpen}
                    />
                  </Flex>
                  <Badge
                    variant="subtle"
                    colorScheme="green"
                    h="30px"
                    pt="5px"
                    w="95px"
                    borderRadius="full"
                  >
                    {v.status ? (
                      <Text textAlign="center">Aktif</Text>
                    ) : (
                      <Text textAlign="center">Tidak Aktif</Text>
                    )}
                  </Badge>
                  <Flex>
                    <FiHome color="teal" />
                    <Text ml="10px">{v.address}</Text>
                  </Flex>
                  <Flex>
                    <FiMapPin color="teal" />
                    <Text ml="10px">{v.country}</Text>
                  </Flex>
                  <Flex>
                    <FiPhone color="teal" />
                    <Text ml="10px">{v.phone_number}</Text>
                  </Flex>
                  <Flex>
                    <FiBriefcase color="teal" />
                    <Text ml="10px">{v.job_title}</Text>
                  </Flex>
                </Stack>
              </Box>
            )) : user.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                marginBottom="10px"
              >
                <Stack m={8}>
                  <Avatar bg="teal.500" size="xl" />
                  <Flex pt="15px">
                    <Text as="b" fontSize="xl">
                      {v.name}
                    </Text>
                    <Spacer />
                    <IconButton
                      icon={<FiEdit color="teal" />}
                      bg="transparent"
                      onClick={() => editUser(v.id)}
                    />
                    <IconButton
                      icon={<FiTrash2 color="teal" />}
                      bg="transparent"
                      onClick={()=>deleteUser(v.id)}
                      // onClick={onOpen}
                    />
                  </Flex>
                  <Badge
                    variant="subtle"
                    colorScheme="green"
                    h="30px"
                    pt="5px"
                    w="95px"
                    borderRadius="full"
                  >
                    {v.status ? (
                      <Text textAlign="center">Aktif</Text>
                    ) : (
                      <Text textAlign="center">Tidak Aktif</Text>
                    )}
                  </Badge>
                  <Flex>
                    <FiHome color="teal" />
                    <Text ml="10px">{v.address}</Text>
                  </Flex>
                  <Flex>
                    <FiMapPin color="teal" />
                    <Text ml="10px">{v.country}</Text>
                  </Flex>
                  <Flex>
                    <FiPhone color="teal" />
                    <Text ml="10px">{v.phone_number}</Text>
                  </Flex>
                  <Flex>
                    <FiBriefcase color="teal" />
                    <Text ml="10px">{v.job_title}</Text>
                  </Flex>
                </Stack>
              </Box>))}
          </Grid>
        </div>
      )}
    </>
  );
}
