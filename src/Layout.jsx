import { Routes, Route } from 'react-router-dom'
import QrCodeGenerator from "./components/Generate/QrCodeGenerator.jsx";
import QrCodeScanner from "./components/Scan/QrCodeScanner.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import GenerateHistory from "./components/GenerateHistory.jsx";
import ScanHistory from "./components/ScanHistory.jsx";


export default function Layout() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/generate' element={<QrCodeGenerator />} />
                <Route path='/scan' element={<QrCodeScanner />} />
                <Route path='/generateHistory' element={<GenerateHistory />} />
                <Route path='/scanHistory' element={<ScanHistory />} />
            </Routes>

        </div>
    );
}
