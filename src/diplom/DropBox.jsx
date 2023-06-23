import React from 'react';

const DropBox = () => {
    return (
        <div>
            <h1 style={{fontSize:"35px"}}>DropBox</h1>
            <h1 style={{fontSize:"35px"}}>Преимущества:</h1>
            <ul>
                <li>  простой интерфейс</li>
                <li>   удобное управление закаченными файлами</li>
                <li>   освобождение жесткого диска, карт памяти смартфонов</li>
                <li>прямая ссылка для скачивания файлов</li>
            </ul>
            <h1 style={{fontSize:"35px"}}>Недостатки:</h1>
            <ul> <li>отсутствие шифрования данных</li>
                <li> отсутствие встроенных редакторов файлов в системе</li>
            </ul>
        </div>
    );
};

export default DropBox;
