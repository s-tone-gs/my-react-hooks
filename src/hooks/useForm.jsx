import { useState } from "react";

export const useForm = () => {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(text);
    setText("");
  }
  const canSubmit = text.length > 0;

  return { text, handleChange, handleSubmit, canSubmit };
};
