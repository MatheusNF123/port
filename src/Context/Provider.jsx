
import { useEffect, useRef, useState } from 'react';
import Mycontext from './MyContext';




const Provider = ({children}) => {
  const el = useRef('')
  const elP = useRef('')
  const elC = useRef('')
  const [ativaAnimation, setAtivaAnimation] = useState('')
  const [ativaAnimationProject, setAtivaAnimationProject] = useState('')
  const [ativaAnimationContato, setAtivaAnimationContato] = useState('')
  
  useEffect(() => {
    const handleScroll = event => {
      const windowTop = window.scrollY + ((window.innerHeight * 3) / 4)
      const windowTopProject = window.scrollY + 1200
      if(windowTop > el.current.offsetTop){
        setAtivaAnimation('animate')
      }else{
        setAtivaAnimation('')
      }

      if(windowTopProject > elP.current.offsetTop){
        setAtivaAnimationProject('animate')
      }
      else{
        setAtivaAnimationProject('')
      } 
      if(windowTop > elC.current.offsetTop){
        setAtivaAnimationContato('animate')
      }
      else{
        setAtivaAnimationContato('')
      } 
      
  };
 
      window.addEventListener('scroll', handleScroll);
  
      
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const context = {
    ativaAnimation,
    setAtivaAnimation,
    el,
    elP,
    ativaAnimationProject,
    elC,
    ativaAnimationContato
  }

  return(
    <Mycontext.Provider value={context}>
      {children}
    </Mycontext.Provider>
  )
}

export default Provider