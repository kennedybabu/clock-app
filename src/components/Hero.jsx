import React, {useState} from 'react'

const Hero = ({time}) => {
    let saa = new Date(time.datetime)

    const [greeting, setGreeting] = useState('Good Morning')

    let d = saa.toLocaleTimeString()


    let hrs = saa.getHours()


    if(hrs > 12 && hrs < 15 ) {
      setGreeting('Good Afternoon')
    } 

  

  return (
    <div>
        <div className='w-full h-screen day relative'>
            <div className="overlay absolute w-full h-full left-0 top-0"></div>
            {/* container */}
            <div className='w-full h-full absolute left-0 top-0 flex flex-col justify-end'>
                <p>{greeting}</p>
                <h2 className='text-5xl font-bold'>{d} <span className='text-white text-xl'>{time.abbreviation}</span></h2>
                <p>In {time.timezone}</p>
                <div>
                  more
                </div>
                <p>{hrs}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero