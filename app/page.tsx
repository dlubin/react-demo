import ItemList from "../components/itemList";
import Banner from "./banner";

export default function Home() {
  return (
      <div className="mx-auto w-full max-w-[1640px] mt-14 flex flex-col align-center gap-y-4">
        <div className="flex justify-center pb-4 justify-self-center">
          <Banner />
        </div>
        <ItemList header="New Releases" category="new" />
        <ItemList header="On Sale" category="discounted" />
      </div>
  )
}
