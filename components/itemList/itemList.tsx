import items from './items';

export default function ItemList({
    header,
    category
}) {
    return (
        <div>
            <h1>{ header }</h1>
            {items[category].map(({ title }, index) => (
                <div>{ title }</div>
            ))}
        </div> 
    );
}