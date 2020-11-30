import Head from 'next/head';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default function Home(props) {
  const size = useWindowSize();

  return (
    <div className="container">
      <Head>
        <title>Gerald Halomoan Samosir</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <style jsx>{`
        .hero {
          display: block;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          background: url(${props.profile.data.profile_url}) no-repeat;
          background-size: contain, cover;
          border-radius: 58%;
          width: 280px; /* Width of new image */
          height: 336px; /* Height of new image */r

        }
        .hero:hover {
          background: url(${props.profile.data.profile_hover_url}) no-repeat;
          background-size: contain, cover;
          border-radius: 58%;
          width: 280px; /* Width of new image */
          height: 336px; /* Height of new image */
        }
        .content {
          text-align: left;
          background: white;
          margin :${size.width <= 1000? '-5%':'1%'};
          max-height: ${size.height};
          overflow-y: scroll;
          box-shadow: 5px 5px 8px 5px rgba(0,0,0,0.2);
          transition: 0.3s;

        }
        .maincontent {
          #background: #fafafa;
          padding-left: 5%;
          padding-right: 5%;
          padding-top: 3%;
          padding-bottom: 3%;
          width: ${size.width <= 768 ? '100%': ''};
          max-height: ${size.height};
          overflow-y: scroll;

        }
        body {
          background: blue;
        }
        ul {
          list-style-type: none;
          display: inline;
          float : left;
          width: 100%;
          padding:0%
        }
        ul li {
          padding: 2%;
          display: inline;
          float: left;
          margin : 3px;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;

        }
        .porfolio {
          width: 45%;
          display: inline
        }
        body{
          background: #3399ff;
        }


        .circle{
          position: absolute;
          border-radius: 50%;
          background: #40b8ce7a;
          animation: ripple 15s infinite;
          box-shadow: 0px 0px 1px 0px #508fb9;
        }

        .small{
          width: 200px;
          height: 200px;
          left: -100px;
          bottom: -100px;
        }

        .medium{
          width: 400px;
          height: 400px;
          left: -200px;
          bottom: -200px;
        }

        .large{
          width: 600px;
          height: 600px;
          left: -300px;
          bottom: -300px;
        }

        .xlarge{
          width: 800px;
          height: 800px;
          left: -400px;
          bottom: -400px;
        }

        .xxlarge{
          width: 1000px;
          height: 1000px;
          left: -500px;
          bottom: -500px;
        }

        .shade1{
          opacity: 0.2;
        }
        .shade2{
          opacity: 0.5;
        }

        .shade3{
          opacity: 0.7;
        }

        .shade4{
          opacity: 0.8;
        }

        .shade5{
          opacity: 0.9;
        }

        @keyframes ripple{
          0%{
            transform: scale(0.8);
          }

          50%{
            transform: scale(1.2);
          }

          100%{
            transform: scale(0.8);
          }
        }

        .link {
          text-decoration: none;
          color: black;
          font-size: 50px;
          margin: 1%;
        }

      `}</style>
        <div className="ripple-background">
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle medium shade4"></div>
            <div className="circle small shade5"></div>

        </div>
        <div className="maincontent">
          <div className="content">
            <h1 style={{textAlign:'center'}}>{props.profile.data.name}</h1>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1
              }}
            >
              <center>
                <div className="hero" />
               </center>
            </motion.div>
            {/* <FontAwesomeIcon icon={['fab', 'microsoft']} /> */}
            <center>
            <a href="https://www.linkedin.com/in/gerald-halomoan-samosir-34b11611b/?originalSubdomain=id" target="_blank" className="link" >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/geraldsamosir" target="_blank" className="link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=6282168207251" target="_blank" className="link">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <br/>
            <a href="mailto:geralddeveloper95@gmail.com" c>
              geralddeveloper95@gmail.com
            </a>
            </center>
            <br/><br/><br/>
            <h3>{props.profile.data.Moto}</h3>
            <span>{props.profile.data.MotoItem}</span>
            <h3>Jobs Experience</h3>
            <ul>
            {
              props.Jobs.data.jobs.map((d)=>{
                return(
                <li>
                  <div>
                    {d.name} <br/>
                    {d.joinDate} - {d.exitDate === null ? 'Present': d.exitDate} <br/>
                    {d.Roles}
                  </div>
                </li>)
              })
            }
            </ul>
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

            <h3>Portfolio</h3>
            <ul>
            {
              props.portfolio.data.projects.map((d)=>{
                return(
                  <li style={{display:"inline", float: 'left',padding: (size.width > 1000)?'3%': '0%', width: (size.width <= 1000)?'45%': '25%', marginBottom: '2%', height: '200px'}} >
                    <div >
                      <center>
                      <img src={d.covers['202']}/> <br/>
                      <span>{d.name}</span>
                      </center>
                    </div>
                  </li>
                )
              })
            }
            </ul>
          </div>
          </div>
     </div>
  )
}


const fetchparams = {
  method: "GET",
  headers: {
    // update with your user-agent
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
    Accept: "application/json; charset=UTF-8",
  },

}

export async function getStaticProps() {
  const baseUrl =  process.env.env !== 'production'? process.env.API_URL_DEV :process.env.API_URL_PROD
  let profile  = await fetch(`${baseUrl}/profile`,{...fetchparams});
  profile = await profile.json();
  let Jobs = await fetch(`${baseUrl}/jobs`, {...fetchparams})
  Jobs = await Jobs.json()
  let portfolio = await fetch(`${baseUrl}/portfolio`, {...fetchparams})
  portfolio = await portfolio.json()
  portfolio.data.projects = portfolio.data.projects.filter((d)=> d.name !== 'Beauty Preview')
  return {
    props: {
      profile,
      Jobs,
      portfolio
    }
  }
}
