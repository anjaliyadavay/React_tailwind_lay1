import "./App.css";
import img1 from './img1.png'; // adjust the path as needed
import img2 from './img2.png'; // adjust the path as needed
import img3 from './img3.png'; // adjust the path as needed
import img4 from './img4.png'; // adjust the path as needed
import img5 from './img5.png'; // adjust the path as needed

function App() {
  return (
    <>
    <h1 className="flex justify-center text-3xl font-bold underline  bg-purple-100">
        First Layour
      </h1>
      <div className=" bg-purple-100">
        <div className="grid grid-cols-2 gap-7 ml-2 mr-2 ">
          <div className="border-0 bg-cyan-800 h-[100vh] rounded-sm overflow-hidden">
            <img src={img1} alt="" className="h-[100vh] w-[100%]"/>
          </div>
          <div className="border-0 grid grid-rows-3 gap-5 rounded-sm">
            <div className="border-0 bg-cyan-600 h-[30vh] rounded-sm overflow-hidden">
            <img src={img2} alt="" className="h-[30vh] w-[100%]"/>
            </div>
            <div className="border-0 h-[30vh]  grid grid-cols-2 gap-7 rounded-sm">
              <div className="border-0 bg-cyan-300 h-[30vh] rounded-sm overflow-hidden">
              <img src={img3} alt="" className="h-[30vh] w-[100%]"/>
              </div>
              <div className="border-0 bg-cyan-200 h-[30vh] rounded-sm overflow-hidden">
              <img src={img4} alt="" className="h-[30vh] w-[100%]" />
              </div>
            </div>
            <div className=" border-0 bg-cyan-400 h-[31vh] rounded-sm overflow-hidden">
            <img src={img5} alt=""  className="h-[31vh] w-[100%]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
