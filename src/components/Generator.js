import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import $ from "jquery";

export default function Generator() {
  const [length, setLength] = useState(5);
  const [password, setPassword] = useState("Password Here");

  const handleLength = (event, newLength) => {
    setLength(newLength);
  };

  const passwordCopy = () => {
    if (password !== "Password Here") {
      toast("Password Copied");
      navigator.clipboard.writeText(password);
    } else toast("Please Password Generate");
  };

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let randomstring = "";
    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * chars.length);
      setPassword((randomstring += chars.substring(num, num + 1)));
    }
     if(length >= 20) {
      $( ".generateInp" ).css( "font-size", "17px" );
    }
     else {
      $( ".generateInp" ).css( "font-size", "20px" );
    }
  };

  return (
    <>
      <div className="box">
        <h1 className="title">Password Generator</h1>
        <div className="main">
          <input className="generateInp" title={password} value={password} disabled />
          <button title="Copy" className="copy" onClick={passwordCopy}>
            <FontAwesomeIcon icon={faClipboard} />
          </button>
          <div className="customize">
            <label htmlFor="">Length : </label>
            <Slider
              value={length}
              valueLabelDisplay="auto"
              min={5}
              step={1}
              max={36}
              onChange={handleLength}
            />
          </div>
          <button title="Generate Password" onClick={generatePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}
