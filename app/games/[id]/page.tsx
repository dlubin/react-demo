'use client';

import Screenshots from '@/components/screenshots/screenshots';
import items from '@/public/items';
import { useParams } from 'next/navigation';

export default function Game() {
    const params = useParams();
    const id = params.id;
    const game = items.games[id];
    return (
      <div className="mx-auto w-full max-w-[1640px] mt-14">
        <h1 className="mb-4">{game.title}</h1>
        <div className="flex flex-nowrap gap-x-4">
          <div className="w-[1080px]">
            <Screenshots screenshots={items.games[id].screenshots}/>
          </div>
          <div>
            Game info
          </div>
        </div>
      </div>
    )
  }
  