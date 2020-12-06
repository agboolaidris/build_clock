import React,{useState, useEffect} from 'react'
const { default: Display_clock } = require("./Display_clock");
const { default: Set_clock } = require("./Set_clock");


function App() {
  const [state, setstate] = useState({
    break_count:0.2,
  session_count:0.4,
  current_timer:'Session',
  isPlaying:false

  })

  const [clock_count, Setclock_count] = useState(state.session_count*60);
  const [interval, setinterval] = useState(undefined)

  
  const break_increment = () => {
    if(state.break_count <60){
      setstate({
        ...state,
        break_count: state.break_count + 1,
      });
    }
  
  };
  const break_decrement = () => {
    if(state.break_count > 1){
      setstate({
        ...state,
        break_count: state.break_count - 1,
      });
    }
    
    
  };
  const session_increment = () => {
    if(state.session_count < 60){
      setstate({
        ...state,
        session_count: state.session_count + 1,
      });
    }

  };
  const session_decrement = () => {
    
    if(state.session_count > 1){
      setstate({
        ...state,
        session_count: state.session_count - 1,
      });
    }
  };

  // useEffect(() => {
  //   Setclock_count(state.session_count *60)
  // }, [session_increment,session_decrement])
  

 const handle_clock_count = ()=>{
    Setclock_count(prev=>prev - 1)
    
 }

  
  
  
  //convert the clock-count value to real time
  const convertToTime = (num)=>{
    const min = Math.floor(num/60);
    let sec = num % 60;
    sec= sec < 10 ? `0${sec}` : sec;

    return `${min}:${sec}`
} 

  // handle the pause and play button
  const pause_play = ()=>{
      Setclock_count(state.session_count * 60)
      const {isPlaying} = state;
      if(isPlaying){
       setstate({
        ...state,
         isPlaying:false
       })
       clearInterval(interval)
     }else{
      
          setinterval(setInterval(()=>{
            handle_clock_count()
          },1000))
          setstate({
         ...state,
          isPlaying:true
        })
      }

  }
  
//handle reset button

const reset = ()=>{
  Setclock_count(25*60)
    clearInterval(interval)
    setstate({
      ...state,
      isPlaying:false
    })
  
}

const app = ()=>{
if(clock_count===0){
  setstate({
    ...state,
    current_timer:state.current_timer==='Session' ? 'Break' : 'Session',
  })
  
  Setclock_count(state.current_timer !=='Session' ? state.session_count*60 : state.break_count*60)
  console.log(state.current_timer)

  playSound()
}
}


useEffect(() => {
  app()
}, [pause_play])


// sound function

const playSound = ()=>{
  const audio = document.getElementById('beep')
  audio.play()

}
  return (
    <div className="App">
     
    <Set_clock break_count={state.break_count}
     session_count={state.session_count}
     break_count={state.break_count} 
     break_increment={break_increment}
     break_decrement={break_decrement}
     session_increment={session_increment}
     session_decrement={session_decrement}
     />
    <Display_clock convertToTime={convertToTime} 
    clock_count={clock_count} 
    pause_play={pause_play}
    isPlaying={state.isPlaying}
    reset={reset}
    current_timer={state.current_timer} />
    <audio 
    id='beep'
    src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'/>
    </div>
  );
}

export default App;
