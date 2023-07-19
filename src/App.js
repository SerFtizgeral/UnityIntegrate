//import logo from './logo.svg';
import './App.css';
import  Unity, { UnityContext } from "react-unity-webgl";

  const unityContext = new UnityContext({
    loaderUrl: "./Game/Build/Game.loader.js",
    dataUrl:   "./Game/build/Game.data",
    frameworkUrl: "./Game/build/Game.framework.js",
    codeUrl: "./Game/build/Game.wasm",
  });
    
    function App() {
    return(
        <div className= "App">
          <Unity 
           unityContext={unityContext} 
           style={{
               width: "600px",
               height: "400px",
               border: "2px solid black",
               background: "green",
           }}
         />
          </div>
    );

}

export default App;
