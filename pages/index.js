
import Sidebar from "../Components/Sidebar"

export default function Home() {
  return (
    <div className= "bg-black h-screen overflow-hidden">
     <main className= "">
      <Sidebar />
       {/*center*/}
     </main>
     <div>{/*player*/}</div>
    </div>
  );
}


