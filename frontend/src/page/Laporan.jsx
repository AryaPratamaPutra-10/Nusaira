import React, { useState } from 'react';
import { Bell, ChevronDown, Settings, Calendar, ChevronRight } from 'lucide-react';
import Footer from '../componen/Footer';
import Sidebar from '../componen/SideBar';
import AIFloatingButton from '../componen/AiFloatingButton';

const LaporanDashboard = () => {
    const [filter, setFilter] = useState('Semua');
    const [clickedIndex, setClickedIndex] = useState(null); // State untuk melacak ikon yang ditekan

    const laporans = [
        {
            type: 'Laporan Tambak',
            date: '10 Oktober 2024',
            description: 'Berikut merupakan hasil laporan dari tambak lele segar. Hasilnya adalah....',
        },
        {
            type: 'Laporan Tambak',
            date: '11 Oktober 2024',
            description: 'Parameter pH air pada kolam A1 berada di bawah normal, diperlukan tindakan segera...',
        },
        {
            type: 'Laporan Tambak',
            date: '12 Oktober 2024',
            description: 'Hasil panen dari kolam B2 menunjukkan peningkatan, rata-rata berat lele mencapai 1,5 kg.',
        },
        {
            type: 'Laporan Tambak',
            date: '13 Oktober 2024',
            description: 'Kualitas air di kolam C3 stabil, dengan kadar oksigen terlarut berada pada level ideal.',
        },
        {
            type: 'Laporan Tambak',
            date: '14 Oktober 2024',
            description: 'Penyebaran pakan telah dilakukan secara merata, hasil observasi menunjukkan pertumbuhan yang baik.',
        },
        {
            type: 'Laporan Tambak',
            date: '15 Oktober 2024',
            description: 'Ditemukan adanya penyakit pada beberapa ikan di kolam D4, diperlukan tindakan medis segera.',
        },
        {
            type: 'Laporan Tambak',
            date: '16 Oktober 2024',
            description: 'Monitoring harian menunjukkan adanya peningkatan kadar amonia, perlu evaluasi lebih lanjut.',
        },
        {
            type: 'Laporan Tambak',
            date: '17 Oktober 2024',
            description: 'Laporan menyatakan bahwa penggunaan teknologi baru dalam pemberian pakan terbukti efektif.',
        },
        {
            type: 'Laporan Tambak',
            date: '18 Oktober 2024',
            description: 'Kondisi kolam E5 sangat baik, tidak ada tanda-tanda stres pada ikan selama observasi.',
        },
        {
            type: 'Laporan Tambak',
            date: '19 Oktober 2024',
            description: 'Analisis kualitas air menunjukkan kebutuhan untuk mengganti 30% air dalam kolam F6.',
        },
    
    ];

    const filteredLaporans = laporans.filter(laporan =>
        filter === 'Semua' || laporan.type === filter
    );

    const handleIconClick = (index) => {
        // Toggle ikon ketika diklik
        setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white w-full min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-xl font-semibold text-gray-800">Laporan</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-blue-600 font-medium">Informasi Terbaru NusAIra</span>
                            <img
                                src="path/to/indonesian-flag.png"
                                alt="Bendera Indonesia"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <img
                                src="path/to/profile-photo.png"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-300 w-full" />
            </header>

            {/* Filter Section */}
            <div className="mt-4 px-4 ml-4 mr-4">
                <div className="p-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div>
                            <h1 className="text-xl font-medium">Catatan Laporan Tambak Lele Segar</h1>
                            <div className="flex items-center text-gray-600 mt-1">
                                <Calendar size={16} className="mr-2" />
                                <span>10 Oktober 2024</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-8 sm:mt-0">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600">Daftar Laporan:</span>
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="px-4 py-2 border rounded-md bg-white"
                                >
                                    <option value="Semua">Semua</option>
                                    <option value="Laporan Tambak">Laporan Tambak</option>
                                </select>
                            </div>
                            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                                Export Laporan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Laporan Section */}
            <div className="max-h-[600px] overflow-y-auto p-4 ml-6 mr-6">
                {filteredLaporans.map((laporan, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 mb-4"
                    >
                        <div className="w-3 h-3 mt-2 rounded-full bg-blue-500" />
                        <div className="flex flex-col w-1/4">
                            <span className="text-sm font-medium text-blue-600">{laporan.type}</span>
                            <div className="flex items-center text-xs text-gray-500">
                                <Calendar size={12} className="mr-1" />
                                {laporan.date}
                            </div>
                        </div>
                        <div className="flex flex-col w-2/3">
                            <p className="text-sm text-gray-800 mb-1">{laporan.description}</p>
                        </div>
                        <ChevronRight
                            size={24}
                            className={`text-blue-500 cursor-pointer transition-transform duration-300 ${
                                clickedIndex === index ? 'rotate-90' : ''
                            }`}
                            onClick={() => handleIconClick(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

function Laporan() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto flex flex-col">
                <LaporanDashboard />
                <AIFloatingButton />
                <Footer className="mt-10" />
            </div>
        </div>
    );
}

export default Laporan;
