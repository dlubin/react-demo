// ItemList - displays store items linked to their pages

import items from "../public/items";
import Image from "next/image";
import Link from "next/link";

export default function ItemList({ header, category }) {
  return (
    <div>
      <h1>{header}</h1>
      {items[category].length > 0 && (
        <div className="flex gap-x-8">
          {items[category].map((id, index) => (
            <Link
              key={index}
              href='/games/[id]' as={`/games/${id}`}
              className="no-underline text-slate-400 hover:text-slate-500 transition-colors transition-ease-in"
              prefetch={false}
            >
              <div>
                <Image
                  src={items.games[id].path}
                  alt={items.games[id].title}
                  width={180}
                  height={240}
                  priority
                />
                {items.games[id].title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
