import { useState } from "react";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

async function editTodo(data: FormData, id: number) {
  "use server";
  
  const title = data.get("title") as string;

  db.update(todos).set({ title }).where(eq(todos.id, id)).run();

  redirect("/todos");
}

interface EditTodoProps {
  id: number;
  initialText: string | null; 
}

const EditTodo: React.FC<EditTodoProps> = ({ id, initialText }) => {
  const [text, setText] = useState(initialText || "");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await editTodo(formData, id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="title"
        value={text}
        onChange={handleChange}
        className="py-2 px-3 bg-white border border-gray-300 rounded-xl font-semibold font-heading w-full"
      />
      <button
        type="submit"
        className="py-2 px-3 bg-green-400 hover:bg-green-300 transition-colors text-slate-900 rounded-xl font-semibold font-heading w-full mt-2"
      >
        Save
      </button>
    </form>
  );
};

export default EditTodo;
