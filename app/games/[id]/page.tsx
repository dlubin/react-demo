'use client';

import items from '@/public/items';
import { useParams } from 'next/navigation';

export default function Game() {
    const params = useParams();
    const id = params.id;
    const game = items.games[id];
    return (
      <div>Game: {game.title}</div>
    )
  }
  