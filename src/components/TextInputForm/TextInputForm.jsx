import { useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const TextInputForm = () => {
  const [wordText, setWordText] = useState("");
  const [hintText, setHintText] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleWordChange = (event) => {
    setWordText(event.target.value);
    console.log(wordText);
  };

  const handleHintChange = (event) => {
    setHintText(event.target.value);
    console.log(hintText);
  };

  const handleSubmit = (event) => {
    console.log("submitting")
    event.preventDefault();
  };

  const handleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          placeholder="Enter a Word or phrase...."
          label={"Enter a Word or phrase"}
          onChangeHandler={handleWordChange}
          type={inputType}
        />
      </div>
      <div>
        <TextField
          placeholder="Hint...."
          label={"Enter Game Hint...."}
          onChangeHandler={handleHintChange}
        />
      </div>

      <div>
        <Button styleType={"warning"} onClickHandler={handleInputType} type={"button"}>
          {inputType==="password"? "Show":"Hide"}
        </Button>

        <Button styleType={"primary"}>Submit</Button>
      </div>
    </form>
  );
};

export default TextInputForm;
