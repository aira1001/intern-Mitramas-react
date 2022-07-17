/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import "./dashboardPage.css";
import {
  Box,
  Stack,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  Switch,
  Flex,
  Spacer,
  Button,
  IconButton,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
} from "@chakra-ui/react";
import {
  EditIcon,
  EmailIcon,
  PhoneIcon,
  ExternalLinkIcon,
  AddIcon,
  DeleteIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

export default function DashboardPage() {
  return (
    <>
      <Flex>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mt={5}
          ml={10}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="gray.500">
              Perusahaan
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Mitramas Infosys Global</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Spacer />
        <Stack direction="row" mt={5} mr="40px">
          <IconButton bg="transparent" icon={<SearchIcon/>}/>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
          <Text>John Doe</Text>
        </Stack>
      </Flex>
      <Grid
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        m={7}

      >
        <GridItem className="grid" rowSpan={50} colSpan={1} boxShadow="md">
          <Stack>
            <Image
              src="https://connect-assets.prosple.com/cdn/ff/uIUdPj9M4ueKpVaZMYen70wFYdv6MI3rKVXML-6QRCQ/1649324075/public/styles/scale_and_crop_center_890x320/public/2022-04/banner-ada-2022.jpg?itok=yrCHEQ0i"
              alt="foto.jpg"
            />
            <Box
              boxShadow="xs"
              p="3"
              rounded="full"
              borderRadius="50%"
              bg="white"
              h="100px"
              w="100px"
              position="absolute"
              top="150px"
              left="120px"
            >
              <Image
                src="https://static.wixstatic.com/media/e817ec_be43f247d0d4454f9d29e2d22f8d4ff7~mv2.png/v1/fill/w_280,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mig.png"
                alt="logo mitramas"
                mt="15px"
              />
            </Box>
            <Box pt="70px" pl="40px">
              <Text as="b">Mitramas Infosys Global</Text>
              <Text>Layanan IT</Text>
            </Box>
            <Stack direction="row" pt="30px" pl="40px">
              <EditIcon />
              <Link href="#" isExternal color="teal">
                Setting Profile
              </Link>
            </Stack>
            <Stack pt="20px" pl="15px">
              <Text color="gray">Status perusahaan</Text>
              <Stack direction="row">
                <Text as="b" color="green">
                  Aktif
                </Text>
                <Switch id="aktif" pt="5px" pl="160px" />
              </Stack>
            </Stack>
            <Stack pt="8px" pl="15px">
              <Text color="gray">Singkatan</Text>
              <Text>MIG</Text>
            </Stack>
            <Stack pt="8px" pl="15px">
              <Text color="gray">Alamat Perusahaan</Text>
              <Text>Jl.Tebet Raya No.42 Jakarta Selatan</Text>
            </Stack>
            <Stack pt="8px" pl="15px">
              <Text color="gray">Tanggal PKP</Text>
              <Text>03 Maret 2021</Text>
            </Stack>
            <Stack pt="8px" pl="15px">
              <Text color="gray">Email</Text>
              <Stack direction="row">
                <EmailIcon pt="6px" boxSize={5} />
                <Link color="teal">mig@gmail.com</Link>
              </Stack>
            </Stack>
            <Stack pt="8px" pl="15px">
              <Text color="gray">No Telp</Text>
              <Stack direction="row">
                <PhoneIcon pt="6px" boxSize={5} />
                <Link color="teal">021-5678-1234</Link>
              </Stack>
            </Stack>
            <Stack pt="8px" pl="15px">
              <Text color="gray">Siturs Web</Text>
              <Stack direction="row">
                <ExternalLinkIcon pt="6px" boxSize={5} />
                <Link color="teal">mitramas.com</Link>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem className="grid" colSpan={4} rowSpan={5} bg="white" boxShadow="md">
          <Flex m={10}>
            <Text as="b">Lokasi</Text>
            <Spacer />
            <Link color="teal">Lihat semua</Link>
          </Flex>
          <Flex>
            <Box
              bg="green.400"
              w="340px"
              h="130px"
              ml="30px"
              mb="30px"
              borderRadius="md"
            >
              <Flex mt="20px">
                <Image
                  src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
                  alt="home"
                  w="90px"
                  h="90px"
                  ml="20px"
                />
                <Spacer />
                <Stack pt="20px" pr="20px">
                  <Text as="b" fontSize="xl" textAlign="center">
                    20
                  </Text>
                  <Text>Induk</Text>
                </Stack>
              </Flex>
            </Box>
            <Box
              bg="green.400"
              w="340px"
              h="130px"
              ml="30px"
              mb="30px"
              borderRadius="md"
            >
              <Flex mt="20px">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/711/711322.png"
                  alt="home"
                  w="90px"
                  h="90px"
                  ml="20px"
                />
                <Spacer />
                <Stack pt="20px" pr="20px">
                  <Text as="b" fontSize="xl" textAlign="right">
                    3
                  </Text>
                  <Text>Sub Lokasi level 1</Text>
                </Stack>
              </Flex>
            </Box>
            <Box
              bg="green.400"
              w="340px"
              h="130px"
              ml="30px"
              mb="30px"
              borderRadius="md"
            >
              <Flex mt="20px">
                <Image
                  src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
                  alt="home"
                  w="90px"
                  h="90px"
                  ml="20px"
                />
                <Spacer />
                <Stack pt="20px" pr="20px">
                  <Text as="b" fontSize="xl" textAlign="right">
                    1
                  </Text>
                  <Text>Sub Lokasi Level 2</Text>
                </Stack>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
        <GridItem className="grid" colSpan={2} rowSpan={23} bg="white" boxShadow="md">
          <Flex ml="30px" mt="30px" mr="30px">
            <Text as="b">Akun Bank</Text>
            <Spacer />
            <Button leftIcon={<AddIcon />} colorScheme="green">
              Tambah Akun Bank
            </Button>
          </Flex>
          <Flex mt="30px" ml="30px">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"
              w="120px"
              h="90px"
            />
            <Box ml="20px">
              <Stack>
                <Text as="b">Bank KB Bukopin</Text>
                <Text color="gray.500">****0876 - Yusron Tufiq</Text>
                <Text color="gray.500">IDR</Text>
              </Stack>
            </Box>
            <Spacer />
            <Stack direction="row" mr="20px">
              <IconButton
                bg="transparent"
                icon={<EditIcon color="green.400" />}
              />
              <IconButton bg="transparent" icon={<DeleteIcon color="red" />} />
            </Stack>
          </Flex>
          <Flex mt="30px" ml="30px">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"
              w="120px"
              h="90px"
            />
            <Box ml="20px">
              <Stack>
                <Text as="b">Citibank, NA</Text>
                <Text color="gray.500">****5525 - Si Tampan</Text>
                <Text color="gray.500">USD</Text>
              </Stack>
            </Box>
            <Spacer />
            <Stack direction="row" mr="20px">
              <IconButton
                bg="transparent"
                icon={<EditIcon color="green.400" />}
              />
              <IconButton bg="transparent" icon={<DeleteIcon color="red" />} />
            </Stack>
          </Flex>
        </GridItem>
        <GridItem className="grid" colSpan={2} rowSpan={45} bg="white" boxShadow="md">
          <Box mt="30px" ml="30px">
            <Text as="b">Aktifitas</Text>
          </Box>
          <VStack spacing={4} align="stretch" p={8}>
            <Box pr="60px">
              <Text>
                Yusron baru saja Menambahkan Lokasi Baru Kantor Cabang Jagakasra
              </Text>
              <Text color="gray.500">Hari ini, 08:00</Text>
            </Box>
            <Box pr="60px" pt="30px">
              <Text>
                Bintang Baru saja menghapus Sublokasi KCP Tebet 4 dari induk
                kantor cabang tebet
              </Text>
              <Text color="gray.500">kemaren, 17:32</Text>
            </Box>
            <Box pr="60px" pt="30px">
              <Text>
                Yusron Melakukan perubahan Profil Pada induk Kantor Cabang
                Bekasi
              </Text>
              <Text color="gray.500">kemaren, 17:32</Text>
            </Box>
          </VStack>
        </GridItem>
        <GridItem className="grid" colSpan={2} rowSpan={22} bg="white" boxShadow="md">
          <Flex ml="30px" mt="30px" mr="30px">
            <Text as="b">Relasi</Text>
            <Spacer />
            <Link color="teal">Lihat Semua</Link>
          </Flex>
          <Stack mt="30px" ml="30px">
            <Flex>
              <Image
                src="https://cdn.kibrispdr.org/data/900/share-logo-13.png"
                alt="share img"
                w="40px"
                h="40px"
              />
              <Stack ml="20px">
                <Text fontSize="xl" as="b">
                  20
                </Text>
                <Text color="gray.500">Memiliki</Text>
              </Stack>
            </Flex>
            <Flex>
              <Image
                src="https://cdn.kibrispdr.org/data/900/share-logo-13.png"
                alt="share img"
                w="40px"
                h="40px"
              />
              <Stack ml="20px">
                <Text fontSize="xl" as="b">
                  108
                </Text>
                <Text color="gray.500">Menggunakan</Text>
              </Stack>
            </Flex>
            <Flex>
              <Image
                src="https://cdn.kibrispdr.org/data/900/share-logo-13.png"
                alt="share img"
                w="40px"
                h="40px"
              />
              <Stack ml="20px">
                <Text fontSize="xl" as="b">
                  67
                </Text>
                <Text color="gray.500">Meminjam</Text>
              </Stack>
            </Flex>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
}
