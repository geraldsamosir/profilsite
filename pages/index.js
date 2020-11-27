import Head from 'next/head';

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Gerald Halomoan Samosir</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
        <h1>{props.profile.data.name}</h1>
        <img src={props.profile.data.profile_url}/>
        <img src={props.profile.data.profile_hover_url}/>
        <h3>{props.profile.data.Moto}</h3>
        <span>{props.profile.data.MotoItem}</span>
        <h3>
          Education
        </h3>
        <ul>
          {
            props.profile.data.Education.map(d=>{
              return(
                <li>
                  <div>
                     {d.name} <br/>
                     {d.major} <br/>
                     {d.dateRange}<br/>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <h3>Certification</h3>
        <ul>
          {
            props.profile.data.Certificaion.map(d=>{
              return(
                <li>
                  <div>
                     {d.name} <br/>
                     {d.institution} <br/>
                     {
                       d.credentialType === 'Link'?
                        <a href={d.credential}>Lihat Credential</a>
                        : <span>{d.credential}</span>
                     }
                  </div>
                </li>
              )
            })
          }
        </ul>
        <h3>Jobs Experience</h3>
        <ul>
        {
          props.Jobs.data.jobs.map((d)=>{
            return(
            <li>
              <div>
                 {d.name} <br/>
                 {d.joinDate} - {d.exitDate === null ? 'Present': d.exitDate} <br/>
                 {d.Roles} <br/>
                 {d.JobDesc}
              </div>
            </li>)
          })
        }
        </ul>
        <h3>Portfolio</h3>
        <ul>
        {
          props.portfolio.data.projects.map((d)=>{
            return(
              <li>
                <div>
                   <img src={d.covers['115']}/> <br/>
                   <span>{d.name}</span>

                </div>
              </li>
            )
          })
        }
        </ul>
     </div>
  )
}


export async function getServerSideProps(ctx) {
  const baseUrl =  process.env.env !== 'production'? process.env.API_URL_DEV :process.env.API_URL_PROD
  let profile  = await fetch(`${baseUrl}/profile`);
  profile = await profile.json();
  let Jobs = await fetch(`${baseUrl}/jobs`)
  Jobs = await Jobs.json()
  let portfolio = await fetch(`${baseUrl}/portfolio`)
  portfolio = await portfolio.json()
  return {
    props: {
      profile,
      Jobs,
      portfolio
    }
  }
}
