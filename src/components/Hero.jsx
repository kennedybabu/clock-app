import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BsBrightnessHighFill} from 'react-icons/bs'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Hero = () => {
    const [time, setTime] = useState([])

    useEffect(() => {
      axios.get('http://worldtimeapi.org/api/ip').then((response)=> {
          setTime(response.data)
         
          setGreetingText()
          getDayTime()
          console.log('time', greeting)
      }).catch((error) => {
        console.log(error.message)
      })
    }, [])


    let saa = new Date(time.datetime)

    const [greeting, setGreeting] = useState('')

    let d = saa.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })


    function padTo2Digits(num) {
      return String(num).padStart(2, '0')
    }

    const hoursAndMinutes = padTo2Digits(saa.getHours()) + ':' + padTo2Digits(saa.getMinutes())

    let hrs = saa.getHours()

    let mins = saa.getMinutes()

    const [dayTime, SetDayTime ] = useState(true)


    const getDayTime = () => {
      if(hrs >= 18 && hrs <= 23) {
        SetDayTime(!dayTime)
      }
    }
   
    const setGreetingText = () => {
      if(hrs < 12) {
        setGreeting('Good Morning')
      } else if ( hrs > 12 && hrs < 16) {
        setGreeting('Good Afternoon')
      } else {
        setGreeting('Good Evening')
      }
    }    
    
  return (
    <div>
        {dayTime ? 
        <div className='w-full h-screen day relative'>
        <div className="overlay absolute w-full h-full left-0 top-0"></div>
        {/* container */}
        <div className='w-full text-white h-full absolute left-0 top-0 flex flex-col justify-end'>
            <div className='px-4 w-full '>
                <div className='text-xl tracking-wider uppercase w-full flex items-center text-white'><BsBrightnessHighFill  className='mr-2'/> {greeting}</div>
                  <h2 className='text-[90px] font-bold'>{hoursAndMinutes} <span className='text-white text-xl'>{time.abbreviation}</span></h2>
                <p className='uppercase font-bold py-4'>In {time.timezone}</p>
                <div className='items-center flex w-[90px] py-[5px] justify-between px-2 bg-white uppercase text-gray-800 rounded-[25px]'>
                  <div>more</div> 
                  <div><IoIosArrowDropdownCircle className='text-xl'/></div>
                </div>
            </div>
            <div className='hidden backdrop-blur-md p-2 text-black w-full mt-2 h-[45vh] bg-[#d6cfcf65]'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus cupiditate ratione nam! Eius, aspernatur.</p>
            </div>
        </div>            
    </div> 
    : 
    <div className='w-full h-screen night relative'>
            <div className="overlay absolute w-full h-full left-0 top-0"></div>
            {/* container */}
            <div className='w-full text-white h-full absolute left-0 top-0 flex flex-col justify-end'>
                <div className="px-4 w-full">
                <div className='text-xl tracking-wider uppercase w-full flex items-center text-white'><BsBrightnessHighFill  className='mr-2'/> {greeting}</div>
                <h2 className='text-[90px] font-bold'>{hrs}:{mins} <span className='text-white text-xl'>{time.abbreviation}</span></h2>
                <p className='uppercase font-bold py-4'>In {time.timezone}</p>
                <div className='items-center flex w-[90px] py-[5px] justify-between px-2 bg-white uppercase text-gray-800 rounded-[25px]'>
                  <div>more</div> 
                  <div><IoIosArrowDropdownCircle className='text-xl'/></div>
                </div>
                </div>
                <div className='backdrop-blur-lg p-2 h-[45vh]  bg-[#00000065] mt-2'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus cupiditate ratione nam! Eius, aspernatur.</p>
                </div>
            </div>            
        </div>
        }
    </div>
  )
}

export default Hero