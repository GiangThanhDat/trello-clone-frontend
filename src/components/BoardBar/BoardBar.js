import GrowingInput from "components/GrowingInput/GrowingInput"
import TrelloButton from "components/TrelloButton/TrelloButton"
import TrelloDropdown from "components/TrelloDropdown/TrelloDropdown"
import { IconContext } from "react-icons"
import { AiFillThunderbolt, AiOutlineUserAdd } from "react-icons/ai"
import { BiRocket } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { FiChevronDown, FiUsers } from "react-icons/fi"
import { HiViewBoards } from "react-icons/hi"
import { IoFilterSharp } from "react-icons/io5"
import { TiStarOutline } from "react-icons/ti"
import { ICON_SIZE } from "utilities/constants"
import "./BoardBar.scss"

const boardNameInputStyle = { fontSize: 18, fontWeight: "bold", height: 32 }

const BoardBar = () => {
  return (
    <nav className="navbar-board">
      <IconContext.Provider
        value={{
          className: "navbar-board-btn-item--icon-start",
          size: ICON_SIZE,
        }}
      >
        <div className="navbar-board-container--left">
          <div className="navbar-board-btn-item board-name">
            <GrowingInput style={boardNameInputStyle} />
          </div>
          <TrelloButton
            className="navbar-board-btn-item only-icon "
            type={"brighter"}
          >
            <TiStarOutline
              size={2}
              className="navbar-board-btn-item--icon-start star-icon"
            />
          </TrelloButton>
          <span className="navbar-board-btn-divider" />
          <TrelloDropdown
            header={"Recent boards"}
            dropDownContent={() => <div>Workspace visible content</div>}
          >
            <TrelloButton
              // id={RECENT}
              // onClick={handleClickFeature}
              // className={`app-bar-btn-item ${isActive(RECENT)}`}
              className="navbar-board-btn-item "
              type="brighter"
            >
              <FiUsers />
              Workspace visible
              <FiChevronDown />
            </TrelloButton>
          </TrelloDropdown>
          {/* <TrelloButton className="navbar-board-btn-item btn-without-icon">
              Trello Workspace
            </TrelloButton> */}
          <span className="navbar-board-btn-divider" />
          <TrelloButton className="navbar-board-btn-item " type={"brighter"}>
            <HiViewBoards />
            Board
            <FiChevronDown className="navbar-board-btn-item--icon-end" />
          </TrelloButton>
        </div>
        <div className="navbar-board-container--right">
          <TrelloButton className="navbar-board-btn-item " type={"brighter"}>
            <AiFillThunderbolt />
            Automation
          </TrelloButton>
          <TrelloButton className="navbar-board-btn-item " type={"brighter"}>
            <BiRocket />
            Power-Ups
          </TrelloButton>
          <span className="navbar-board-btn-divider" />
          <TrelloButton className="navbar-board-btn-item " type={"brighter"}>
            <IoFilterSharp />
            Filter
          </TrelloButton>
          <span className="navbar-board-btn-divider" />
          <img
            className="user-avatar"
            src={require("assets/images/user-avatar.png")}
          />
          <TrelloButton
            className="navbar-board-btn-item btn-share "
            type={"brighter"}
          >
            <AiOutlineUserAdd />
            Share
          </TrelloButton>
          <span className="navbar-board-btn-divider" />
          <TrelloButton
            className="navbar-board-btn-item  only-icon "
            type={"brighter"}
          >
            <BsThreeDots />
            {/* Show Menu */}
          </TrelloButton>
        </div>
      </IconContext.Provider>
    </nav>
  )
}

export default BoardBar
