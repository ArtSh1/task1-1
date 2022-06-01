import './App.css';

import {BsGlobe} from 'react-icons/bs';
import {FaAward} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {HiOutlineSpeakerphone} from 'react-icons/hi';
import {RiRulerLine} from 'react-icons/ri';
import {RiPercentLine} from 'react-icons/ri';
import {BiText} from 'react-icons/bi';
import {GoLightBulb} from 'react-icons/go';
import {MdOutlineDomain} from 'react-icons/md';

const datas = [
  {
    icon: <MdOutlineDomain />,
    name : 'The TLD',
    p : 'Does the domain extension math the language of the domain name?'
  },
  {
    icon : < RiRulerLine />,
    name : 'Domain Length',
    p : 'Is the domain short enough to remember?'
  },
  {
    icon : < BsGlobe />,
    name : 'Language',
    p : 'How complex is the actuall domain name?'
  },
  {
    icon : < FaAward />,
    name : 'International recognition',
    p : 'Can the domain name be used on a international scale?'
  },
  {
    icon : < BsSearch />,
    name : 'Search engine',
    p : 'Does the domain follow search engine guidelines?'
  },
  {
    icon : < HiOutlineSpeakerphone />,
    name : 'Advertising Potential',
    p : 'Could be the domain be used for advertising campaings?'
  },
  {
    icon : < RiPercentLine />,
    name : 'Sales Opportunities',
    p : 'Can the domain name be used on a international scale?'
  },
  {
    icon : < BiText />,
    name : 'Typo susceptibility',
    p : 'How high is the risk of mistyping the domain name?'
  },
  {
    icon : <GoLightBulb/>,
    name : 'Business Potential',
    p : 'Could be the domain be used as your company address?'
  }
];


function App() {
  return (
    <div className='App'>
      

     

      {datas.map((props) => {
      return(
        <div className="item">
                <div className="icon">{props.icon}</div>
                <div className="block">
                    <h5 className='h5'>{props.name}</h5>
                    <p className='p'>{props.p}</p>
                </div>
       </div>
 )
})}

    </div>
    
  );  
}

export default App;

