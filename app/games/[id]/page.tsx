'use client';

import Screenshots from '@/components/screenshots/screenshots';
import items from '@/public/items';
import { useParams } from 'next/navigation';
import Keyboard from '@/public/icons/keyboard.svg';
import Controller from '@/public/icons/controller.svg';
import { formatDate } from '@/util/helpers';

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
          <section className="flex flex-col flex-nowrap items-center gap-y-8">
            <div className="bg-gray-950 rounded-lg p-8 h-max">
              <div className="border-b border-slate-400 pb-4">
                {game.description}
              </div>
              <div className="flex flex-nowrap gap-x-4 text-slate-400 fill-slate-400 my-4">
                { game.controller && (
                  <Controller width="48" height="48" />
                )}
                <Keyboard width="48" height="48" />
              </div>
              {
                game.release && (
                  <div>
                    Released: { formatDate(game.release) }
                  </div>
                )
              }
              {
                game.developer && (
                  <div>
                    Developer: { game.developer}
                  </div>
                )
              }
              {
                game.publisher && (
                  <div>
                    Publisher: { game.publisher}
                  </div>
                )
              }
            </div>
            <button className="w-fit rounded bg-gray-950 border border-slate-400 px-8 py-4 text-xl">
                Add to cart
            </button>
          </section>
        </div>
      </div>
    )
  }
  