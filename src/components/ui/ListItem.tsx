import { useState } from "react";
import Tick from "./Tick";

const ListItem = ({itemName} : {itemName: string}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [animation, setAnimation] = useState<{flag: boolean, name: string}>({flag:false, name: ""});
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleOnClick = () => {
    if(isClicked){
      setAnimation({flag: true, name: "animate-clickBox2"});
    }
    else{
      setAnimation({flag: true, name: "animate-clickBox"});
    }

    setTimeout(() => {
      setAnimation({flag: false, name: ""});
      setIsClicked((prev) => !prev);
    }, 200);
    
  }

  return (
    <li 
    className="h-[42px] w-full py-[8px] pr-[15px] pl-[22px] flex justify-between items-center cursor-pointer"
    onMouseOver={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    onClick={handleOnClick}
    >
        <span className=" text-[#1F2128] text-[14px] font-[400] leading-[130%] tracking-[0px] align-middle"
        >
            {itemName}
        </span>
        <div className="h-[35px] w-[35px]">

        <div
        className={`relative h-[23px] w-[23px] border-[1px]  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[6px] flex justify-center items-center ${animation.flag  ? isClicked ? "animate-clickBox2" : "animate-clickBox" : ""} ${isHover && !isClicked ? "border-[#BDBDBD]": "border-[#EEEEEE]"} ${!isHover ? isClicked ? "bg-[#2469F6]" : "" : isClicked ? "bg-[#5087F8]" : ""}`}     
        >
          <Tick animation={animation.flag} isClicked={isClicked} isHover={isHover}/>
        </div>
    </div>
    </li>
  )
}



export default ListItem


