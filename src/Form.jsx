import { useForm } from "./hooks/useForm.jsx";

export function Form() {
  const { text, handleChange, handleSubmit, canSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} />
      <input type="submit" value="送信" disabled={!canSubmit} />
    </form>
  );
}
