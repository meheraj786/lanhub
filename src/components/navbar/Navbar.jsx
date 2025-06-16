import React from 'react'
import Flex from '../../layouts/Flex'
import logo from '../../assets/logo-light.png'
import Button from '../../layouts/Button'

const Navbar = () => {
  const navItems=[
    {
      text:"Real estate for sale",
      link: "#"
    },
    {
      text:"Real estate for rent",
      link: "#"
    },
    {
      text:"News",
      link: "#"
    },
    {
      text:"Contacts",
      link: "#"
    },
  ]



  return (
    <div className='fixed top-0 z-[9999] bg-white left-0 w-full p-3 font-primary'>
      <Flex>
        <Flex className="gap-x-5">
          <img src={logo} alt="" />
          <ul>
            <Flex className="gap-x-5">
              {
                navItems.map((item,index)=><li key={index} className='font-semibold '><a href={item.link}>{item.text}</a></li>)
              }
            </Flex>
          </ul>
        </Flex>
        <Flex className="gap-x-5">
          <span>love</span>
          <button>mode</button>
          <Button className="border border-text-primary text-text-primary">Log</Button>
          <Button className="border border-text-primary text-text-primary">Register</Button>
          <Button className="border border-primary bg-primary text-white hover:bg-white hover:text-primary ">Post News</Button>
        </Flex>

      </Flex>
    </div>
  )
}

export default Navbar