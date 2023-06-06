import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - Music School`;
     }, [title])
};

export default useTitle;