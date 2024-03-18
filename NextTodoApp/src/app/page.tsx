import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold font-heading text-4xl text-center">
          Todo App
        </h1>
        
      <Link href="/todos" className="py-3 px-6 rounded-xl bg-slate-300 text-slate-900 font-heading font-semibold text-lg hover:bg-slate-100 transition-colors">Get Started</Link>
      </div>
    </>
  );
}
