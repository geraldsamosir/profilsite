import  { 
  useState,
  useEffect,
  cloneElement,
  Children,
  isValidElement,
  createContext
} from 'react';

import Head from 'next/head'

import {
    Page
  } from 'konsta/react';

import Navigation from './navigation'

import dynamic from 'next/dynamic'

// const CrispNoSSR =  dynamic(
//   () => import('./crisp'),
//   { ssr: false }
// )

import Crisp from './crisp';

const MAX_SCREEN_SIZE = 900

const PageTitleContext = createContext()
const NavigationPosition = createContext()

export default function Layout({ children }) {
    const [screenWidth, setScreenWidtht] = useState(0)
    const [pageTitle, setPagetitle] = useState('')
    const [navigationPosition, setNavigationPosition] = useState('initial')

  
    useEffect(() => {
      setScreenWidtht(window.innerWidth)
    }, []);

    const childrenWithProps = Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child, { PageTitleContext, NavigationPosition });
      }
      return child;
    });

    return (
        <Page 
          className='max-w-4xl mx-auto lg:max-w-md ' 
          style={{
            margin: screenWidth > MAX_SCREEN_SIZE ? '0 35%': '0 auto', 
          }}>
        <Head>
            <title>Gerald Halomoan Samosir</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavigationPosition.Provider value={[navigationPosition, setNavigationPosition]} >
          <PageTitleContext.Provider value={[pageTitle, setPagetitle]}>
              <Navigation title={pageTitle} MAX_SCREEN_SIZE={MAX_SCREEN_SIZE} navigationPosition={navigationPosition}/>
              <div>
                {childrenWithProps }
              </div>
          </PageTitleContext.Provider>
        </NavigationPosition.Provider>
        <Crisp/>
        </Page>
    )
  }