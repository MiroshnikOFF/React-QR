import {QRCodeSVG} from 'qrcode.react'
import {useState} from "react";
import styles from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from "../../constants.js";

export default function QrCodeGenerator() {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem( GENERATE_DATA ) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        )

        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('')
    }

    return (
        <div className={styles.container}>

            <input
                type='text'
                value={value}
                placeholder='Введите текст...'
                onChange={onChangeHandler}
                className={styles.input}
            />
            <button
                type='button'
                onClick={onClickHandler}
                className={styles.button}
            >
                Сгенерировать QR
            </button>
            {result !== '' && (
                <div className={styles.qrWrapper}>
                    <QRCodeSVG value={result} size={300}/>
                </div>
            )}

        </div>
    );
}
