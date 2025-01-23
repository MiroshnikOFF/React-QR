import {Scanner} from '@yudiel/react-qr-scanner'
import {useState} from "react";
import styles from './qrCodeScanner.module.css'
import {SCAN_DATA} from "../../constants.js"


export default function QrCodeScanner() {

    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };
    const sittings = {
        audio: true,
        finder: false
    };

    return (
        <div className={styles.container}>
            <Scanner
                allowMultiple={false}
                onScan={scanHandler}
                components={sittings}
                styles={{
                    container: {width: 350}
                }}
            />
            <div className={styles.result}>
                <p>{scanned}</p>
                {scanned && <a href={scanned}>Перейти</a>}
            </div>
        </div>
    );
}