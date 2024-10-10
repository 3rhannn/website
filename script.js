document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuClose = document.querySelector('.menu-close');
    const menuLinks = document.querySelectorAll('nav ul li a');
    const body = document.body;
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenClose = document.querySelector('.close-fullscreen');
    const fullscreenContent = document.querySelector('.fullscreen-overlay .content');

    // Toggle side menu
    menuToggle.addEventListener('click', function() {
        sideMenu.classList.toggle('hidden');
        body.classList.toggle('menu-open');
    });

    // Close side menu
    menuClose.addEventListener('click', function() {
        sideMenu.classList.add('hidden');
        body.classList.remove('menu-open');
    });

    // Load content based on menu selection
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('data-page');
            loadPage(targetPage);
        });
    });

    // Close fullscreen overlay
    fullscreenClose.addEventListener('click', function() {
        fullscreenOverlay.classList.remove('active');
    });

    // Function to load content
    function loadPage(page) {
        const content = document.getElementById('content');
        content.innerHTML = ''; // Clear existing content

        if (page === 'Beranda') {
            content.innerHTML = `
                
                <div class="page-section">
                    <h2>Selamat datang di 3rhMount</h2>
                    <p>Klik titik 3 di pojok kanan atas untuk memilih salah satu menu untuk melihat informasi tentang gunung-gunung di Jawa Tengah.</p>
                </div>
                 <div class="page-section">
                    <h2>Gunung di Kabupaten Wonosobo</h2>
                    <h3>Gunung-gunung di Wonosobo</h3>
                    <p>Berikut adalah beberapa gunung terkenal di Kabupaten Wonosobo:</p>
                    <div>
                        <h4>Gunung Sindoro</h4>
                        
                         <img src="foto/sindoro.jpg" alt="Gunung sindoro"width="300px"height="600px">

                        <p>Gunung Sindoro adalah salah satu gunung berapi di Wonosobo dengan pemandangan yang spektakuler. Terletak di ketinggian 3.136 meter, gunung ini menjadi tujuan favorit bagi pendaki.</p>
                    </div>
                    <div>
                        <h4>Gunung Sumbing</h4>
                        <img src="foto/sumbing.jpeg" alt="Gunung Sumbing"width="300px"height="600px">

                        <p>Dengan ketinggian 3.371 meter, Gunung Sumbing adalah salah satu gunung tertinggi di Jawa Tengah. Pendakian ke puncak memberikan panorama luar biasa.</p>
                    </div>
                    <div>
                        <h4>Gunung Prau</h4>
                        <img src="foto/prau.webp" alt="Gunung Prau" width="300px"height="600px"> 
                        <p>Gunung Prau menawarkan jalur pendakian yang relatif mudah dengan pemandangan yang menakjubkan. Ketinggiannya mencapai 2.565 meter.</p>
                    </div>
                      <div>
                        <h4>Gunung Bismo</h4>
                        <img src="foto/bismo.jpg" alt="Gunung Bismo" width="300px"height="600px"> 
                        <p>Gunung Bismo atau Gunung Bisma adalah sebuah gunung yang berada di Kabupaten Wonosobo, Provinsi Jawa Tengah. Gunung Bisma masih berada di Pegunungan Komplek Gunung Api Dieng. Secara Administrasi, Gunung Bisma terletak di Kabupaten Wonosobo. tepatnya di perbatasan Desa Campursari dengan Desa Sikunang, Kecamatan Kejajar, Kabupaten Wonosobo, Provinsi Jawa Tengah. Gunung Bisma memiliki ketinggian 2.365 meter di atas permukaan air laut Mdpl. Gunung Bisma merupakan bekas gunung api dengan kawah tua yang terpotong membuka kearah tenggara. Lembah yang dulunya merupakan pusat kubah lava gunung Bisma, kini menjadi desa Sikunang yang ada di jalur alternatif menuju Dataran Tinggi Dieng (jalur Sembungan).</p>
                    </div>
                      <div>
                        <h4>Gunung Pakuwaja</h4>
                        <img src="foto/Pakuwaja.jpeg" alt="Gunung Pakuwaja" width="300px"height="600px"> 
                        <p>Gunung Pakuwaja di Wonosobo memiliki ketinggian 2.421 meter di atas permukaan laut (mdpl). Gunung ini merupakan titik tertinggi di Dieng. 
Gunung Pakuwaja terletak di samping Gunung Prau dan mencakup tiga desa di Kecamatan Kejajar, Wonosobo, yaitu Sembungan, Parikesit, dan Tieng. Basecamp terpopulernya berada di Parikesit.
Waktu tempuh pendakian Gunung Pakuwaja berkisar 1,5 sampai 3 jam, tergantung kondisi fisik pendaki. 
</p>
                    </div>
                      <div>
                        <h4>Gunung Kembang</h4>
                        <img src="foto/kembang.jpeg" alt="Gunung Kembang" width="300px"height="600px"> 
                        <p>Gunung Kembang di Wonosobo memiliki ketinggian 2.340 meter di atas permukaan laut (mdpl). Gunung ini dianggap sebagai salah satu gunung yang memiliki tingkat kesulitan menengah, namun menawarkan pemandangan yang mengesankan.
Gunung Kembang berada di bawah Gunung Sindoro dan aktivitas magma di Gunung Sindoro meluap ke Gunung Kembang sehingga membuat gunung ini bertambah tinggi. Beberapa dekade lalu, Gunung Kembang hanya memiliki ketinggian 1.200 mdpl. 
</p>
                    </div>
                </div>
                <div class="page-section">
                    <h2>Gunung di Kabupaten Magelang</h2>
                    <h3>Gunung-gunung di Magelang</h3>
                    <p>Berikut adalah beberapa gunung terkenal di Kabupaten Magelang:</p>
                    <div>
                        <h4>Gunung Andong</h4>
                        <img src="foto/andong.jpeg" alt="Gunung Andong" width="300px"height="600px">

                        <p>Gunung bertipe perisai yang terletak di antara Desa Ngablak dan Tlogorjo, Grabag, Kabupaten Magelang. Gunung ini memiliki aktivitas magma vulkanik aktif. Waktu tempuh menuju puncaknya kurang dari tiga jam, sehingga cocok untuk pendaki pemula.</p>
                    </div>
                    <div>
                        <h4>Gunung Telomoyo</h4>
                        <img src="foto/telomoyo.jpeg" alt="Gunung Telomoyo" width="300px"height="600px">

                        <p>Gunung yang terletak di Desa Pandean, Kecamatan Ngablak, Kabupaten Magelang. Gunung ini berada di perbatasan Kabupaten Semarang dan Kabupaten Magelang. Di Gunung Telomoyo terdapat destinasi wisata Awang-awang Sky View, yaitu gardu pandang yang dilengkapi tempat untuk bersantai.</p>
                    </div>
                    <div>
                        <h4>Gunung Merbabu</h4>
                        <img src="foto/merabu.jpeg" alt="Gunung Merbabu"width="300px"height="600px">

                        <p>Gunung Merbabu adalah gunung berapi yang menawarkan jalur pendakian yang memukau. Dengan ketinggian 3.145 meter, gunung ini adalah tujuan populer di kalangan pendaki.</p>
                    </div>
                </div>

            `;
        } else if (page === 'Gunung di Kabupaten Wonosobo') {
            content.innerHTML = `
                <div class="page-section">
                    <h2>Gunung di Kabupaten Wonosobo</h2>
                    <h3>Gunung-gunung di Wonosobo</h3>
                    <p>Berikut adalah beberapa gunung terkenal di Kabupaten Wonosobo:</p>
                    <div>
                        <h4>Gunung Sindoro</h4>
                        
                         <img src="foto/sindoro.jpg" alt="Gunung sindoro"width="300px"height="600px">

                        <p>Gunung Sindoro adalah salah satu gunung berapi di Wonosobo dengan pemandangan yang spektakuler. Terletak di ketinggian 3.136 meter, gunung ini menjadi tujuan favorit bagi pendaki.</p>
                    </div>
                    <div>
                        <h4>Gunung Sumbing</h4>
                        <img src="foto/sumbing.jpeg" alt="Gunung Sumbing"width="300px"height="600px">

                        <p>Dengan ketinggian 3.371 meter, Gunung Sumbing adalah salah satu gunung tertinggi di Jawa Tengah. Pendakian ke puncak memberikan panorama luar biasa.</p>
                    </div>
                    <div>
                        <h4>Gunung Prau</h4>
                        <img src="foto/prau.webp" alt="Gunung Prau" width="300px"height="600px"> 
                        <p>Gunung Prau menawarkan jalur pendakian yang relatif mudah dengan pemandangan yang menakjubkan. Ketinggiannya mencapai 2.565 meter.</p>
                    </div>
                      <div>
                        <h4>Gunung Bismo</h4>
                        <img src="foto/bismo.jpg" alt="Gunung Bismo" width="300px"height="600px"> 
                        <p>Gunung Bismo atau Gunung Bisma adalah sebuah gunung yang berada di Kabupaten Wonosobo, Provinsi Jawa Tengah. Gunung Bisma masih berada di Pegunungan Komplek Gunung Api Dieng. Secara Administrasi, Gunung Bisma terletak di Kabupaten Wonosobo. tepatnya di perbatasan Desa Campursari dengan Desa Sikunang, Kecamatan Kejajar, Kabupaten Wonosobo, Provinsi Jawa Tengah. Gunung Bisma memiliki ketinggian 2.365 meter di atas permukaan air laut Mdpl. Gunung Bisma merupakan bekas gunung api dengan kawah tua yang terpotong membuka kearah tenggara. Lembah yang dulunya merupakan pusat kubah lava gunung Bisma, kini menjadi desa Sikunang yang ada di jalur alternatif menuju Dataran Tinggi Dieng (jalur Sembungan).</p>
                    </div>
                      <div>
                        <h4>Gunung Pakuwaja</h4>
                        <img src="foto/Pakuwaja.jpeg" alt="Gunung Pakuwaja" width="300px"height="600px"> 
                        <p>Gunung Pakuwaja di Wonosobo memiliki ketinggian 2.421 meter di atas permukaan laut (mdpl). Gunung ini merupakan titik tertinggi di Dieng. 
Gunung Pakuwaja terletak di samping Gunung Prau dan mencakup tiga desa di Kecamatan Kejajar, Wonosobo, yaitu Sembungan, Parikesit, dan Tieng. Basecamp terpopulernya berada di Parikesit.
Waktu tempuh pendakian Gunung Pakuwaja berkisar 1,5 sampai 3 jam, tergantung kondisi fisik pendaki. 
</p>
                    </div>
                      <div>
                        <h4>Gunung Kembang</h4>
                        <img src="foto/kembang.jpeg" alt="Gunung Kembang" width="300px"height="600px"> 
                        <p>Gunung Kembang di Wonosobo memiliki ketinggian 2.340 meter di atas permukaan laut (mdpl). Gunung ini dianggap sebagai salah satu gunung yang memiliki tingkat kesulitan menengah, namun menawarkan pemandangan yang mengesankan.
Gunung Kembang berada di bawah Gunung Sindoro dan aktivitas magma di Gunung Sindoro meluap ke Gunung Kembang sehingga membuat gunung ini bertambah tinggi. Beberapa dekade lalu, Gunung Kembang hanya memiliki ketinggian 1.200 mdpl. 
</p>
                    </div>
                </div>
            `;
        } else if (page === 'Gunung di Kabupaten Magelang') {
            content.innerHTML = `
                <div class="page-section">
                    <h2>Gunung di Kabupaten Magelang</h2>
                    <h3>Gunung-gunung di Magelang</h3>
                    <p>Berikut adalah beberapa gunung terkenal di Kabupaten Magelang:</p>
                    <div>
                        <h4>Gunung Andong</h4>
                        <img src="foto/andong.jpeg" alt="Gunung Andong" width="300px"height="600px">

                        <p>Gunung bertipe perisai yang terletak di antara Desa Ngablak dan Tlogorjo, Grabag, Kabupaten Magelang. Gunung ini memiliki aktivitas magma vulkanik aktif. Waktu tempuh menuju puncaknya kurang dari tiga jam, sehingga cocok untuk pendaki pemula.</p>
                    </div>
                    <div>
                        <h4>Gunung Telomoyo</h4>
                        <img src="foto/telomoyo.jpeg" alt="Gunung Telomoyo" width="300px"height="600px">

                        <p>Gunung yang terletak di Desa Pandean, Kecamatan Ngablak, Kabupaten Magelang. Gunung ini berada di perbatasan Kabupaten Semarang dan Kabupaten Magelang. Di Gunung Telomoyo terdapat destinasi wisata Awang-awang Sky View, yaitu gardu pandang yang dilengkapi tempat untuk bersantai.</p>
                    </div>
                    <div>
                        <h4>Gunung Merbabu</h4>
                        <img src="foto/merabu.jpeg" alt="Gunung Merbabu"width="300px"height="600px">

                        <p>Gunung Merbabu adalah gunung berapi yang menawarkan jalur pendakian yang memukau. Dengan ketinggian 3.145 meter, gunung ini adalah tujuan populer di kalangan pendaki.</p>
                    </div>
                </div>
            `;
        }
        document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault();  // Mencegah reload halaman saat form disubmit
        
            // Mengambil nilai dari input form
            var username = document.getElementById('username').value;
            var comment = document.getElementById('comment').value;
        
            // Membuat elemen baru untuk menampilkan komentar
            var newComment = document.createElement('div');
            newComment.classList.add('comment-box');
            newComment.innerHTML = "<p><strong>" + username + ":</strong></p>" +
                                   "<p>" + comment + "</p>";
        
            // Menambahkan komentar baru ke dalam daftar komentar
            document.getElementById('comments').appendChild(newComment);
        
            // Mengosongkan form setelah komentar ditambahkan
            document.getElementById('commentForm').reset();
        });
        
    }

    // Function to show fullscreen overlay
    function showFullscreen(title, imgSrc, description) {
        fullscreenOverlay.querySelector('.content').innerHTML = `
            <h2>${title}</h2>
            <img src="${imgSrc}" alt="${title}">
            <p>${description}</p>
        `;
        fullscreenOverlay.classList.add('active');
    }

    // Load the default page content
    loadPage('Beranda');
});
