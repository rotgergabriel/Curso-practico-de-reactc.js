import { useState, useEffect} from 'react';

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState({ mylist:[], trends:[], originals:[] });
    useEffect(()=> {
    fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data))
    }, []);
    return videos;
};

export default useInitialState;


//sin uso, reemplazado por api en index.js