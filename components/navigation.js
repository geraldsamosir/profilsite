import  { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


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
  Link,
  Toggle
} from 'konsta/react';

const navigations = [
  {
    path: '/',
    icon: () => (<MdHome className="w-6 h-6" />),
    title: 'Home'
  },
  {
    path: '/certification',
    icon: () => (<TbCertificate className="w-6 h-6" />),
    title: 'Certification'
  },
  {
    path: '/education',
    icon: () => (<MdCastForEducation className="w-6 h-6" />),
    title: 'Education',
  },
  {
    path: '/experience',
    icon: () => (<HiOfficeBuilding className="w-6 h-6" />),
    title: 'Jobs Experience',
  },
  {
    path: '/portfolio',
    icon: () => (<FaFolderOpen className="w-6 h-6" />),
    title: 'My Portfolio',
  }
]




export default function Navigation ({title='', MAX_SCREEN_SIZE, navigationPosition=''}) {
    const router = useRouter();
    const [leftPanelOpened, setLeftPanelOpened] = useState(false);
    const [screenWidth, setScreenWidtht] = useState(0)

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        setScreenWidtht(window.innerWidth)
    }, []);

    const navigate = (path) => {
        router.push(path)
        setLeftPanelOpened(!leftPanelOpened)
    }

    return (
        <>
        <Navbar title={`${title}`}  
        left={
            <>
            <button onClick={() => setLeftPanelOpened(true)}><HiMenuAlt1 className="w-6 h-6" /></button>
            </>
        }
        style= {{position: navigationPosition}}
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
            <Block className='flex justify-center'>
                <div className="w-14 h-8">
                <input type="checkbox" id="dark-mode-toggle" className="hidden" onChange={() => toggleDarkMode()} />
                <label htmlFor="dark-mode-toggle" className="w-full h-full bg-gray-800 dark:bg-white rounded-full p-1 flex justify-between cursor-pointer">
                    <span className="inline dark:hidden">🌞</span>
                    <span className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 block float-right dark:float-left"></span>
                    <span className="hidden dark:inline">🌛</span>
                </label>
                </div>
            </Block>
            <Block className="space-y-4 text-center	">
                <h3 className='text-4xl'>Simple is Better &#127775;</h3>
            </Block>
            <Block className="space-y-4 text-center p-5	">
            <List>
                { navigations.map(nav => (
                    <ListItem onClick={() => navigate(nav.path)} key={nav.path} media={nav.icon()} href="#" title={nav.title}  left/>
                ))}
            </List>
            </Block>
        </Page>
    </Panel>
    </>
   )
}