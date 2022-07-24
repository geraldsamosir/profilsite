import { useContext, useEffect } from 'react';
import {
  Block,
  Button,
  List,
  ListItem,
} from 'konsta/react';

import { FaFolderOpen, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import { SiGmail, SiGithub } from 'react-icons/si'


export default function Home({ PageTitleContext, NavigationPosition }) {
  const  [pageTitle, setPagetitle] = useContext(PageTitleContext)
  const  [navigationPosition, setNavigationPosition] = useContext(NavigationPosition)

  useEffect(() => {
    setPagetitle('')
    setNavigationPosition('initial')
  }, []);

  return (
    <div className='bg-cover bg-center bg-main-background'>
    <Block>
      <img className='rounded-full w-3/4 mx-auto' src='https://avatars3.githubusercontent.com/u/7693125?s=460&u=2d77923712ec70fbec6467aedc96912b8f5d51fa&v=4s'/>
    </Block>
    <Block className='text-center'>
      <h2 className='text-xl'>GERALD HALOMOAN SAMOSIR</h2>
      <p className='text-lg'>Simple is Better &#9749;</p>
      <br/>
      <p className='text-md'>
      Hi i'm Gerald halomoan Samosir, i have experience to build some app and website in financial serives and video and large stream file as a senior developer i have many experience to solve for scaling dan develop large and small apps and website. if you want to make an app or website you can contact me and we will improve that to be better
      </p>
      <br/>
      <p className='text-md font-bold'>&#129309; Let's connect!</p>
      <br/>
      <span>
         <center className='flex justify-center '>
           <a href='https://api.whatsapp.com/send?phone=6282168207251' target={'_blank'} rel={'noreferrer'} ><FaWhatsapp className="w-6 h-6 mx-2" /></a>
           <a href='https://github.com/geraldsamosir' target={'_blank'} rel={'noreferrer'} ><SiGithub className="w-6 h-6 mx-2" /></a>
           <a href='mailto:geralddeveloper95@gmail.com' target={'_blank'} rel={'noreferrer'} ><SiGmail className="w-6 h-6 mx-2" /></a>
           <a href='https://www.linkedin.com/in/gerald-halomoan-samosir-34b11611b/' target={'_blank'} rel={'noreferrer'} ><FaLinkedin className="w-6 h-6  mx-2" /></a>
         </center>
      </span>
    </Block>
  </div>
  )
}
