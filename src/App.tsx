import ChatInDetail from "./components/ChatInDetail";
import Chats from "./components/Chats";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-2/5 mt-2">
          <div className="flex">
            <Sidebar />
            <div className="flex-1 mr-3">
              <input
                type="text"
                placeholder="  search"
                className="w-full h-9 rounded-full bg-gray-200"
              />
            </div>
          </div>
          <div>
            <Chats />
          </div>
        </div>
        <div className="w-3/5">
          <ChatInDetail />
        </div>
      </div>
    </>
  );
}

export default App;
