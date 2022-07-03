import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BsBrightnessHighFill} from 'react-icons/bs'
import {IoIosArrowDropdownCircle, IoChevronUpCircle} from 'react-icons/io'
import {FaChevronCircleUp} from 'react-icons/fa'
import {BsMoonFill} from 'react-icons/bs'

const Hero = () => {
    const [time, setTime] = useState([])

    const welcomeTypes = ['Good morning', 'Good afternoon', 'Good evening'];

    const [greeting, setGreeting] = useState('')

    useEffect(() => {
      axios.get('http://worldtimeapi.org/api/ip').then((response)=> {
          setTime(response.data)
         
          setGreetingText()
          getDayTime()          
      }).catch((error) => {
        console.log(error.message)
      })
    }, [time])


    let saa = new Date(time.datetime)


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
        setGreeting(welcomeTypes[0])
      } else if (hrs < 18) {
        setGreeting(welcomeTypes[1])
      } else if(hrs > 18 && hrs < 23){
        setGreeting(welcomeTypes[2])
      }     
    }    

    const [showMore, setShowMore] = useState(false)
    
    const handleMore = () => {
      setShowMore(!showMore)
    }

    
  return (
    <div>
        {dayTime ? 
        <div className='w-full h-screen day relative'>
        <div className="overlay absolute w-full h-full left-0 top-0"></div>
        {/* container */}
        <div className='w-full text-white h-full absolute left-0 top-0 flex flex-col justify-end'>
            <div className='px-4 w-full '>
                <div className='text-xl md:text-3xl tracking-wider uppercase w-full flex items-center text-white'>{dayTime ? <BsBrightnessHighFill  className='mr-2'/> : <BsMoonFill />} {greeting}</div>
                  <h2 className='text-[90px] md:text-[180px] font-bold'>{hoursAndMinutes} <span className='text-white text-xl md:text-3xl'>{time.abbreviation}</span></h2>
                <p className='uppercase font-bold py-4 md:py-2 md:text-2xl'>In {time.timezone}</p>
                <div onClick={handleMore} className='md:text-3xl cursor-pointer mb-[50px] md:mb-[80px] items-center flex w-[90px] md:w-[160px] py-[5px] justify-between px-4 bg-white uppercase text-gray-800 rounded-[25px]'>
                  {showMore ? <p>Less</p> : <p>More</p>}
                  <div>{showMore ? <IoIosArrowDropdownCircle className='text-xl md:text-4xl'/>: <FaChevronCircleUp />}</div>
                </div>
            </div>
            <div className={showMore ? 'flex flex-col justify-between py-[60px] md:pt-[100px] backdrop-blur-md p-2 text-black w-full mt-2 h-[45vh] md:h-[30vh] md:grid md:grid-cols-2 md:gap-4 bg-[#d6cfcf65]' : 'hidden'}>
              <div className='w-full flex justify-between uppercase items-center md:flex-col  md:justify-start'>
                <p className='text-sm'>Current Timezone</p>
                <p className='font-bold md:text-2xl'>{time.timezone}</p>
              </div>
              <div className='w-full flex justify-between uppercase items-center md:flex-col  md:justify-start'>
                <p className='text-sm'>Day of the year</p>
                <p className='font-bold md:text-2xl'>{time.day_of_year}</p>
              </div>
              <div className='w-full flex justify-between uppercase items-center md:flex-col  md:justify-start'>
                <p className='text-sm'>Day of the week</p>
                <p className='font-bold md:text-2xl'>{time.day_of_week}</p>
              </div>
              <div className='w-full flex justify-between uppercase items-center md:flex-col md:justify-start'>
                <p className='text-sm'>week number</p>
                <p className='font-bold md:text-2xl'>{time.week_number}</p>
              </div>
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