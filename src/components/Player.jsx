import { useState } from "react";
export default function Player({ initName, symbol, isActive, onNameChanged }) {
  const [name, setName] = useState(initName)
  const [isEditing, setIsEditing] = useState(false);

  const editBtnClick = () => {
    // recommend not to do this when update state by it previous value
    // this is not guarantee to update instantly
    //setIsEditing(!isEditing);
    // below is the code that React will always get the latest value of isEditing
    setIsEditing((editing) => {
      return !editing
    })
    if(isEditing){
      onNameChanged(symbol, name)
    }
  }

  const handleInputChanged = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <span className="player">
          {!isEditing && <span className="player-name">{name}</span>}
          {/* 2 way binding */}
          {isEditing && <input value={name} onChange={handleInputChanged} />}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editBtnClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  )
}