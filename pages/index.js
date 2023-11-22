import { useState } from 'react'

function Header({title}) {
    return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
    const names = ['Name 1', 'Name 2', 'Name 3'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Test" />
            <ul>
                {names.map((name) => (
                    <li key={name}>
                        {name}
                    </li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    )
}
