import items from "@/public/items";
import Game from '@/components/game';

// Because this will be rendered as static content, we must tell Next.js what pages to render
export async function generateStaticParams() {
  const ids = Object.keys(items.games);
  return ids.map((id) => ({
    id,
  }));
}

export default function GamePage({ params }) {
  const { id } = params;
  const game = items.games[id];

  if (!game) return null;

  return (
    <Game game={game} id={id}></Game>
  );
}
