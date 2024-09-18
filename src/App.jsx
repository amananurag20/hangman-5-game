import Button from "./components/Button/Button"


const App = () => {
  return (
    <div className="">App
    <Button text="play game" onClickHandler={()=>{alert("game started")}}/>
    <Button text="End game" onClickHandler={()=>{
      console.log("end game")
    }} styleType={"primary"}/>

<Button text="End game" styleType={"error"}/>

<Button text="End game" styleType={"warning"}/>
<Button text="End game" styleType={"success"}/>
<Button text="End game" styleType={"secondary"}/>
    </div>
  )
}

export default App