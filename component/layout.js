import  { useState, useEffect, cloneElement, Children, isValidElement, createContext } from 'react';
import Head from 'next/head'


import {
    Page
  } from 'konsta/react';

import Navigation from './navigation'

const MAX_SCREEN_SIZE = 900

const PageTitleContext = createContext()

export default function Layout({ children }) {
    const [screenWidth, setScreenWidtht] = useState(0)
    const [pageTitle, setPagetitle] = useState('')
  
    useEffect(() => {
        setScreenWidtht(window.innerWidth)
    }, []);

    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { PageTitleContext });
        }
        return child;
      });
    
    return (
        <Page className='max-w-4xl mx-auto lg:max-w-md' style={{margin: screenWidth > MAX_SCREEN_SIZE ? '0 35%': '0 auto' }}>
        <Head>
            <title>Gerald Halomoan Samosir</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <PageTitleContext.Provider value={[pageTitle, setPagetitle]}>
            <Navigation title={pageTitle} MAX_SCREEN_SIZE={MAX_SCREEN_SIZE}/>
        {childrenWithProps }
        </PageTitleContext.Provider>
        </Page>
    )
  }