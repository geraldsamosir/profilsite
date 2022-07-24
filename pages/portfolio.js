import { useContext, useEffect } from 'react';

import {
  Card,
  Block
} from 'konsta/react';

import  Behance from '../service/behance'



export async function getStaticProps() {
  let behancePorto =  await Behance.getall().catch(e=> false)
  behancePorto = !behancePorto ? [] : behancePorto.projects

  if (behancePorto.length) behancePorto =  behancePorto.map(porto => ({ id: porto.id, image: porto.covers['202'], name: porto.name }))
  return {props: {portofolios: behancePorto }}
}

export default function Portfolio ({ PageTitleContext, portofolios, NavigationPosition}) {
  const  [pageTitle, setPagetitle] = useContext(PageTitleContext)
  const  [navigationPosition, setNavigationPosition] = useContext(NavigationPosition)


  useEffect(() => {
    setPagetitle('Portfolio ☕')
    setNavigationPosition('')
  }, []);


  return (
    <>
      <Block>
        <div className='flex flex-col space-y-3'>
        {
            portofolios.map(prt => (
                <Card key={prt.id} className='rounded-lg w-3/4' style={{
                    backgroundColor: '#CFCECF',
                    color: 'black',
                    margin: '2% auto'
                }}>
                 <img className='w-3/4 rounded mx-auto' src={prt.image} alt="FDo2aC.png" border="0" />
                 <span className='flex justify-center text-center flex-col'>
                    <h3 className='font-bold p-5 text-md'>{prt.name}</h3>
                 </span>
                </Card>
            ))
        }
        </div>
      </Block>
    </>
  )
}