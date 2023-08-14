import React, {useState, useEffect} from "react";

import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";


const  DataContext = React.createContext({})


function DataContextProvider({children}){

    const [dataResponse, setDataResponse] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        
            const querydb = getFirestore();

            // Header
            const queryCollection = collection(querydb, "perfil");
            const response1 = await getDocs(queryCollection);

            // About Me
            const queryCollection2 = collection(querydb, 'perfil');
            const response2 = await getDocs(queryCollection2 );

            // skills
            const queryCollection3 = doc(querydb, "skills", "4pPJ2DE4EoSUGzUT2Nok");
            const response3 = await getDoc(queryCollection3);
  
            // Projects
            

          const newData = [
            response1.docs[0].data(),
            response2.docs[0].data(),
            response3.data()
          ];
  
          setDataResponse(newData);
          setLoading(false);
        } catch (error) {
          setDataResponse(['Error', 'Error', 'Error']);
          setLoading(false);
        }
      };
      fetchData();
    }, []);



    return(
        <DataContext.Provider value={{dataResponse, loading}}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContextProvider, DataContext }