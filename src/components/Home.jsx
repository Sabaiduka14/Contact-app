import { useEffect, useState } from "react";
import { deleteContact, getData, updateContact } from "../config/firebase";

export default function Home() {
  const [contactData, setContactData] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedNumber, setUpdatedNumber] = useState("");

  const fetchData = async () => {
    const data = await getData();
    setContactData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, e) => {
    e.preventDefault();
    const result = await deleteContact(id);
    console.log(`Deleted ${result}`);
    fetchData();
  };

  const handleUpdate = async (id, e) => {
    e.preventDefault()
    const updatedData = {
      name: updatedName,
      email: updatedEmail,
      number: updatedNumber,
    };
    const result = await updateContact(id, updatedData);
    console.log(`Updated ${result}`);
    fetchData();
    setEditingContactId(null);
  };

  const handleEdit = (contactId, name, email, number) => {
    setEditingContactId(contactId);
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedNumber(number);
  };

  return (
    <main className="container mx-auto py-4">
      <div className="grid gap-4 px-4">
        {contactData.map((contact) => (
          <div className="bg-gray-100 rounded-lg p-4" key={contact.id}>
            {editingContactId === contact.id ? (
              <form className="flex flex-col px-4 mt-12 gap-5 w-full">
                <input
                  type="text"
                  className="p-4 border-2 rounded"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
                <input
                  className="p-4 border-2 rounded"
                  type="text"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="p-4 border-2 rounded"
                  value={updatedNumber}
                  onChange={(e) => setUpdatedNumber(e.target.value)}
                />
                <button className="bg-slate-950 text-white py-4 font-semobold rounded mb-4" onClick={() => handleUpdate(contact.id)}>განახლება</button>
              </form>
            ) : (
              <div>
                <h1 className="text-lg font-semibold mb-2">
                  სახელი: {contact.data().name}
                </h1>
                <p className="text-sm text-gray-600 mb-2">
                  ემაილი: {contact.data().email}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  ნომერი: {contact.data().number}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    წაშლა
                  </button>
                  <button
                    onClick={() =>
                      handleEdit(
                        contact.id,
                        contact.data().name,
                        contact.data().email,
                        contact.data().number
                      )
                    }
                    className="bg-slate-500 text-white px-4 py-2 rounded"
                  >
                    განახლება
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
