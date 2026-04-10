// ==========================================
// 1. DATA CHARM (JSON)
// ==========================================
const charmsData = 
    // --- KATEGORI: ALLOY ---
[
    // BANGLE
    { "sku": "alloy-clover-bangle", "category": "Alloy", "name": "Alloy-Clover Bangle", "url": "Gambar/Alloy/Alloy-Clover Bangle.png" },
    { "sku": "alloy-planet-bangle", "category": "Alloy", "name": "Alloy-Planet Bangle", "url": "Gambar/Alloy/Alloy-planet Bangle.png" },

    // BOW
    { "sku": "alloy-gold-bow", "category": "Alloy", "name": "Alloy-Gold Bow", "url": "Gambar/Alloy/Alloy-gold bow.png" },
    { "sku": "alloy-pink-bow", "category": "Alloy", "name": "Alloy-Pink Bow", "url": "Gambar/Alloy/Alloy-pink bow.png" },
    { "sku": "alloy-red-bow", "category": "Alloy", "name": "Alloy-Red Bow", "url": "Gambar/Alloy/Alloy-red bow.png" },
    { "sku": "alloy-silver-bow", "category": "Alloy", "name": "Alloy-Silver Bow", "url": "Gambar/Alloy/Alloy-silver bow.png" },
    { "sku": "alloy-white-bow", "category": "Alloy", "name": "Alloy-White Bow", "url": "Gambar/Alloy/Alloy-white  bow.png" },

    // CHERRY
    { "sku": "alloy-pink-cherry", "category": "Alloy", "name": "Alloy-Pink Cherry", "url": "Gambar/Alloy/Alloy-pink cherry.png" },
    { "sku": "alloy-red-cherry", "category": "Alloy", "name": "Alloy-Red Cherry", "url": "Gambar/Alloy/Alloy-red cherry.png" },

    // CHROME
    { "sku": "alloy-gold-chromehearts", "category": "Alloy", "name": "Alloy-Gold Chromehearts", "url": "Gambar/Alloy/Alloy-gold chromehearts.png" },
    { "sku": "alloy-silver-chromeheart", "category": "Alloy", "name": "Alloy-Silver Chromeheart", "url": "Gambar/Alloy/Alloy-silver chromeheart.png" },
    { "sku": "alloy-winter-chrome", "category": "Alloy", "name": "Alloy-Winter Chrome", "url": "Gambar/Alloy/Alloy-winter chrome.png" },

    // DIAMOND
    { "sku": "alloy-diamond-black", "category": "Alloy", "name": "Alloy-Diamond Black", "url": "Gambar/Alloy/Alloy-Diamond black.png" },
    { "sku": "alloy-diamond-blue", "category": "Alloy", "name": "Alloy-Diamond Blue", "url": "Gambar/Alloy/Alloy-Diamond blue.png" },
    { "sku": "alloy-red-diamond", "category": "Alloy", "name": "Alloy-Red Diamond", "url": "Gambar/Alloy/Alloy-Red diamond.png" },

    // DRIP
    { "sku": "alloy-black-drip", "category": "Alloy", "name": "Alloy-Black Drip", "url": "Gambar/Alloy/Alloy-black drip.png" },
    { "sku": "alloy-red-drip", "category": "Alloy", "name": "Alloy-Red Drip", "url": "Gambar/Alloy/Alloy-red drip.png" },

    // HEART & LOVE
    { "sku": "alloy-bullet-heart", "category": "Alloy", "name": "Alloy-Bullet Heart", "url": "Gambar/Alloy/Alloy-bullet heart.png" },
    { "sku": "alloy-dotted-heart", "category": "Alloy", "name": "Alloy-Dotted Heart", "url": "Gambar/Alloy/Alloy-dotted heart.png" },
    { "sku": "alloy-love-comet", "category": "Alloy", "name": "Alloy-Love Comet", "url": "Gambar/Alloy/Alloy-Love Comet.png" },
    { "sku": "alloy-red-heart", "category": "Alloy", "name": "Alloy-Red Heart", "url": "Gambar/Alloy/Alloy-red heart.png" },

    // MELTED
    { "sku": "alloy-melted-gold", "category": "Alloy", "name": "Alloy-Melted Gold", "url": "Gambar/Alloy/Alloy-melted gold.png" },
    { "sku": "alloy-melted-rosegold", "category": "Alloy", "name": "Alloy-Melted Rosegold", "url": "Gambar/Alloy/Alloy-melted rosegold.png" },
    { "sku": "alloy-melted-silver", "category": "Alloy", "name": "Alloy-Melted Silver", "url": "Gambar/Alloy/Alloy-melted silver.png" },

    // PLANET
    { "sku": "alloy-planet-gold", "category": "Alloy", "name": "Alloy-Planet Gold", "url": "Gambar/Alloy/Alloy-planet gold.png" },
    { "sku": "alloy-planet-silver", "category": "Alloy", "name": "Alloy-Planet Silver", "url": "Gambar/Alloy/Alloy-planet silver.png" },

    // SKULL
    { "sku": "alloy-black-skull", "category": "Alloy", "name": "Alloy-Black Skull", "url": "Gambar/Alloy/Alloy-black skull.png" },
    { "sku": "alloy-red-skull", "category": "Alloy", "name": "Alloy-Red Skull", "url": "Gambar/Alloy/Alloy-red skull.png" },

    // MISC / LAINNYA
    { "sku": "alloy-circle-pink", "category": "Alloy", "name": "Alloy-Circle Pink", "url": "Gambar/Alloy/Alloy-Circle pink.png" },
    { "sku": "alloy-iron-crest", "category": "Alloy", "name": "Alloy-Iron Crest", "url": "Gambar/Alloy/Alloy-iron crest.png" },
    { "sku": "alloy-pink-frame", "category": "Alloy", "name": "Alloy-Pink Frame", "url": "Gambar/Alloy/Alloy-Pink frame.png" },
    { "sku": "alloy-rose-oval", "category": "Alloy", "name": "Alloy-Rose Oval", "url": "Gambar/Alloy/Alloy-rose oval.png" },
    { "sku": "alloy-shield", "category": "Alloy", "name": "Alloy-Shield", "url": "Gambar/Alloy/Alloy-shield.png" },
    { "sku": "alloy-spider", "category": "Alloy", "name": "Alloy-Spider", "url": "Gambar/Alloy/Alloy-Spider.png" },
    { "sku": "alloy-star-cowboy", "category": "Alloy", "name": "Alloy-Star Cowboy", "url": "Gambar/Alloy/Alloy-Star Cowboy.png" },
    { "sku": "alloy-warrior", "category": "Alloy", "name": "Alloy-Warrior", "url": "Gambar/Alloy/Alloy-warrior.png" },
    

    // --- KATEGORI: PREMIUM (PRE) ---
    { "sku": "Premium-BMW", "category": "Premium", "name": "BMW", "url": "Gambar/Premium/pre-BMW.png" },
     {"sku": "Premium-Pink BMW", "category": "Premium", "name": "BMW", "url": "Gambar/Premium/pre-pink BMW.png" },
    

    // --- KATEGORI: RESIN ---
    // RABBIT
    { "sku": "resin-pink-rabbit", "category": "Resin", "name": "Resin-Pink Rabbit", "url": "Gambar/Resin/Resin-pink rabbit.png" },
    { "sku": "resin-white-rabbit", "category": "Resin", "name": "Resin-White Rabbit", "url": "Gambar/Resin/Resin-white rabbit.png" },
   { "sku": "resin-bebek", "category": "Resin", "name": "Resin-bebek", "url": "Gambar/Resin/Resin-bebek.png" }, 
   { "sku": "resin-cloud", "category": "Resin", "name": "Resin-Cloud", "url": "Gambar/Resin/Resin-Cloud.png" },
   { "sku": "resin-kaonashi", "category": "Resin", "name": "Resin-kaonashi", "url": "Gambar/Resin/Resin-kaonashi.png" }, 
   { "sku": "resin-paw-blackpink", "category": "Resin", "name": "Resin-paw blackpink", "url": "Gambar/Resin/Resin-paw blackpink.png" }, 
   { "sku": "resin-paw-pink-transparant", "category": "Resin", "name": "Resin-paw pink-transparant", "url": "Gambar/Resin/Resin-paw pink-transparant.png" }, 
   { "sku": "resin-paw-white-transparan", "category": "Resin", "name": "Resin-paw white transparan", "url": "Gambar/Resin/Resin-paw white transparan.png" }, 
   { "sku": "resin-penguin", "category": "Resin", "name": "Resin-penguin", "url": "Gambar/Resin/Resin-penguin.png" },

    { "sku": "resin-blackrose", "category": "Resin", "name": "Resin-Blackrose", "url": "Gambar/Resin/Resin-blackrose.png" },
    { "sku": "resin-blue-rose", "category": "Resin", "name": "Resin-Blue Rose", "url": "Gambar/Resin/Resin-blue rose.png" },
    { "sku": "resin-gold-rose", "category": "Resin", "name": "Resin-Gold Rose", "url": "Gambar/Resin/Resin-gold rose.png" },
    { "sku": "resin-pink-rose", "category": "Resin", "name": "Resin-Pink Rose", "url": "Gambar/Resin/Resin-Pink Rose.png" },
    { "sku": "resin-purple-rose", "category": "Resin", "name": "Resin-Purple Rose", "url": "Gambar/Resin/Resin-purple rose.png" },
    { "sku": "resin-red-rose", "category": "Resin", "name": "Resin-Red Rose", "url": "Gambar/Resin/Resin-red rose.png" },
    { "sku": "resin-white-rose", "category": "Resin", "name": "Resin-White Rose", "url": "Gambar/Resin/Resin-White Rose.png" },

    // TURTLE
    { "sku": "resin-blue-turtle", "category": "Resin", "name": "Resin-Blue Turtle", "url": "Gambar/Resin/Resin-blue turtle.png" },
    { "sku": "resin-pink-turtle", "category": "Resin", "name": "Resin-Pink Turtle", "url": "Gambar/Resin/Resin-pink turtle.png" },

    // MISC / LAINNYA
    { "sku": "resin-mermaid-love", "category": "Resin", "name": "Resin-Mermaid Love", "url": "Gambar/Resin/Resin-Mermaid love.png" },
    { "sku": "resin-shell", "category": "Resin", "name": "Resin-Shell", "url": "Gambar/Resin/Resin-shell.png" },
    { "sku": "resin-telur", "category": "Resin", "name": "Resin-Telur", "url": "Gambar/Resin/Resin-telur.png" },
    { "sku": "resin-watermelon-resin", "category": "Resin", "name": "Resin-Watermelon Resin", "url": "Gambar/Resin/Resin-Watermelon resin.png" },
    // --- KATEGORI: POLOS ---
    { "sku": "polos-base-gold", "category": "Polos", "name": "Polos-Base Gold", "url": "Gambar/Polos/Polos-base gold.png" },
    { "sku": "polos-base-heart", "category": "Polos", "name": "Polos-Base Heart", "url": "Gambar/Polos/Polos-base heart.png" },
    { "sku": "polos-base-nike", "category": "Polos", "name": "Polos-Base Nike", "url": "Gambar/Polos/Polos-base nike.png" },
    { "sku": "polos-base-puma", "category": "Polos", "name": "Polos-Base Puma", "url": "Gambar/Polos/Polos-base puma.png" },
    { "sku": "polos-base-star", "category": "Polos", "name": "Polos-Base Star", "url": "Gambar/Polos/Polos-base star.png" },
    { "sku": "polos-base-sun", "category": "Polos", "name": "Polos-Base Sun", "url": "Gambar/Polos/Polos-base sun.png" },
    { "sku": "polos-base-yin-yang", "category": "Polos", "name": "Polos-Base Yin Yang", "url": "Gambar/Polos/Polos-base yin yang.png" },
    { "sku": "polos-black-base", "category": "Polos", "name": "Polos-Black Base", "url": "Gambar/Polos/Polos-black base.png" },
    { "sku": "polos-blue-base", "category": "Polos", "name": "Polos-Blue Base", "url": "Gambar/Polos/Polos-blue base.png" },
    { "sku": "polos-double-love", "category": "Polos", "name": "Polos-Double Love", "url": "Gambar/Polos/Polos-Double love.png" },
    { "sku": "polos-paw-polos-gold", "category": "Polos", "name": "Polos-Paw Polos Gold", "url": "Gambar/Polos/Polos-paw polos gold.png" },
    { "sku": "polos-paw-polos-silver", "category": "Polos", "name": "Polos-Paw Polos Silver", "url": "Gambar/Polos/Polos-paw polos silver.png" },
    { "sku": "polos-pink-base", "category": "Polos", "name": "Polos-Pink Base", "url": "Gambar/Polos/Polos-pink base.png" },
    { "sku": "polos-purple-base", "category": "Polos", "name": "Polos-Purple Base", "url": "Gambar/Polos/Polos-purple base.png" },
    { "sku": "polos-red-base", "category": "Polos", "name": "Polos-Red Base", "url": "Gambar/Polos/Polos-red base.png" },

    // --- KATEGORI: ENAMEL ---
    { "sku": "enamel-black-butterfly", "category": "Enamel", "name": "Enamel-Black Butterfly", "url": "Gambar/Enamel/Enamel-Black Butterfly.png" },
    { "sku": "enamel-blue-butterfly", "category": "Enamel", "name": "Enamel-Blue Butterfly", "url": "Gambar/Enamel/Enamel-Blue Butterfly.png" },
    { "sku": "enamel-pink-butterfly", "category": "Enamel", "name": "Enamel-Pink Butterfly", "url": "Gambar/Enamel/Enamel-Pink Butterfly.png" },
    { "sku": "enamel-purple-butterfly", "category": "Enamel", "name": "Enamel-Purple Butterfly", "url": "Gambar/Enamel/Enamel-purple butterfly.png" },
    { "sku": "enamel-red-butterfly", "category": "Enamel", "name": "Enamel-Red Butterfly", "url": "Gambar/Enamel/Enamel-red Butterfly.png" },
    { "sku": "enamel-white-butterfly", "category": "Enamel", "name": "Enamel-White Butterfly", "url": "Gambar/Enamel/Enamel-white Butterfly.png" },
    { "sku": "enamel-black-cat", "category": "Enamel", "name": "Enamel-Black Cat", "url": "Gambar/Enamel/Enamel-black cat.png" },
    { "sku": "enamel-white-cat", "category": "Enamel", "name": "Enamel-White Cat", "url": "Gambar/Enamel/Enamel-White Cat.png" },
    { "sku": "enamel-black-cleef", "category": "Enamel", "name": "Enamel-Black Cleef", "url": "Gambar/Enamel/Enamel-Black Cleef.png" },
    { "sku": "enamel-malachite-cleef", "category": "Enamel", "name": "Enamel-Malachite Cleef", "url": "Gambar/Enamel/Enamel-Malachite Cleef.png" },
    { "sku": "enamel-pearl-cleef", "category": "Enamel", "name": "Enamel-Pearl Cleef", "url": "Gambar/Enamel/Enamel-Pearl Cleef.png" },
    { "sku": "enamel-pink-cleef", "category": "Enamel", "name": "Enamel-Pink Cleef", "url": "Gambar/Enamel/Enamel-Pink Cleef.png" },
    { "sku": "enamel-red-cleef", "category": "Enamel", "name": "Enamel-Red Cleef", "url": "Gambar/Enamel/Enamel-red Cleef.png" },
    { "sku": "enamel-b-w-clover", "category": "Enamel", "name": "Enamel-B&W Clover", "url": "Gambar/Enamel/Enamel-B&W Clover.png" },
    { "sku": "enamel-black-clover", "category": "Enamel", "name": "Enamel-Black Clover", "url": "Gambar/Enamel/Enamel-Black Clover.png" },
    { "sku": "enamel-blue-comb-clover", "category": "Enamel", "name": "Enamel-Blue Comb Clover", "url": "Gambar/Enamel/Enamel-Blue Comb Clover.png" },
    { "sku": "enamel-green-clover", "category": "Enamel", "name": "Enamel-Green Clover", "url": "Gambar/Enamel/Enamel-Green Clover.png" },
    { "sku": "enamel-navy-clover", "category": "Enamel", "name": "Enamel-Navy Clover", "url": "Gambar/Enamel/Enamel-Navy Clover.png" },
    { "sku": "enamel-pink-clover", "category": "Enamel", "name": "Enamel-Pink Clover", "url": "Gambar/Enamel/Enamel-Pink Clover.png" },
    { "sku": "enamel-red-clover", "category": "Enamel", "name": "Enamel-Red Clover", "url": "Gambar/Enamel/Enamel-Red Clover.png" },
    { "sku": "enamel-black-dove", "category": "Enamel", "name": "Enamel-Black Dove", "url": "Gambar/Enamel/Enamel-Black Dove.png" },
    { "sku": "enamel-blue-dove", "category": "Enamel", "name": "Enamel-Blue Dove", "url": "Gambar/Enamel/Enamel-Blue Dove.png" },
    { "sku": "enamel-pink-dove", "category": "Enamel", "name": "Enamel-Pink Dove", "url": "Gambar/Enamel/Enamel-Pink Dove.png" },
    { "sku": "enamel-white-dove", "category": "Enamel", "name": "Enamel-White Dove", "url": "Gambar/Enamel/Enamel-White Dove.png" },
    { "sku": "enamel-black-sakura", "category": "Enamel", "name": "Enamel-Black Sakura", "url": "Gambar/Enamel/Enamel-black sakura.png" },
    { "sku": "enamel-daisy-white", "category": "Enamel", "name": "Enamel-Daisy White", "url": "Gambar/Enamel/Enamel-daisy white.png" },
    { "sku": "enamel-pink-sakura", "category": "Enamel", "name": "Enamel-Pink Sakura", "url": "Gambar/Enamel/Enamel-Pink sakura.png" },
    { "sku": "enamel-red-sakura", "category": "Enamel", "name": "Enamel-Red Sakura", "url": "Gambar/Enamel/Enamel-red sakura.png" },
    { "sku": "enamel-white-sakura", "category": "Enamel", "name": "Enamel-White Sakura", "url": "Gambar/Enamel/Enamel-white sakura.png" },
    { "sku": "enamel-black-hati", "category": "Enamel", "name": "Enamel-Black Hati", "url": "Gambar/Enamel/Enamel-black hati.png" },
    { "sku": "enamel-black-heart-gradient", "category": "Enamel", "name": "Enamel-Black Heart Gradient", "url": "Gambar/Enamel/Enamel-Black Heart Gradient.png" },
    { "sku": "enamel-blue-heart-gradient", "category": "Enamel", "name": "Enamel-Blue Heart Gradient", "url": "Gambar/Enamel/Enamel-Blue Heart Gradient.png" },
    { "sku": "enamel-hijau-hati", "category": "Enamel", "name": "Enamel-Hijau Hati", "url": "Gambar/Enamel/Enamel-hijau hati.png" },
    { "sku": "enamel-merah-hati", "category": "Enamel", "name": "Enamel-Merah Hati", "url": "Gambar/Enamel/Enamel-merah hati.png" },
    { "sku": "enamel-pink-hati", "category": "Enamel", "name": "Enamel-Pink Hati", "url": "Gambar/Enamel/Enamel-pink hati.png" },
    { "sku": "enamel-pink-heart-gradient", "category": "Enamel", "name": "Enamel-Pink Heart Gradient", "url": "Gambar/Enamel/Enamel-Pink Heart Gradient.png" },
    { "sku": "enamel-purple-heart-grad", "category": "Enamel", "name": "Enamel-Purple Heart Grad", "url": "Gambar/Enamel/Enamel-purple heart grad.png" },
    { "sku": "enamel-ungu-hati", "category": "Enamel", "name": "Enamel-Ungu Hati", "url": "Gambar/Enamel/Enamel-ungu hati.png" },
    { "sku": "enamel-white-heart-gradient", "category": "Enamel", "name": "Enamel-White Heart Gradient", "url": "Gambar/Enamel/Enamel-White Heart Gradient.png" },
    { "sku": "enamel-pink-lips", "category": "Enamel", "name": "Enamel-Pink Lips", "url": "Gambar/Enamel/Enamel-Pink Lips.png" },
    { "sku": "enamel-red-lips", "category": "Enamel", "name": "Enamel-Red Lips", "url": "Gambar/Enamel/Enamel-Red Lips.png" },
    { "sku": "enamel-baby-blue-star", "category": "Enamel", "name": "Enamel-Baby Blue Star", "url": "Gambar/Enamel/Enamel-baby blue star.png" },
    { "sku": "enamel-black-star", "category": "Enamel", "name": "Enamel-Black Star", "url": "Gambar/Enamel/Enamel-black star.png" },
    { "sku": "enamel-blue-star", "category": "Enamel", "name": "Enamel-Blue Star", "url": "Gambar/Enamel/Enamel-blue star.png" },
    { "sku": "enamel-pink-star", "category": "Enamel", "name": "Enamel-Pink Star", "url": "Gambar/Enamel/Enamel-pink star.png" },
    { "sku": "enamel-purple-star", "category": "Enamel", "name": "Enamel-Purple Star", "url": "Gambar/Enamel/Enamel-purple star.png" },
    { "sku": "enamel-red-star", "category": "Enamel", "name": "Enamel-Red Star", "url": "Gambar/Enamel/Enamel-red star.png" },
    { "sku": "enamel-white-star", "category": "Enamel", "name": "Enamel-White Star", "url": "Gambar/Enamel/Enamel-white star.png" },
    { "sku": "enamel-yellow-star", "category": "Enamel", "name": "Enamel-Yellow Star", "url": "Gambar/Enamel/Enamel-yellow star.png" },
    { "sku": "enamel-blue-cloud", "category": "Enamel", "name": "Enamel-Blue Cloud", "url": "Gambar/Enamel/Enamel-blue cloud.png" },
    { "sku": "enamel-cupcake", "category": "Enamel", "name": "Enamel-Cupcake", "url": "Gambar/Enamel/Enamel-Cupcake.png" },
    { "sku": "enamel-kaktus", "category": "Enamel", "name": "Enamel-Kaktus", "url": "Gambar/Enamel/Enamel-kaktus.png" },
    { "sku": "enamel-watermelon-enamel", "category": "Enamel", "name": "Enamel-Watermelon Enamel", "url": "Gambar/Enamel/Enamel-watermelon enamel.png" },
]


// ==========================================
// 2. KONFIGURASI GOOGLE SHEETS & GLOBAL VARS
// ==========================================
const GOOGLE_SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI4FGzObf_dGbWu_CghjujDy2ct8HQ6ECg3p8mVW_Xb85eDjaVIP0PWKZH-ZRNRO6dIrE-fWu7Xk7u/pub?output=csv";

window.globalStockStatus = {}; 
let currentCategory = 'All';
window.customCharmsData = window.customCharmsData || [];

// ==========================================
// 3. LOGIKA FILTER, SEARCH, & RENDERING
// ==========================================

// Fungsi Membaca Data Stok Google Sheets (Jalan 1x)
async function loadStockData() {
    const container = document.getElementById('charmOptions');
    if (!container) return;
    container.innerHTML = '<p style="font-weight: normal; color: #800000; font-size: 15px; font-family: \'Garamond\', serif;">Memuat charm...</p>';

    const normalizeText = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

    try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        const csvText = await response.text();
        const rows = csvText.split(/\r?\n/);
        
        for (let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); 
            if (columns.length >= 2) {
                const rawName = columns[0].replace(/^"|"$/g, '');
                const cleanKey = normalizeText(rawName); 
                const stokStr = columns[1].replace(/^"|"$/g, '').trim().toLowerCase(); 
                
                let isHabis = false;
                let stokAngka = parseInt(stokStr, 10);
                if (!isNaN(stokAngka)) {
                    isHabis = (stokAngka <= 0); 
                } else {
                    isHabis = (stokStr === "0" || stokStr === "false" || stokStr === "habis");
                }
                window.globalStockStatus[cleanKey] = !isHabis; 
            }
        }
    } catch (error) {
        console.error("Gagal terhubung ke Google Sheets:", error);
    }

    applyFilters(); 
}

// Fungsi Ubah Kategori lewat Tombol Kapsul
function setCategory(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    applyFilters();
}

// Fungsi Filter Utama (Search Bar + Kategori + Render Gambar)
function applyFilters() {
    const container = document.getElementById('charmOptions');
    if (!container) return;
    container.innerHTML = ''; 

    const searchInputEl = document.getElementById('searchInput');
    const searchQuery = searchInputEl ? searchInputEl.value.toLowerCase().trim() : '';
    const normalizeText = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const allCharms = [...window.customCharmsData, ...charmsData];

    allCharms.forEach((charm) => {
        const matchCategory = (currentCategory === 'All' || charm.category === currentCategory);
        const charmNameLower = charm.name.toLowerCase();
        const matchSearch = charmNameLower.includes(searchQuery);

        if (matchCategory && matchSearch) {
            const wrapper = document.createElement('div');
            wrapper.className = 'charm-wrapper';

            const img = document.createElement('img');
            img.src = charm.url;
            img.alt = charm.name;
            img.title = charm.name; 
            img.dataset.sku = charm.sku;
            img.dataset.category = charm.category;
            img.dataset.name = charm.name; 
            
            const cleanSku = normalizeText(charm.sku);
            const cleanName = normalizeText(charm.name);
            
            let isOutOfStock = false;
            if (window.globalStockStatus.hasOwnProperty(cleanSku)) {
                isOutOfStock = (window.globalStockStatus[cleanSku] === false);
            } else if (window.globalStockStatus.hasOwnProperty(cleanName)) {
                isOutOfStock = (window.globalStockStatus[cleanName] === false);
            }

            window.globalStockStatus[charm.sku] = !isOutOfStock;

            img.className = 'charm-item'; 
            if (isOutOfStock) { img.title = `${charm.name} (STOK HABIS)`; }
            if (charm.filter) {
                img.style.filter = charm.filter;
            }
            
            img.onclick = function() { 
                if (typeof selectCharm === 'function') { selectCharm(this); }
            };
            
            wrapper.appendChild(img);

            const nameLabel = document.createElement('div');
            nameLabel.className = 'charm-name-label';
            nameLabel.style.fontFamily = "'Garamond', 'Georgia', serif";
            nameLabel.style.fontWeight = "normal";
            nameLabel.innerText = charm.label || charm.name;
            wrapper.appendChild(nameLabel);

            container.appendChild(wrapper);
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = `<p style="color: var(--maroon); font-family: 'Garamond', serif; font-style: italic;">charm"${searchQuery}" belum ditemukan.</p>`;
    }
}

// ==========================================
// 4. LOGIKA CATATAN PESANAN
// ==========================================

function getSummarySequence() {
    // Pastikan variabel braceletSlotsData sudah ada di HTML utama kamu
    if (typeof braceletSlotsData === 'undefined' || !braceletSlotsData || braceletSlotsData.length === 0) return "";

    let summary = [];
    let currentCount = 1;

    for (let i = 0; i < braceletSlotsData.length; i++) {
        let currentCharm = braceletSlotsData[i];
        let currentName = (currentCharm && currentCharm.sku !== 'default') ? currentCharm.name : "base polos";

        let nextCharm = (i + 1 < braceletSlotsData.length) ? braceletSlotsData[i + 1] : null;
        let nextName = (nextCharm && nextCharm.sku !== 'default') ? nextCharm.name : (i + 1 < braceletSlotsData.length ? "base polos" : null);

        if (currentName === nextName) {
            currentCount++;
        } else {
            let displayName = (currentCount > 1 || currentName === "base polos") 
                ? `${currentCount} ${currentName}` 
                : currentName;
            
            summary.push(displayName);
            currentCount = 1; 
        }
    }
    return summary.join(" + ");
}

function updateOrderNote() {
    const noteContainer = document.getElementById('orderNoteText');
    if (!noteContainer) return;

    const wristSizeEl = document.getElementById('wristSize');
    const wristSize = wristSizeEl ? wristSizeEl.value : "15";
    
    // Pastikan braceletSlotsData dikenali
    const totalSlots = (typeof braceletSlotsData !== 'undefined') ? braceletSlotsData.length : parseInt(wristSize) + 2; 
    const hasCustomCharm = (typeof braceletSlotsData !== 'undefined') ? braceletSlotsData.some(charm => charm !== null && charm.sku !== 'default') : false;

    if (!hasCustomCharm) {
        noteContainer.innerHTML = "<span style='color:#999;'>Pilih dan susun minimal 1 charm terlebih dahulu...</span>";
    } else {
        const sequence = getSummarySequence();
        noteContainer.innerText = `Halo kak, minta disusunkan ya: ${wristSize}cm, total ${totalSlots} charm, susunan ${sequence}`;
    }
}

function copyOrderNote() {
    const noteText = document.getElementById('orderNoteText').innerText;
    
    if (noteText.includes("minimal 1 charm terlebih dahulu") || noteText.trim() === "") {
        alert("Pilih charm terlebih dahulu di gelangmu sebelum menyalin catatan!");
        return;
    }

    navigator.clipboard.writeText(noteText).then(() => {
        alert("Catatan berhasil disalin! Silakan tempel di catatan pemesanan Shopee.");
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        alert("Yah, gagal menyalin otomatis. Silakan blok teksnya dan salin secara manual ya.");
    });
}

// ==========================================
// 5. INISIALISASI SAAT HALAMAN DIMUAT
// ==========================================

window.onload = function() {
    // 1. Render Gelang Kosong (fungsi ini ada di HTML)
    if (typeof updateBracelet === 'function') {
        updateBracelet(); 
    }
    
    // 2. Load Data Google Sheets & Tampilkan Charm
    loadStockData();

    // 3. Override updateCart agar order note juga otomatis ikut terupdate tiap kali cart diupdate
    if (typeof window.updateCart === 'function') {
        const originalUpdateCart = window.updateCart;
        window.updateCart = function() {
            originalUpdateCart(); 
            updateOrderNote();    
        };
    }
    
    // 4. Inisialisasi awal catatan
    updateOrderNote(); 
};
