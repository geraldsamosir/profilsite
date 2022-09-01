import  { 
 useEffect,
 useState
} from 'react';


export default function Crisp () {
    const [crispWebsiteId, _] = useState(process.env.CRISP_WEBSITE_ID)

    useEffect(() => {
      window.$crisp = [];
      const crisp = document.getElementById('crisp-id')
      window.CRISP_WEBSITE_ID=crisp.className;
      (() => {
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://client.crisp.chat/l.js';
        s.async = 1;
        d.getElementsByTagName("body")[0].appendChild(s);
      })();
    }, []);
    return (
      <div>
         <span id='crisp-id' className={crispWebsiteId}/>   
      </div>
    )
}