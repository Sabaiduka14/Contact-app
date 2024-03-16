import { useState } from "react";
import { addContact } from "../config/firebase";

const Create = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docId = await addContact({ name, number, email });
    console.log(`Book added with ID: ${docId}`);
    setNumber("");
    setEmail("");
    setName("");
  };

  return (
    <main className="w-full h-screen">
      <form
        className="flex flex-col px-4 mt-12 gap-5 w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="p-4 border-2 rounded"
          type="text"
          placeholder="სახელი"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-4 border-2 rounded"
          type="text"
          placeholder="ნომერი"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="p-4 border-2 rounded"
          type="text"
          placeholder="ემაილი"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="font-semibold bg-slate-950 text-white rounded py-4" type="submit">
          დაამატე კონტაქტი
        </button>
      </form>
    </main>
  );
};

export default Create;
