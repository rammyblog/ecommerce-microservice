import React from 'react'
import Link from 'next/link';
import { Icon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { AiOutlineUser, AiFillShopping, AiFillMail } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const menuItems = [
  {
    name: 'My Account',
    icon: AiOutlineUser,
    href: '/profile'
  },
  {
    name: 'My Order',
    icon: AiFillShopping,
    href: '/order'
  },
  {
    name: 'Inbox',
    icon: AiFillMail,
    href: '/inbox'
  },
  {
    name: 'Favourite',
    icon: BsHeart,
    href: '/'
  },
]


const Sidebar = () => {
  return (
    <Box flex={2}           minH='calc(100vh - 80px)'
    paddingTop={5} display="flex"  bg="#020202" color="#fff">
      <Flex flexDirection='column' w="full" >
        {menuItems.map((item) => {
          return (
            <Box w="full" cursor="pointer" _hover={{ bg: "#805AD5", color: "#fff", borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }} mb={2} fontSize={18} p="1" fontWeight="bold" >
              <Link href={item.href
              }>
                <Flex alignItems="center" p="2" pl={4}>
                  <Icon as={item.icon} fontSize="2xl" w={6} h={6}/>
                  <Text ml="1rem" fontSize="sm">
                    {item.name}
                  </Text>
                </Flex>
              </Link>

            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}

export default Sidebar