import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div><h1 style={{ fontSize: 28, fontWeight: 600 }}>Let there be light...</h1></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div >
              <img src={"/IMG_9854.jpeg"} alt={""} className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <div>
              <img src={"/IMG_9855.jpeg"} alt={""} className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
      </main>
    </div>
  );
}
