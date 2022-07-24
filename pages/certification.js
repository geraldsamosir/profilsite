import { useContext, useEffect } from 'react';

import {
  Card,
  Block,
  Button
} from 'konsta/react';

// service
import { bucket } from '../service/cosmic'

export async function getStaticProps() {
  let data = await bucket.getObjects({
    query: {
      type: 'certifications'
    },
    props: 'slug,title,content,thumbnail,metadata',
    limit: 20
  }).catch(e=> { object: [] })

  data = data.objects

  if(data.length) data = data.map(d => ({ id: d.slug, image: d.thumbnail, name: d.metadata.name, link: d.metadata.link }))

  return {
    props: {
      certificationList: data
    }
  }
}

export default function Certification ({ PageTitleContext, NavigationPosition, certificationList}) {
  const  [pageTitle, setPagetitle] = useContext(PageTitleContext)
  const  [navigationPosition, setNavigationPosition] = useContext(NavigationPosition)

  useEffect(() => {
    setPagetitle('Certification 🎖')
    setNavigationPosition('')
  }, []);


  return (
    <>
      <Block>
        <div className='flex flex-col space-y-3'>
        {
            certificationList.map(cert => (
              <Card key={cert.id} className='rounded-lg w-3/4' style={{
                  margin: '1% auto',
                  background: 'transparent'
              }}>
                <div style={{
                  backgroundColor: '#CFCECF',
                  color: 'black',
                }} className='w-full rounded p-4 h-[80%]'>
                  <img className='w-1/4 rounded mx-auto' src={cert.image} alt="FDo2aC.png" border="0" />
                  <span className='flex justify-center text-center flex-col'>
                    <h3 className='font-bold p-5 text-lg'>{cert.name} </h3>
                  </span>
                </div>

                <Button href={cert.link} target={'_blank'} rel={'noreferrer'}  raised rounded clear className='mx-auto bg-[#F2F3F5] w-9/12 bottom-0 top-[-15px] '>
                    Lihat Credential
                  </Button>
              </Card>
            ))
        }
        </div>
      </Block>
    </>
  )
}