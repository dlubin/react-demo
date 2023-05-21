import items from './items';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemList({
    header,
    category
}) {
    return (
        <div>
            <h1>{ header }</h1>
            {items[category].length > 0 && (
                <div className="flex gap-x-8">
                    {items[category].map(({ title, path, id }, index) => (
                        <Link href={`/games/${id}`} className="no-underline text-slate-400 hover:text-slate-500 transition-colors transition-ease-in">
                            <div>
                                <Image
                                    src={path}
                                    alt={title}
                                    width={180}
                                    height={240}
                                    priority
                                /> 
                                { title }
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div> 
    );
}