import React from 'react'
import Container from '../../layouts/Container'
import Flex from '../../layouts/Flex'
import aboutImg from '../../assets/criteria.jpeg'

const About = () => {
  const counter= [
    {
      count: "20+",
      title: "Number of subscribers"
    },
    {
      count: "130+",
      title: "Number of posts published"
    },
    {
      count: "100+",
      title: "Number of properties successfully traded"
    },
    {
      count: "20+",
      title: "Number of news stories posted"
    },
  ]
  const criteria=[
    {
      icon: "ic",
      text: "User friendly interface"
    },
    {
      icon: "ic",
      text: "Safe and security environment"
    },
    {
      icon: "ic",
      text: "Provide many utilities"
    },
  ]
  return (
    <div className='py-10  overflow-y-hidden bg-bg text-text-primary font-primary text-center'>
      <Container>
      <h3 className='mb-2'>LandHub</h3>
      <p>Trusted by Brokers and Businesses
</p>
<Flex className="my-[68px]">
  {
    counter.map((count, index)=>(
      <div key={index}>
        <h2 className='mb-2'>{count.count}</h2>
        <p>{count.title}</p>
      </div>
    ))
  }
</Flex>
<Flex>
  <div className="left text-left w-1/2">
    <span className='px-1 py-2 bg-[#EBF8FF] text-[#4299E1]  rounded-[6px] font-bold'>CRITERIA</span>
    <h2 className='mt-4'>Put the user's rights first
</h2>
<p className='my-4'>LandHub is built on 3 major criteria
</p>
<ul>
  {
    criteria.map((item, index)=><li className='my-[33px] text-[14px] text-text-primary font-bold' key={index}> <span className='mr-3'>{item.icon}</span>{item.text}</li>)
  }
</ul>
  </div>
  <div className="right w-1/2">
    <img className='-rotate-12 max-w-[476px]' src={aboutImg} alt="" />
  </div>
</Flex>

      </Container>

    </div>
  )
}

export default About