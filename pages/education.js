import { useContext, useEffect } from 'react';

import {
  Card,
  Block
} from 'konsta/react';

const Educations = [
 {
    id: 1,
    image: 'https://i.im.ge/2022/07/24/FDo2aC.png',
    name: 'STMIK MIKROSKIL',
    major: 'Information Technology',
    duration: '2013 - 2017'
 },
 {
    id: 2,
    image: 'https://i.im.ge/2022/07/24/FDoUbW.png',
    name: 'SMA N 1 Pangururan',
    major: 'Science',
    duration: '2010 - 2013'
  }
]

export default function Education ({ PageTitleContext, NavigationPosition}) {
  const  [pageTitle, setPagetitle] = useContext(PageTitleContext)
  const  [navigationPosition, setNavigationPosition] = useContext(NavigationPosition)

  useEffect(() => {
    setPagetitle('Education 🎓')
    setNavigationPosition('initial')
  }, []);


  return (
    <>
      <Block>
        <div className='flex flex-col space-y-3'>
        {
            Educations.map(education => (
                <Card key={education.id} className='rounded-lg w-3/4' style={{
                    backgroundColor: '#CFCECF',
                    color: 'black',
                    margin: '2% auto'
                }}>
                 <img className='w-3/4 rounded mx-auto' src={education.image} alt="FDo2aC.png" border="0" />
                 <span className='flex justify-center text-center flex-col'>
                    <h3 className='font-bold p-5 text-lg'>{education.name} <br/>
                    {education.major}</h3>
                    <p className='font-bold p-1 text-sm'>{education.duration}</p>
                 </span>
                </Card>
            ))
        }
        </div>
      </Block>
    </>
  )
}
