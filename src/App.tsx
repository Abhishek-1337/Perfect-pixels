import ListItem from "./components/ui/ListItem";

const listItems = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

function App() {

  return (
    <>
      <div
       style={{ boxShadow: "0 8px 15px rgba(20, 20, 20, 0.12), 0 0 4px rgba(20, 20, 20, 0.12)" }} 
      className="absolute bg-[#ffffff] w-[370px] h-[326px] border-[1px] border-[#EEEEEE] rounded-[6px] py-[10px] top-[50%] left-[50%] trasnsform -translate-x-[50%] -translate-y-[50%] font-[montserrat] text-[14px]"
      >
          <ListItem itemName="All pages"/>
          <div className="h-[20px] w-[370px] px-[15px] py-[10px] flex items-center">
              <div className="w-[340px] border-[0.7px] border-[#CDCDCD] text-center"></div>
          </div>
          <ul className="h-[164px] w-full overflow-y-scroll no-scrollbar">
            {
              listItems.map((listItem) => {
                return (
                  <ListItem itemName={listItem}/>
                );
              })
            }
          </ul>
          <div className="h-[20px] w-[370px] px-[15px] py-[10px] flex items-center">
              <div className="w-[340px] border-[0.7px] border-[#CDCDCD] text-center"></div>
          </div>
          <div className="w-full h-[60x] px-[15px] py-[10px]">
            <button 
            className="w-[340px] h-[40px] cursor-pointer rounded-[4px] px-[20px] py-[10px] bg-[#FFCE22] align-middle active:bg-[#FFCE22] hover:bg-[#FFD84D]"
            >
              Done
            </button>
          </div>
      </div>
    </>
  )
}

export default App
