'use client';

import Screenshots from '@/components/screenshots/screenshots';
import items from '@/public/items';
import { useParams } from 'next/navigation';
import Keyboard from '@/public/icons/keyboard.svg';
import Controller from '@/public/icons/controller.svg';

export default function Game() {
    const params = useParams();
    const id = params.id;
    const game = items.games[id];
    return (
      <div className="mx-auto w-full max-w-[1640px] mt-14">
        <h1 className="mb-4">{game.title}</h1>
        <div className="flex flex-nowrap gap-x-4">
          <div className="min-w-[1080px]">
            <Screenshots screenshots={items.games[id].screenshots}/>
          </div>
          <div className="bg-gray-950 rounded-lg p-8 h-max">
            {game.description}
            <div className="flex flex-nowrap gap-x-4 text-slate-400 fill-slate-400 my-4">
              { game.controller && (
                <Controller width="48" height="48" />
              )}
              <Keyboard width="48" height="48" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  