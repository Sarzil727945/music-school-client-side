import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - My Personal Portfolio`;
     }, [title])
};

export default useTitle;