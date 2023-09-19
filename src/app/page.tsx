
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const createTodo = async (data: FormData) => {
  "use server";
  redirect("https://tailwindcss.com/docs/backdrop-blur", RedirectType.push);
};

export default function Home() {
  return (
    <div className="flex items-center justify-center my-60 ">
      <div className=" backdrop-blur-xl border rounded border-slate-950 p-6 w-max">
        <header className=" text-black flex justify-center items-center mb-4">
          <h1 className="text-3xl font-bold">Login</h1>
        </header>
        <form action={createTodo} className="flex items-center gap-3 flex-col">
          <div className="w-80 flex flex-col gap-3">
            <input
              placeholder="Tên đăng nhập..."
              type="text"
              name="title"
              className=" placeholder-slate-950 border border-slate-950 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            />
            <input
              placeholder="Mật khẩu"
              type="text"
              name="title"
              className="placeholder-slate-950 border border-slate-950 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
            />
          </div>
          <button
            type="submit"
            className=" bg-gradient-to-r from-pink-500 to-yellow-500 border rounded border-slate-300 hover:border-slate-950 p-2"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
