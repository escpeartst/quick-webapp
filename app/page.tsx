import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div><h1 style={{ fontSize: 28, fontWeight: 600 }}>Let there be light...</h1></div>
          <div style={{ display: 'flex'}}>
            <div style={{ marginRight: '12px'}}>
              <Image src={"/IMG_9854.jpeg"} alt={""} width={"600"} height={"800"}
              />
            </div>
            <div>
              <Image src={"/IMG_9855.jpeg"} alt={""} width={"600"} height={"800"}
              />
            </div>
          </div>
      </main>
    </div>
  );
}
