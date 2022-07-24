import { useContext, useEffect } from 'react';

import {
  Card,
  Block
} from 'konsta/react';

// service
import { bucket } from '../service/cosmic'


export async function getStaticProps() {
  let data = await bucket.getObjects({
    query: {
      type: 'experiences'
    },
    props: 'slug,title,content,thumbnail,metadata',
    limit: 20
  }).catch(e=> { object: [] })

  data = data.objects

  if(data.length) data = data.map(d => ({ id: d.slug, image: d.thumbnail, name: d.metadata.name, roles: d.metadata.roles, duration: d.metadata.duration }))

  return {
    props: {
      experienceList: data
    }
  }
}


export default function Experience ({ PageTitleContext, NavigationPosition, experienceList}) {
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
            experienceList.map(exp => (
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