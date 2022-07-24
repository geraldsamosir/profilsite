import { useContext, useEffect } from 'react';

import {
  Card,
  Block
} from 'konsta/react';

const Experiences = [
  {
    id: 1,
    image: 'https://i.im.ge/2022/07/24/FDloTM.png',
    name: 'BIBIT',
    roles: 'Backend Developer',
    duration: 'Nov 2020 - Present'
  },
  {
    id: 2,
    image: 'https://i.im.ge/2022/07/24/FDXlSL.png',
    name: 'AXIATA DIGITAL LABS',
    roles: 'Senior Frontend Developer',
    duration: 'Okt 2019 - Nov 2020'
    }
]

export default function Experience ({ PageTitleContext, NavigationPosition}) {
  const  [pageTitle, setPagetitle] = useContext(PageTitleContext)
  const  [navigationPosition, setNavigationPosition] = useContext(NavigationPosition)

  useEffect(() => {
    setPagetitle('Jobs Experience 🏢')
    setNavigationPosition('')
  }, []);


  return (
    <>
      <Block>
        <div className='flex flex-col space-y-3'>
        {
            Experiences.map(exp => (
                <Card key={exp.id} className='rounded-lg w-3/4' style={{
                    backgroundColor: '#CFCECF',
                    color: 'black',
                    margin: '2% auto'
                }}>
                 <img className='w-1/4 rounded mx-auto' src={exp.image} alt="FDo2aC.png" border="0" />
                 <span className='flex justify-center text-center flex-col'>
                    <h3 className='font-bold p-5 text-lg'>{exp.name} </h3>
                    <p className='font-bold p-1 text-sm'>{exp.duration}</p>
                    <p className='font-bold p-1 text-sm'>{'Position As'}</p>
                    <p className='font-bold p-1 text-sm'>{exp.roles}</p>
                 </span>
                </Card>
            ))
        }
        </div>
      </Block>
    </>
  )
}