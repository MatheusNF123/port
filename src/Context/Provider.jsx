import { useInView } from 'react-intersection-observer';
import Mycontext from './MyContext';

const Provider = ({children}) => {
  
  const { ref: elP, inView: ativaAnimationProject } = useInView({threshold: 0.2});
  const { ref: el, inView: ativaAnimation } = useInView({threshold: 0.2});
  const { ref: elC, inView: ativaAnimationContato } = useInView({threshold: 0.2});
  const { ref: elH, inView: ativaAnimationHome } = useInView({threshold: 0.2});

  const context = {
    ativaAnimation,
    el,
    elP,
    ativaAnimationProject,
    elC,
    ativaAnimationContato,
    ativaAnimationHome,
    elH
  }

  return(
    <Mycontext.Provider value={context}>
      {children}
    </Mycontext.Provider>
  )
}

export default Provider