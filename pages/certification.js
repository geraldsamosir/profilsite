import { useContext, useEffect } from 'react';

import {
  Card,
  Block,
  Button
} from 'konsta/react';

const Certifications = [
  {
    id: 1,
    image: 'https://i.im.ge/2022/07/24/FDXi5h.png',
    name: 'Python for Datasience Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/UUT25KVVN6ZD?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    id: 2,
    image: 'https://i.im.ge/2022/07/24/FDXlSL.png',
    name: 'AXIATA DIGITAL LABS',
    roles: 'Senior Frontend Developer',
    duration: 'Okt 2019 - Nov 2020'
    }
]

export default function Certification ({ PageTitleContext, NavigationPosition}) {
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
            Certifications.map(cert => (
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

                <Button href={cert.link} target={'_blank'}  raised rounded clear className='mx-auto bg-[#F2F3F5] w-9/12 bottom-0 top-[-15px] '>
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