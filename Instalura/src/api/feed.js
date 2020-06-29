import {Platform} from "react-native";


const readPhotos = async (callback) => {
  let url = "10.0.2.2";
  if(Platform.OS == "ios"){
    url = "localhost";
  }  
  
  
    const photosHTTP = await fetch(`http://${url}:3030/feed`);
    const photosJson = await photosHTTP.json();
    callback(photosJson);
  }

export default readPhotos;