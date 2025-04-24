
// Konstanta untuk Generasi
const GENERATION_RANGES = {
    BABY: { min: 0, max: 2, label: "generasi bayi" },
    CHILD: { min: 2, max: 10, label: "generasi anak-anak" },
    TEEN: { min: 10, max: 18, label: "generasi remaja" },
    ADULT: { min: 18, max: 30, label: "generasi dewasa" },
    ELDER: { min: 30, max: Infinity, label: "generasi tua" }
};

// Data Biodata
const biodata = {
    name: "NOEL",
    age: 100,
    element: document.getElementById('biodata')
};

// Data tentang Noel Raja Terakhir
const noelData = {
    // Informasi Dasar
    title: "Noel Raja Terakhir",
    description: "Anak Ajaib dari Ujung Bumi",
    author: "Bungkus",
    
    // Detail Karya
    details: {
        genre: "NYEPIN DAN MODE MIRING",
        theme: "ROUTINITY",
        targetAudience: "LINGKUP SELURUH",
        releaseYear: 1976
    },
    
    // Fitur Utama
    features: [
        {
            id: 1,
            title: "Kisah Inspiratif",
            description: "BET 50K AUTO 20X",
            icon: "📚"
        },
        {
            id: 2,
            title: "Pengalaman Nyata",
            description: "BUY 2,5 and boom 250k",
            icon: "🌟"
        },
        {
            id: 3,
            title: "Pelajaran Hidup",
            description: "NAIK BET SIAL",
            icon: "💡"
        }
    ],
    
    // Media Sosial
    socialMedia: {
        instagram: {
            username: "septiandwiantaraa",
            url: "https://instagram.com/septiandwiantaraa",
            icon: "📸"
        }
    },
    
    // Kontak
    contact: {
        email: "bungkus@example.com",
        whatsapp: "081240811967"
    }
};

// Fungsi Utilitas
const utils = {
    // Menentukan generasi berdasarkan usia
    determineGeneration: (age) => {
        for (const [key, range] of Object.entries(GENERATION_RANGES)) {
            if (age >= range.min && age < range.max) {
                return range.label;
            }
        }
        return "generasi tidak diketahui";
    },

    // Validasi data
    validateData: (data, requiredFields) => {
        const missingFields = requiredFields.filter(field => !data[field]);
        if (missingFields.length > 0) {
            console.warn(`Data yang diperlukan tidak lengkap: ${missingFields.join(', ')}`);
            return false;
        }
        return true;
    }
};

// Fungsi untuk Biodata
const biodataFunctions = {
    // Generate biodata
    generate: () => {
        const generation = utils.determineGeneration(biodata.age);
        if (biodata.element) {
            biodata.element.innerHTML = generation;
        }
        return generation;
    },

    // Update biodata
    update: (newAge) => {
        biodata.age = newAge;
        return biodataFunctions.generate();
    }
};

// Fungsi untuk Noel Data
const noelFunctions = {
    // Mendapatkan semua data
    getAll: () => ({ ...noelData }),

    // Mendapatkan fitur berdasarkan ID
    getFeatureById: (id) => {
        return noelData.features.find(feature => feature.id === id);
    },

    // Mendapatkan semua fitur
    getAllFeatures: () => [...noelData.features],

    // Mendapatkan informasi kontak
    getContactInfo: () => ({ ...noelData.contact }),

    // Mendapatkan link media sosial
    getSocialLinks: () => ({ ...noelData.socialMedia })
};

// Inisialisasi
const init = () => {
    // Validasi data Noel
    utils.validateData(noelData, ['title', 'description', 'author']);
    
    // Generate biodata awal
    biodataFunctions.generate();
    
    // Log data
    console.log('Biodata:', biodata);
    console.log('Noel Data:', noelFunctions.getAll());
};

// Export fungsi dan data
export {
    biodataFunctions,
    noelFunctions,
    utils
};

// Jalankan inisialisasi
init();
