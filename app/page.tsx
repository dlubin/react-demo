import Header from "@/components/header";
import ItemList from "../components/itemList";
import Banner from "./banner";

export default function Home() {
  return (
    <section>
      <Header />
      <main className="min-h-screen pt-14 w-full text-slate-400">
        <div className="mx-auto w-full max-w-[1640px] mt-14 flex flex-col align-center gap-y-4">
          <div className="flex justify-center pb-4 justify-self-center">
            <Banner />
          </div>
          <ItemList header="New Releases" category="new" />
          <ItemList header="On Sale" category="discounted" />
        </div>
      </main>
    </section>
  );
}
