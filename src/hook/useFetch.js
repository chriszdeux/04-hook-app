import { useEffect, useRef, useState } from "react"

export const useFetch =  ( url ) => {
  const [state, setState] = useState( { data:null, loading:true, error:null } )
  
  const isMounted = useRef(true)
  useEffect(() => {
    
    return () => {
      isMounted.current = false;
    }
  }, [])
  //remember the useEffect to check the changes in the fetch
  useEffect(() => {



    setState({...state, loading:true})
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      

        if(isMounted.current) {
          setState({
            loading:false,
            error:null,
            data:data,
          })
        } else {
          console.log('call cancelled')
        }

    })
    
  }, [url])
  
  return state
}
