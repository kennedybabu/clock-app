import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BsBrightnessHighFill} from 'react-icons/bs'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Hero = () => {
    const [time, setTime] = useState([])

    useEffect(() => {
      axios.get('http://worldtimeapi.org/api/ip').then((response)=> {
          setTime(response.data)
          console.log(time)
          setGreetingText()
          console.log('time', greeting)
      }).catch((error) => {
        console.log(error.message)
      })
    }, [])


    let saa = new Date(time.datetime)

    const [greeting, setGreeting] = useState('')

    let d = saa.toLocaleTimeString()

    let hrs = saa.getHours()
   
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
        <div className='w-full h-screen day relative'>
            <div className="overlay absolute w-full h-full left-0 top-0"></div>
            {/* container */}
            <div className='w-full text-white h-full absolute left-0 top-0 flex flex-col justify-end pb-[100px] px-[30px]'>
                <div className='w-full flex items-center text-white'><BsBrightnessHighFill  className='mr-2'/> {greeting}</div>
                <h2 className='text-5xl font-bold'>{d} <span className='text-white text-xl'>{time.abbreviation}</span></h2>
                <p className='uppercase font-bold'>In {time.timezone}</p>
                <div className='items-center flex w-[90px] py-[5px] justify-between px-2 bg-white uppercase text-gray-800 rounded-[25px]'>
                  <div>more</div> 
                  <div><IoIosArrowDropdownCircle className='text-xl'/></div>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus cupiditate ratione nam! Eius, aspernatur.</p>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Hero