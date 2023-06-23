import React from 'react';

const Mega = () => {
    return (
        <div>
            <h1 style={{fontSize:"35px"}}>Mega</h1>
            <h1 style={{fontSize:"35px"}}>Преимущества:</h1>
            <ul>
                <li>50 Гб свободного места</li>
                <li>Отличное шифрование данных</li>
                <li>   Встроенный антивирусник</li>
            </ul>
            <h1 style={{fontSize:"35px"}}>Недостатки:</h1>
            <ul> <li>Не высокая скорость загрузки/выгрузки файлов</li>
                <li> Мобильное приложение и версия для ПК — для галочки</li>
                <li> Бывают незначительные сбои с загрузкой/выгрузкой информации</li>
            </ul>
        </div>
    );
};

export default Mega;
