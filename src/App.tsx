import Navbar from "./components/nav-bar";
import { Button } from "./components/ui/button"

const App = ()=>{
  return (
    <div className="h-screen w-screen text-black">
     <Navbar/>
     <div className="text-black underline">Home</div>
    </div>
  )
}
export default App;