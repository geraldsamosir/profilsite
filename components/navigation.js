import  { useState, useEffect } from 'react';

import {  MdHome, MdCastForEducation, MdClose } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { HiOfficeBuilding, HiMenuAlt1 } from 'react-icons/hi'
import { FaFolderOpen, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

import {
  Page,
  Panel,
  Navbar,
  Block,
  List,
  ListItem,
  Link
} from 'konsta/react';




export default function Navigation ({title='', MAX_SCREEN_SIZE}) {
    const [leftPanelOpened, setLeftPanelOpened] = useState(false);
    const [screenWidth, setScreenWidtht] = useState(0)

    useEffect(() => {
        setScreenWidtht(window.innerWidth)
    }, []);

    return (
        <>
        <Navbar title={title}  
        left={
            <>
            <button onClick={() => setLeftPanelOpened(true)}><HiMenuAlt1 className="w-6 h-6" /></button>
            </>
        }
        style= {{position: 'initial'}}
        />
        <Panel
        side="left"
        opened={leftPanelOpened}
        onBackdropClick={() => setLeftPanelOpened(false)}
        className='max-w-md'
        style={{width: screenWidth > MAX_SCREEN_SIZE ? '30%': '100%' }}
        >
        <Page>
            <Navbar
            title=""
            left={
                <>
                <Link navbar onClick={() => setLeftPanelOpened(false)}>
                <MdClose className="w-6 h-6" />
                </Link>
                </>
            }
            style= {{position: 'initial'}}
            />
            <Block>
            <img className='rounded-full w-1/2 mx-auto' src='https://avatars3.githubusercontent.com/u/7693125?s=460&u=2d77923712ec70fbec6467aedc96912b8f5d51fa&v=4s'/>
            </Block>
            <Block className="space-y-4 text-center	">
                <h3 className='text-4xl'>Simple is Better</h3>
            </Block>
            <Block className="space-y-4 text-center	">
            <List>
            <ListItem media={<MdHome className="w-6 h-6" />} href="#" title="Home"  left/>
            <ListItem media={<TbCertificate className="w-6 h-6" />} href="#" title="Certification" />
            <ListItem media={<MdCastForEducation className="w-6 h-6" />}  href="#" title="Education" />
            <ListItem media={<HiOfficeBuilding className="w-6 h-6" />} href="#" title="Jobs Experience" />
            <ListItem media={<FaFolderOpen className="w-6 h-6" />} href="#" title="My Portfolio" />
            </List>
            </Block>
        </Page>
    </Panel>
    </>
   )
}