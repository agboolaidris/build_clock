import React,{useState, useEffect} from 'react'
const { default: Display_clock } = require("./Display_clock");
const { default: Set_clock } = require("./Set_clock");


function App() {
  const [state, setstate] = useState({
    break_count:5,
  session_count:25,
  current_timer:'Session',
  isPlaying:false
})

  
  const [clock_count, Setclock_count] = useState( 25*60);
  const [interval, setinterval] = useState(undefined)

  // BREAK AND SESSION INCREMENT AND DECREMENNT FUNCTION
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

  
// CLOCK COUNT FUNCTION
 const handle_clock_count = ()=>{
    Setclock_count(prev=>prev - 1)
    
 }

  
  
  
  // CONVERTION THE CLOCK COUNT VALUE TO  MM:SS FUNCTION
  const convertToTime = (num)=>{
    let min = Math.floor(num/60);
    min= min < 10 ? `0${min}` : min
    let sec = num % 60;
    sec= sec < 10 ? `0${sec}` : sec;

    return `${min}:${sec}`
} 

  //HANDLE THE PAUSE AND PLAY BUTTON
  const pause_play = ()=>{
      
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
  
   
// HANDLE RESET BUTTON

const reset = ()=>{
  Setclock_count(25*60)
    clearInterval(interval)
    setstate({
      ...state,
      break_count:5,
      session_count:25,
      isPlaying:false
    })
    const audio = document.getElementById('beep')
  audio.pause()  
 audio.currentTime = 0

  
}

// SOUND PLAY FUNCTION
const playSound = ()=>{
  const audio = document.getElementById('beep')
  audio.play()

}


// FUNCTION THAT HANDLE SOUND WHEN CLOCK COUNT IS 00:00
const study_clockCount = ()=>{
if(clock_count < 0){
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
  study_clockCount()
}, [pause_play])



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
