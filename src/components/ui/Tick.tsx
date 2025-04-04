const Tick = ({animation, isClicked, isHover}: {animation: boolean, isClicked: boolean, isHover: boolean}) => {

  console.log(false);
  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={!isHover && !isClicked? {display: "none"} : {display: "block"}}>
        <path d="M0.68 6.59199L6.22879 11.5271C6.24925 11.5453 6.28055 11.5437 6.29899 11.5235L16.32 0.519989" stroke={animation ? isClicked ? "#FFFFFF" : "#878787" : isClicked ? "#FFFFFF" : "#E3E3E3"} stroke-linecap="round"/>
    </svg>
  )
}

export default Tick

