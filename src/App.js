import './App.css';
import imageInSrc from "./imageInSrc.jpg";
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Usky drops his new music video "Sang Chaud" feat. Le motif</h1>
      <br/>
      <img src={imageInSrc} className="image" alt='imageInSrc'/>
      <br />
      <img src="/imageInPublic.jpg" className="image" alt="imageInPublic"/>
    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/z_V0VRdWTfY" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe> <br/>
    <video width={320} height={240} controls>
      <source src="https://youtu.be/z_V0VRdWTfY" type="video/mp4" />
    </video>
    </div>
  );
}

export default App;
