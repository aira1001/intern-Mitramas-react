import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export default function BreadCrumb() {
  return (
    <>
      <Breadcrumb separator="-" mt={5} ml={10}>
        <BreadcrumbItem _hover={{textColor:"teal",  textDecoration:"bold"}} >
          <BreadcrumbLink  href="/" fontSize="lg">Login</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem _hover={{textColor:"teal",  textDecoration:"bold"}} >
          <BreadcrumbLink  href="/dashboard" fontSize="lg">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem _hover={{textColor:"teal"}}>
          <BreadcrumbLink href="/listUser" fontSize="lg">List User</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
    </>
  );
}
