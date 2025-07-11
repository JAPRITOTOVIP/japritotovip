// Data bukti jackpot manual (bisa kamu edit sendiri)
const buktiJackpot = [
  {
    id: 1,
    title: 'SWEET BONANZA 1000',
    amount: 'Rp89.000.000',
    shortDesc: 'Withdraw berhasil dan sudah lunas',
    longDesc: 'Selamat kepada User id : GA*** Telah berhasil mendapatkan kemenangan besar pada permainan SLOT BONANZA 1000 kemenangan Sebesar Rp.89.000.000, Setelah mengisi formulir withdraw dengan kurung waktu hanya 5 – 10 menit pihak  sudah melakukan transfer kepada pemilik Userid dan dana sudah dapat di cairkan oleh pemenang. Bukti pembayaran yang kami berikan merupakan bukti pembayaran yang SAH / VALID yang langung di dapatkan melaui tanda transfer transaksi dari Bank yang di tuju.',
    image: 'images/bukti1.jpg',
  },
  {
    id: 2,
    title: 'MAHJONG WAYS',
    amount: 'Rp90.000.000',
    shortDesc: 'Withdraw berhasil dan sudah lunas',
    longDesc: 'Selamat kepada User id : AN*** Telah berhasil mendapatkan kemenangan besar pada permainan SLOT MAHJONG WAYS kemenangan Sebesar Rp.90.000.000, Setelah mengisi formulir withdraw dengan kurung waktu hanya 5 – 10 menit pihak  sudah melakukan transfer kepada pemilik Userid dan dana sudah dapat di cairkan oleh pemenang. Bukti pembayaran yang kami berikan merupakan bukti pembayaran yang SAH / VALID yang langung di dapatkan melaui tanda transfer transaksi dari Bank yang di tuju.',
    image: 'images/bukti2.jpg',
  },
   {
    id: 3,
    title: 'STARLIGHT PRINCESS 1000',
    amount: 'Rp31.000.000',
    shortDesc: 'Withdraw berhasil dan sudah lunas',
    longDesc: 'Selamat kepada User id : DE*** Telah berhasil mendapatkan kemenangan besar pada permainan SLOT STARLIGHT PRINCESS 1000 kemenangan Sebesar Rp.31.000.000, Setelah mengisi formulir withdraw dengan kurung waktu hanya 5 – 10 menit pihak  sudah melakukan transfer kepada pemilik Userid dan dana sudah dapat di cairkan oleh pemenang. Bukti pembayaran yang kami berikan merupakan bukti pembayaran yang SAH / VALID yang langung di dapatkan melaui tanda transfer transaksi dari Bank yang di tuju.',
    image: 'images/bukti3.jpg',
  },
    {
    id: 4,
    title: 'WISDOM OF ATHENA 1000',
    amount: 'Rp25.000.000',
    shortDesc: 'Withdraw berhasil dan sudah lunas',
    longDesc: 'Selamat kepada User id : BO*** Telah berhasil mendapatkan kemenangan besar pada permainan SLOT WISDOM OF ATHENA 1000 kemenangan Sebesar Rp.25.000.000, Setelah mengisi formulir withdraw dengan kurung waktu hanya 5 – 10 menit pihak  sudah melakukan transfer kepada pemilik Userid dan dana sudah dapat di cairkan oleh pemenang. Bukti pembayaran yang kami berikan merupakan bukti pembayaran yang SAH / VALID yang langung di dapatkan melaui tanda transfer transaksi dari Bank yang di tuju.',
    image: 'images/bukti4.jpg',
  },
    {
    id: 5,
    title: 'GATES OF OLYMPUS 1000',
    amount: 'Rp25.000.000',
    shortDesc: 'Withdraw berhasil dan sudah lunas',
    longDesc: 'Selamat kepada User id : AE*** Telah berhasil mendapatkan kemenangan besar pada permainan SLOT GATES OF OLYMPUS 1000 kemenangan Sebesar Rp.33.000.000, Setelah mengisi formulir withdraw dengan kurung waktu hanya 5 – 10 menit pihak  sudah melakukan transfer kepada pemilik Userid dan dana sudah dapat di cairkan oleh pemenang. Bukti pembayaran yang kami berikan merupakan bukti pembayaran yang SAH / VALID yang langung di dapatkan melaui tanda transfer transaksi dari Bank yang di tuju.',
    image: 'images/bukti5.jpg',
  },
  // Tambahkan data lain di sini sesuai kebutuhanmu
];

// Fungsi render halaman galeri
function renderGallery(page = 1, perPage = 4) {
  const gallery = document.getElementById('gallery');
  const pagination = document.getElementById('pagination');
  if (!gallery || !pagination) return;

  const totalPages = Math.ceil(buktiJackpot.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageItems = buktiJackpot
    .slice()
    .sort((a, b) => b.id - a.id)
    .slice(start, end);

  gallery.innerHTML = '';
  pageItems.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';

    card.addEventListener('click', () => {
      window.location.href = `detail.html?id=${item.id}`;
    });

    card.innerHTML = `
      <img src="${item.image}" alt="Bukti Jackpot ${item.id}" />
      <div class="card-text">
        <h3>${item.title} - ${item.amount}</h3>
        <p>${item.shortDesc}</p>
        <a href="detail.html?id=${item.id}" class="btn-read" onclick="event.stopPropagation()">Read More</a>
      </div>
    `;

    gallery.appendChild(card);
  });

  pagination.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = i;
    a.className = (i === page) ? 'active' : '';
    a.addEventListener('click', e => {
      e.preventDefault();
      renderGallery(i, perPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    pagination.appendChild(a);
  }
}

// Fungsi render detail
function renderDetail() {
  const main = document.getElementById('detail-main');
  if (!main) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  if (!id) {
    main.innerHTML = '<p>Bukti jackpot tidak ditemukan.</p>';
    return;
  }

  const item = buktiJackpot.find(b => b.id === id);
  if (!item) {
    main.innerHTML = '<p>Bukti jackpot tidak ditemukan.</p>';
    return;
  }

  main.innerHTML = `
    <h2>${item.title} - ${item.amount}</h2>
    <img src="${item.image}" alt="Detail Bukti Jackpot ${item.id}" />
    <p>${item.longDesc}</p>
    <a href="index.html" class="btn-back">← Kembali ke Halaman Utama</a>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('gallery')) {
    renderGallery(1, 4);
  }
  if (document.getElementById('detail-main')) {
    renderDetail();
  }
});

// Promo images array (5 gambar)
const promoImages = [
  'PROMO/promo1.jpg',
  'PROMO/promo2.jpg',
  'PROMO/promo3.jpg',
  'PROMO/promo4.jpg',
  'PROMO/promo5.jpg',
];

let promoIndex = 0;
const promoImg = document.getElementById('promo-img');

function startPromoSlider() {
  if (!promoImg) return;
  
  setInterval(() => {
    promoIndex = (promoIndex + 1) % promoImages.length;
    promoImg.style.opacity = 0;

    setTimeout(() => {
      promoImg.src = promoImages[promoIndex];
      promoImg.style.opacity = 1;
    }, 500);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('gallery')) {
    renderGallery(1, 4);
  }
  if (document.getElementById('detail-main')) {
    renderDetail();
  }
  startPromoSlider();
});
