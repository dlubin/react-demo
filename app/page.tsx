import Banner from "./banner";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between align-center pt-14 w-full">
      <div className="w-full max-w-[1640px] mt-14 flex justify-center">
      <Banner />
      </div>
    </main>
  )
}
