import React from 'react';
import style from './HomeCard.module.css';

function HomeCard() {
    return (
        <div className={style.homeCard}>
            <pre>
                1&nbsp;&nbsp;const <b>Person</b> {'= () => {'}
            </pre>
            <pre>
                2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [name, setName] =
                useState('')
            </pre>
            <pre>
                3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [trait , setTrait ] =
                useState('')
            </pre>
            <pre>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return (</pre>
            <pre>
                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setName("
                <strong>Kousik Manna</strong>");
            </pre>
            <pre>
                6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setTrait("
                <strong>WEB DEVELOPER</strong>");
            </pre>
            <pre>8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</pre>
            <pre>9&nbsp;&nbsp;{'}'}</pre>
        </div>
    );
}

export default HomeCard;
