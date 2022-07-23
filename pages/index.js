import { useContext, useEffect } from 'react';
import {
  Block,
  Button,
  List,
  ListItem,
} from 'konsta/react';

import { FaFolderOpen, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


export default function Home({ PageTitleContext }) {
  const  [pageTitle, setPagetitle] = useContext(PageTitleContext)

  useEffect(() => {
    setPagetitle('')
  }, []);

  return (
    <>
    <Block>
      <img className='rounded-full w-3/4 mx-auto' src='https://avatars3.githubusercontent.com/u/7693125?s=460&u=2d77923712ec70fbec6467aedc96912b8f5d51fa&v=4s'/>
    </Block>
    <Block className='text-center'>
      <h2 className='text-xl'>GERALD HALOMOAN SAMOSIR</h2>
      <p className='text-lg'>Simple is Better</p>
      <br/>
      <p className='text-md'>
      Hi i'm Gerald halomoan Samosir, i have experience to build some app and website in financial serives and video and large stream file as a senior developer i have many experience to solve for scaling dan develop large and small apps and website. if you want to make an app or website you can contact me and we will improve that to be better
      </p>
      <br/>
      <p className='text-md font-bold'>Let's connect !</p>
      <br/>
      <span>
         <center className='flex justify-center '>
           <FaWhatsapp className="w-6 h-6 mx-2" />
           <SiGmail className="w-6 h-6 mx-2" />
           <FaLinkedin className="w-6 h-6  mx-2" />
         </center>
      </span>
    </Block>
  </>
  )
}
