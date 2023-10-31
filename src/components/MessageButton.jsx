import { useState } from 'react';

export function MessageButton(){
  const [showMessage, setShowMessage] = useState(false)
  
  return(
    <>
    {showMessage 
      ? ( <h1 data-testid="message"> Botão foi acionado!</h1> ) 
      : null
    }
      <button onClick={()=> setShowMessage(!showMessage)} data-testid="button">
        Clique em mim!
      </button>
    </>
  )
}