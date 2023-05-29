<template>
  <div class="home">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="[-6.97, 112.313]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <!-- Mojokerto -->
      <l-marker :lat-lng="[-7.4713, 112.44354]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Sunrise Mall</h1>
          <h4>
            <br />Alamat: Jl. Benteng Pancasila No.9, Mergelo, Balongsari, Kec. Magersari
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (0321) 5283888
          </h4>
        </l-popup>
      </l-marker>
      <!-- Ponorogo -->
      <l-marker :lat-lng="[-7.87075, 111.48381]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Ponorogo City Center</h1>
          <h4>
            <br />Alamat: Jl. Ir. H Juanda No.19, Tonatan, Kec. Ponorogo <br />Waktu: 10 AM ⋅ 9 PM
            <br />Nomor: (0352) 3514178
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.2549, 112.73221]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Surabaya BJ Junction</h1>
          <h4>
            <br />Alamat: Jl. Bubutan No.1-7, Bubutan, Kec. Bubutan, Surabaya. <br />Waktu Buka: 10
            AM - 10 PM <br />Nomor: (031) 5472111
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.34546, 112.72791]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>City of Tomorrow</h1>
          <h4>
            <br />Alamat: Jl. Ahmad Yani No.288, Dukuh Menanggal, Kec. Gayungan, Surabaya
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 8275888
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.30222, 112.73807]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Darmo Trade Center</h1>
          <h4>
            <br />Alamat: Jl. Jagir Wonokromo, Jagir, Kec. Wonokromo, Surabaya <br />Waktu Buka: 09
            AM - 06 PM <br />Nomor: (031) 8482380
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.24845, 112.75847]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>kapas krampung plaza</h1>
          <h4>
            <br />Alamat: Jl. Kapas Krampung, Ploso, Kec. Simokerto, Surabaya <br />Waktu Buka: 10
            AM - 10 PM <br />Nomor: (0321) 5283986
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.27549, 112.78129]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Galaxy Mall</h1>
          <h4>
            <br />Alamat: PQFJ+Q3M, Mulyorejo, Kec. Mulyorejo, Surabaya <br />Waktu Buka: 10 AM - 10
            PM <br />Nomor: (0321) 52872666
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.29159, 112.70593]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Golden City Mall</h1>
          <h4>
            <br />Alamat: Jl. KH Abdul Wahab Siamin Surabaya No.2-8, Dukuh Pakis, Kec. Dukuhpakis
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 5653388
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.25241, 112.75062]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Hi-Tech Mall</h1>
          <h4>
            <br />Alamat: Jl. Kusuma Bangsa, Tambaksari, Kec. Tambaksari, Surabaya <br />Waktu Buka:
            09 AM - 09 PM <br />Nomor: (031) 5316560
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.2412, 112.74688]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>ITC Mega Grosir</h1>
          <h4>
            <br />Alamat: Kapasan, Kec. Simokerto, Surabaya, Jawa Timur <br />Waktu Buka: 10 AM - 10
            PM <br />Nomor: (0321) 52839823
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.23521, 112.73775]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Jembatan Merah Plaza</h1>
          <h4>
            <br />Alamat: Jl. Taman Jayengrono No.2, Krembangan Sel., Kec. Krembangan, Surabaya
            <br />Waktu Buka: 09 AM - 06 PM <br />Nomor: (031) 3556514
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.31548, 112.73625]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Maspion Square</h1>
          <h4>
            <br />Alamat: Jl. Ahmad Yani No.73, Margorejo, Kec. Wonocolo, Surabaya <br />Waktu Buka:
            10 AM - 10 PM <br />Nomor: (031) 8989536
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.28906, 112.67533]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Pakuwon City Mall</h1>
          <h4>
            <br />Alamat: Jl. Raya Laguna KJW Putih Tambak No.2, Kejawaan Putih Tamba, Kec.
            Mulyorejo <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 58208800
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.2927, 112.6663]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Pakuwon Indah Supermall</h1>
          <h4>
            <br />Alamat: Ground Floor Jalan pUncak, Jl. Lontar Indah No.2, Babatan, Kec. Wiyung
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 99142126
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.29077, 112.67401]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Pakuwon Trade Centre</h1>
          <h4>
            <br />Alamat: Jl. Raya Lontar No.2, Babatan, Kec. Wiyung, Surabaya <br />Waktu Buka: 10
            AM - 04 PM <br />Nomor: 081216777937
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.2424, 112.74409]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Pasar Atum Mall</h1>
          <h4>
            <br />Alamat: Jl. Bunguran No.45, Bongkaran, Kec. Pabean Cantikan, Surabaya <br />Waktu
            Buka: 10 AM - 05 PM <br />Nomor: (031) 3551995
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.2453, 112.73417]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Pasar turi mall baru</h1>
          <h4>
            <br />Alamat: Jl. Pasar Turi No.21, Jepara, Kec. Bubutan, Surabaya4 <br />Waktu Buka: 08
            AM - 04 PM <br />Nomor: (031) 99000565
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.31609, 112.74856]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Marina Plaza</h1>
          <h4>
            <br />Alamat: Jl. Margorejo Indah Utara No.97-99, Sidosermo, Kec. Wonocolo, Surabaya
            <br />Waktu Buka: 10 AM - 09 PM <br />Nomor: (031) 8497660
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.26474, 112.74867]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Plaza Surabaya</h1>
          <h4>
            <br />Alamat: Embong Kaliasin, Kec. Genteng, Surabaya, Jawa Timur <br />Waktu Buka: 10
            AM - 10 PM <br />Nomor: (0321) 5289842
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.24647, 112.73262]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Pasar Grrosir Surabaya</h1>
          <h4>
            <br />Alamat: Jl. Dupak Raya, Gundih, Kec. Bubutan, Surabaya <br />Waktu Buka: 09 AM -
            05 PM <br />Nomor: (0321) 5282392
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.3095, 112.7348]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Royal Plaza</h1>
          <h4>
            <br />Alamat: Jl. A Yani Frontage Barat No.16-18, Wonokromo, Kec. Wonokromo, Surabaya
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 8270866
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.29454, 112.7302]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Town Square Surabaya</h1>
          <h4>
            <br />Alamat: Jl. Hayam Wuruk No.45-H, RT.005/RW.11, Sawunggaling, Kec. Wonokromo
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (0321) 5282623
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.26239, 112.73932]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Tunjungan Plaza</h1>
          <h4>
            <br />Alamat: Jl. Jenderal Basuki Rachmat No.8-12, Kedungdoro, Kec. Tegalsari, Surabaya
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 5311088
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.26282, 112.74788]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>World Trade Center(WTC)</h1>
          <h4>
            <br />Alamat: Jl. Pemuda No.27-31, Embong Kaliasin, Kec. Genteng, Surabaya <br />Waktu
            Buka: 09 AM - 10 PM <br />Nomor: (031) 5319310
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.29302, 112.71986]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Ciputra World Surabaya</h1>
          <h4>
            <br />Alamat: Gn. Sari, Kec. Dukuhpakis, Surabaya, Jawa Timur <br />Waktu Buka: 10 AM -
            10 PM <br />Nomor: (0321) 5292382
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.26191, 112.75064]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Grand City</h1>
          <h4>
            <br />Alamat: Ketabang, Kec. Genteng, Surabaya, Jawa Timur <br />Waktu Buka: 10 AM - 10
            PM <br />Nomor: (0321) 52832271
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.28594, 112.68111]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Lenmarc Mall</h1>
          <h4>
            <br />Alamat: Jl. Mayjend. Jonosewojo No.9, Pradahkalikendal, Kec. Dukuhpakis, Surabaya
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (031) 51163000
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.28746, 112.71341]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Carrefour Dukuh kupang</h1>
          <h4>
            <br />Alamat: Jl. Raya Dukuh Kupang No.126, Dukuh Pakis, Kec. Dukuhpakis, Surabaya
            <br />Waktu Buka: 08 AM - 08 PM <br />Nomor: (0321) 5283237
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.32073, 112.77071]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Carrefour Rungkut</h1>
          <h4>
            <br />Alamat: Jl. Tenggilis Mejoyo Jl. Raya Kalirungkut No.25, Kali Rungkut, Kec.
            Rungkut <br />Waktu Buka: 09 AM - 10 PM <br />Nomor: 082208255132
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.24737, 112.72959]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Dupak Grosir</h1>
          <h4>
            <br />Alamat: Gundih, Kec. Bubutan, Surabaya, Jawa Timur <br />Waktu Buka: 10 AM - 10 PM
            <br />Nomor: (0321) 5283822
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.25717, 112.73889]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Tunjungan Electronic Center</h1>
          <h4>
            <br />Alamat: Jl. Tunjungan No.5, Genteng, Kec. Genteng, Surabaya <br />Waktu Buka: 10
            AM - 06 PM <br />Nomor: (0321) 5283821
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.27904, 112.76515]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bonnet Swalayan</h1>
          <h4>
            <br />Alamat: Jl. Manyar Kertoarjo V No.62, Mojo, Kec. Gubeng, Surabaya <br />Waktu
            <br />Waktu Buka: 07 AM - 09 PM <br />Nomor: (031) 5945662
          </h4>
        </l-popup>
      </l-marker>
      <!-- Surabaya -->
      <l-marker :lat-lng="[-7.29331, 112.75595]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bilka Swalayan</h1>
          <h4>
            <br />Alamat: Jl. Ngagel Jaya Selatan No.103, Pucang Sewu, Kec. Gubeng, Surabaya
            <br />Waktu Buka: 07 AM - 09 PM <br />Nomor: (031) 5029889
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.97389, 112.62972]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Avia Malang</h1>
          <h4>
            <br />Alamat: Jl. Jaksa Agung Suprapto No.1B, Oro-oro Dowo, Kec. Klojen, Kota Malang
            <br />Waktu Buka: 08 AM - 09 PM <br />Nomor: (034) 1364880
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.98403, 112.63209]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Gajah Mada plaza</h1>
          <h4>
            <br />Alamat: Gajah Mada Plaza, Jl. Agus Salim No.18, Sukoharjo, Klojen <br />Waktu
            Buka: 09 AM - 09 PM <br />Nomor: (031) 5945662
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.98127, 112.63074]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Sarinah Plaza</h1>
          <h4>
            <br />Alamat: Jl. Jenderal Basuki Rahmat No.2-A, Kiduldalem, Kec. Klojen, Kota Malang
            <br />Waktu Buka: 09 AM - 10 PM <br />Nomor: (034) 1326969
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.97696, 112.62386]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Mall Olympic Garden</h1>
          <h4>
            <br />Alamat: 2JCF+GWJ, Jl. Kawi, Kauman, Kec. Klojen, Kota Malang <br />Waktu Buka: 11
            AM - 09 PM <br />Nomor: (031) 5945662
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.98167, 112.63214]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Mal Alun-Alun</h1>
          <h4>
            <br />Alamat: 2J9J+6PF, Jl. Merdeka Timur, Kiduldalem, Kec. Klojen, Kota Malang
            <br />Waktu Buka: 08 AM - 09 PM <br />Nomor: (031) 5945662
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.93778, 112.60717]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Mall dinoyo City</h1>
          <h4>
            <br />Alamat: Jl. MT. Haryono No.195 - 197, Dinoyo, Kec. Lowokwaru, Kota Malang
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (034) 1560060
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.97382, 112.6117]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Malang City point</h1>
          <h4>
            <br />Alamat: Jl. Terusan Dieng No.32, Pisang Candi, Kec. Sukun, Kota Malang <br />Waktu
            Buka: 09 AM - 10 PM <br />Nomor: (034) 1553800
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.95642, 112.61798]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Transmart Mx Mall</h1>
          <h4>
            <br />Alamat: Jl. Veteran No.8, Penanggungan, Kec. Klojen, Kota Malang <br />Waktu Buka:
            09 AM - 10 PM <br />Nomor: 082110171359
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.93652, 112.65045]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Plaza Araya Malang</h1>
          <h4>
            <br />Alamat: Jl. Blimbing Indah Megah No.2, Purwodadi, Kec. Blimbing, Malang
            <br />Waktu Buka: 09 AM - 10 PM <br />Nomor: (031) 5945662
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.95683, 112.61874]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Malang Town Square</h1>
          <h4>
            <br />Alamat: Jl. Veteran No.2, Penanggungan, Kec. Klojen, Kota Malang <br />Waktu Buka:
            09 AM - 10 PM <br />Nomor: (031) 5945662
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.87912, 112.53512]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Batu Town square</h1>
          <h4>
            <br />Alamat: Jl. Diponegoro No.1, Temas, Sisir, Kec. Batu, Kota Batu <br />Waktu Buka:
            10 AM - 10 PM <br />Nomor: (034) 12991221
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.98405, 112.63175]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Matahari Department Store Mitra Malang</h1>
          <h4>
            <br />Alamat: Jl. Agus Salim No.10-16, Sukoharjo, Kec. Klojen, Kota Malang <br />Waktu
            Buka: 09 AM - 10 PM <br />Nomor: (034) 1327989
          </h4>
        </l-popup>
      </l-marker>
      <!-- Malang -->
      <l-marker :lat-lng="[-7.87829, 112.53479]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>lippo mall batu</h1>
          <h4>
            <br />Alamat: Jl. Diponegoro No.1, Sisir, Kec. Batu, Kota Batu <br />Waktu Buka: 10 AM -
            10 PM <br />Nomor: (034) 12991299
          </h4>
        </l-popup>
      </l-marker>
      <!-- Madiun -->
      <l-marker :lat-lng="[-7.62568, 111.51958]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Plaza Madiun</h1>
          <h4>
            <br />Alamat: Jl. Pahlawan No.38-40, Pangongangan, Kec. Manguharjo, Kota Madiun
            <br />Waktu Buka: 10 AM - 09 PM <br />Nomor: (035) 1499944
          </h4>
        </l-popup>
      </l-marker>
      <!-- Madiun -->
      <l-marker :lat-lng="[-7.62573, 111.51988]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Matahari Department Store</h1>
          <h4>
            <br />Alamat: Plaza Madiun, Jl. Pahlawan No.38 - 40, Pangongangan, Kec. Manguharjo
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (035) 1499180
          </h4>
        </l-popup>
      </l-marker>
      <!-- Madiun -->
      <l-marker :lat-lng="[-7.62575, 111.51986]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Hypermart Plaza Madiun</h1>
          <h4>
            <br />Alamat: Jl. Pahlawan No.38 - 40, Pangongangan, Kec. Manguharjo, Kota Madiun
            <br />Waktu Buka: 10 AM - 10 PM <br />Nomor: (035) 1481070
          </h4>
        </l-popup>
      </l-marker>
      <!-- Madiun -->
      <l-marker :lat-lng="[-7.62735, 111.51925]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Timbul Jaya Plaza</h1>
          <h4>
            <br />Alamat: Jl. Pahlawan No.Kav. 46-48, Pangongangan, Kec. Manguharjo, Kota Madiun
            <br />Waktu Buka: 09 AM - 09 PM <br />Nomor: (035) 1462874
          </h4>
        </l-popup>
      </l-marker>
      <!-- Madiun -->
      <l-marker :lat-lng="[-7.62246, 111.53407]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Carrefour Madiun</h1>
          <h4>
            <br />Alamat: Jl. S. Parman, Oro-oro Ombo, Kec. Kartoharjo, Kota Madiun <br />Waktu
            Buka: 07 AM - 09 PM <br />Nomor: 082208255154
          </h4>
        </l-popup>
      </l-marker>
      <!-- Madiun-->
      <l-marker :lat-lng="[-7.62263, 111.53596]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Sun City Mall Madiun</h1>
          <h4>
            <br />Alamat: Jl. S. Parman No.8, Oro-oro Ombo, Kec. Kartoharjo, Kota Madiun <br />Waktu
            Buka: 07 AM - 09 PM <br />Nomor: (035) 1457147
          </h4>
        </l-popup>
      </l-marker>
      <!-- Bojonegoro -->
      <l-marker :lat-lng="[-7.15329, 111.89478]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bravo supermarket Bojonegoro</h1>
          <h4>
            <br />Alamat: Jl. Pemuda Timur No.37 - 39, Ngrowo, Kec. Bojonegoro <br />Waktu Buka: 08
            AM - 10 PM <br />Nomor: (035) 3885573
          </h4>
        </l-popup>
      </l-marker>
      <!-- Bojonegoro -->
      <l-marker :lat-lng="[-7.16289, 111.89714]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>KDS Bojonegoro</h1>
          <h4>
            <br />Alamat: Jl. Veteran No.90, Jambean, Sukorejo, Kec. Bojonegoro <br />Waktu Buka: 09
            AM - 10 PM <br />Nomor: (035) 33412900
          </h4>
        </l-popup>
      </l-marker>
      <!-- Jombang -->
      <l-marker :lat-lng="[-7.54582, 112.21469]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bravo Supermarket</h1>
          <h4>
            <br />Alamat: F638+X5C, Jalan Yos Sudarso, Tunggorono, Kecamatan Jombang <br />Waktu
            Buka: 09 AM - 09 PM <br />Nomor: (031) 5947362
          </h4>
        </l-popup>
      </l-marker>
      <!-- Jombang -->
      <l-marker :lat-lng="[-7.55462, 112.23587]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Mitra Supermarket</h1>
          <h4>
            <br />Alamat: Jl. KH. Wahid Hasyim No.181, Kepanjen, Kaliwungu, Kec. Jombang <br />Waktu
            Buka: 07 AM - 09 PM <br />Nomor: (032) 1861346
          </h4>
        </l-popup>
      </l-marker>
      <!-- Tuban -->
      <l-marker :lat-lng="[-6.89935, 112.0632]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bravo supermarket tuban</h1>
          <h4>
            <br />Alamat: Jl. Basuki Rachmad No.64, Kutorejo, Kec. Tuban,Kabupaten Tuban <br />Waktu
            Buka: 08 AM - 10 PM <br />Nomor: (035) 6321642
          </h4>
        </l-popup>
      </l-marker>
      <!-- Tuban -->
      <l-marker :lat-lng="[-6.89164, 112.05045]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Samudra swalayan tuban</h1>
          <h4>
            <br />Alamat: Jl. Diponegoro No.33, Latsari, Ronggomulyo, Kec. Tuban <br />Waktu Buka:
            08 AM - 08 PM <br />Nomor: (035) 6328388
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.8276, 112.01099]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Dhoho Plaza Kediri</h1>
          <h4>
            <br />Alamat: Jl. Brigjen Katamso No.1A, Kp. Dalem, Kec. Kota, Kota Kediri <br />Waktu
            Buka: 10 AM - 10 PM <br />Nomor: (031) 5945698
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.82256, 112.01082]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>RAMAYANA Mal Kediri</h1>
          <h4>
            <br />Alamat: Jl. Panglima Sudirman, Ringin Anom, Kec. Kota, Kota Kediri <br />Waktu
            Buka: 10 AM - 10 PM <br />Nomor: (035) 4694115
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.81591, 112.01917]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Mall Kediri</h1>
          <h4>
            <br />Alamat: Jl. Hayam Wuruk No.46, Dandangan, Kec. Kota, Kabupaten Kediri <br />Waktu
            Buka: 10 AM - 10 PM <br />Nomor: 085785349963
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.81504, 112.01924]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Golden Supermarket</h1>
          <h4>
            <br />Alamat: Jl. Hayam Wuruk No.121-125, Dandangan, Kec. Kota <br />Waktu Buka: 08 AM -
            09 PM <br />Nomor: (035) 4684665
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.81629, 112.01942]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Gramedia kediri mall</h1>
          <h4>
            <br />Alamat: Gedung UFO Elektronik, Jl. Joyoboyo No.2, Dandangan, Kec. Kota <br />Waktu
            Buka: 09 AM - 09 PM <br />Nomor: 08113635665
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.81285, 112.01582]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Hypermart Kediri</h1>
          <h4>
            <br />Alamat: Jl. Hasanudin No.2, Balowerti, Kec. Kota, Kota Kediri <br />Waktu Buka: 09
            AM - 10 PM <br />Nomor: (0354) 673808
          </h4>
        </l-popup>
      </l-marker>
      <!-- Kediri -->
      <l-marker :lat-lng="[-7.81712, 112.01301]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Apollo Supermarket Kediri</h1>
          <h4>
            <br />Alamat: Jl. Dhoho No.98-100, Setono Gedong, Kec. Kota, Kota kediri <br />Waktu
            Buka: 09 AM - 09 PM <br />Nomor: (0354) 689989
          </h4>
        </l-popup>
      </l-marker>
      <!-- Trenggalek -->
      <l-marker :lat-lng="[-8.05557, 111.70867]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Alga Plaza</h1>
          <h4>
            <br />Alamat: WPV5+Q9P, Jl. Panglima Sudirman, Sawahan, Sumbergedong <br />Waktu Buka:
            09 AM - 08 PM <br />Nomor: (0355) 796027
          </h4>
        </l-popup>
      </l-marker>
      <!-- Trenggalek -->
      <l-marker :lat-lng="[-8.07093, 111.70586]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Central Swalayan</h1>
          <h4>
            <br />Alamat: Jl. Sukarno Hatta No.76D, Kelutan, Kec. Trenggalek <br />Waktu Buka: 08 AM
            - 09 PM <br />Nomor: (0355) 796789
          </h4>
        </l-popup>
      </l-marker>
      <!-- Blitar -->
      <l-marker :lat-lng="[-8.09872, 112.16679]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Blitar Square</h1>
          <h4>
            <br />Alamat: Jl. Merdeka No.30, Kepanjen Lor, Kec. Kepanjenkidul <br />Waktu Buka: 10
            AM - 10 PM <br />Nomor: (035) 4694115
          </h4>
        </l-popup>
      </l-marker>
      <!-- Tulungagung -->
      <l-marker :lat-lng="[-8.0767, 111.91694]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bravo Supermarket Tulungagung</h1>
          <h4>
            <br />Alamat: Jl. Mayor Sujadi No.9, Jepun, Kec. Tulungagung <br />Waktu Buka: 08 AM -
            09 PM <br />Nomor: (0355) 5239777
          </h4>
        </l-popup>
      </l-marker>
      <!-- Tulungagung -->
      <l-marker :lat-lng="[-8.06854, 111.90138]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Apollo Supermall Tulungagung</h1>
          <h4>
            <br />Alamat: Jl. Pangeran Diponegoro No.96, Tamanan, Kec. Tulungagung <br />Waktu Buka:
            09 AM - 09 PM <br />Nomor: (0355) 321401
          </h4>
        </l-popup>
      </l-marker>
      <!-- Tulungagung -->
      <l-marker :lat-lng="[-8.0652, 111.90406]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Golden Swalayan Tulungagung</h1>
          <h4>
            <br />Alamat: Jl. Ahmad Yani Timur No.66, Kampungdalem, Kec. Tulungagung <br />Waktu
            Buka: 08 AM - 10 PM <br />Nomor: (0355) 327665
          </h4>
        </l-popup>
      </l-marker>
      <!-- Jember -->
      <l-marker :lat-lng="[-8.17481, 113.70199]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Golden Mall Jember</h1>
          <h4>
            <br />Alamat: Jl. Trunojoyo No.42, Sawahan Cantian, Kepatihan <br />Waktu Buka: 10 AM -
            10 PM <br />Nomor: (035) 4694187
          </h4>
        </l-popup>
      </l-marker>
      <!-- Jember -->
      <l-marker :lat-lng="[-8.18407, 113.66308]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Jember Roxy Square</h1>
          <h4>
            <br />Alamat: Jl. Hayam Wuruk No.50-58, Gerdu, Sempusari, Kec. Kaliwates <br />Waktu
            Buka: 10 AM - 10 PM <br />Nomor: (0823) 35552226
          </h4>
        </l-popup>
      </l-marker>
      <!-- Jember -->
      <l-marker :lat-lng="[-8.17708, 113.68279]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Gajah Mada Square</h1>
          <h4>
            <br />Alamat: RMFM+653, Kaliwates Kidul, Kaliwates, Kec. Kaliwates <br />Waktu Buka: 10
            AM - 10 PM <br />Nomor: (035) 4694812112
          </h4>
        </l-popup>
      </l-marker>
      <!-- Jember -->
      <l-marker :lat-lng="[-8.1737, 113.68773]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Lippo Plaza Jember</h1>
          <h4>
            <br />Alamat: Jl. Gajah Mada No.106, Kb. Kidul, Jember Kidul, Kec. Kaliwates <br />Waktu
            Buka: 10 AM - 10 PM <br />Nomor: (035) 4694119
          </h4>
        </l-popup>
      </l-marker>
      <!-- Sidoarjo -->
      <l-marker :lat-lng="[-7.44949, 112.71177]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Suncity Mall Sidoarjo</h1>
          <h4>
            <br />Alamat: Jl. Pahlawan, Rw6, Sidokumpul, Kec. Sidoarjo <br />Waktu Buka: 10 AM - 10
            PM <br />Nomor: (0812) 24111136
          </h4>
        </l-popup>
      </l-marker>
      <!-- Sidoarjo -->
      <l-marker :lat-lng="[-7.35162, 112.72233]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Plaza Ramayana Sidoarjo</h1>
          <h4>
            <br />Alamat: Jl. Diponegoro No.2, Rw5, Sidokumpul, Kec. Sidoarjo <br />Waktu Buka: 09
            AM - 11 PM <br />Nomor: (035) 4694186
          </h4>
        </l-popup>
      </l-marker>
      <!-- Sidoarjo -->
      <l-marker :lat-lng="[-7.45145, 112.71448]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Mall Sidoarjo</h1>
          <h4>
            <br />Alamat: Rw5, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur <br />Waktu
            Buka: 10 AM - 10 PM <br />Nomor: (035) 4698237
          </h4>
        </l-popup>
      </l-marker>
      <!-- Lamongan -->
      <l-marker :lat-lng="[-7.11291, 112.42001]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Lamonga Plaza</h1>
          <h4>
            <br />Alamat: Jl. Lamongrejo, Dapur Utara, Sidokumpul <br />Waktu: 09 AM - 10 PM
            <br />Nomor: (0356) 3216524
          </h4>
        </l-popup>
      </l-marker>
      <!-- Pasuruan -->
      <l-marker :lat-lng="[-7.6374, 112.90012]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Transmart Pasuruan</h1>
          <h4>
            <br />Alamat: Jl. Soekarno Hatta, Pasuruan Land, Karanganyar, Kec. Panggungrejo
            <br />Waktu: 09 AM - 10 PM <br />Nomor: 082208255172
          </h4>
        </l-popup>
      </l-marker>
      <!-- Pasuruan -->
      <l-marker :lat-lng="[-7.64527, 112.90446]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Delta Super Store</h1>
          <h4>
            <br />Alamat: Jl. Kh. Wachid Hasyim, Kebonsari, Kec. Panggungrejo, Kota Pasuruan
            <br />Waktu: 09 AM - 09 PM <br />Nomor: 081356982811
          </h4>
        </l-popup>
      </l-marker>
      <!-- Gresik -->
      <l-marker :lat-lng="[-7.15789, 112.61639]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Gresik Grand Mall</h1>
          <h4>
            <br />Alamat: Jl. Sumatra No.1-5, RT.07/RW.08, Gn. Malang, Randuagung, Kec. Kebomas
            <br />Waktu: 10 AM - 10 PM <br />Nomor: 03139929900
          </h4>
        </l-popup>
      </l-marker>
      <!-- Gresik -->
      <l-marker :lat-lng="[-7.1663, 112.60187]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Icon Mall Gresik</h1>
          <h4>
            <br />Alamat: Jl. DR. Wahidin Sudiro Husodo No.788, Kembangan, Dahanrejo, Kec. Kebomas
            <br />Waktu: 10 AM - 10 PM <br />Nomor: (0356) 321642
          </h4>
        </l-popup>
      </l-marker>
      <!-- Probolinggo -->
      <l-marker :lat-lng="[-7.75245, 113.21667]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Graha mulia Probolinggo</h1>
          <h4>
            <br />Alamat: Jl. Dr.Sutomo No.42, Tisnonegaran, Kec. Kanigaran, Kota Probolinggo
            <br />Waktu: 08 AM - 09 PM <br />Nomor: (0356) 321687
          </h4>
        </l-popup>
      </l-marker>
      <!-- Probolinggo -->
      <l-marker :lat-lng="[-7.74927, 113.21706]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>KDS Departement Store</h1>
          <h4>
            <br />Alamat: Jl. Dr.Sutomo No.60A, Tisnonegaran, Kec. Kanigaran, Kota Probolinggo
            <br />Waktu:09 AM - 09 PM <br />Nomor: (0356) 321642
          </h4>
        </l-popup>
      </l-marker>
      <!-- Bayuwangi -->
      <l-marker :lat-lng="[-8.23033, 114.36427]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Ramayana Bayuwangi</h1>
          <h4>
            <br />Alamat: Jl. Adi Sucipto, Tukangkayu, Kec. Banyuwangi, Kabupaten Banyuwangi
            <br />Waktu: 10 AM - 10 PM <br />Nomor: (0356) 321665
          </h4>
        </l-popup>
      </l-marker>
      <!-- Banyuwangi -->
      <l-marker :lat-lng="[-8.21838, 114.3702]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Roxxy mall Banyuwangi</h1>
          <h4>
            <br />Alamat: Jl. Jenderal Ahmad Yani No.21, Penganjuran, Kec. Banyuwangi <br />Waktu:
            09 AM - 09 PM <br />Nomor: 08192222399
          </h4>
        </l-popup>
      </l-marker>
      <!-- Banyuwangi -->
      <l-marker :lat-lng="[-8.36457, 114.14785]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Sun East Mall</h1>
          <h4>
            <br />Alamat: Sun East Mall, Jl. Diponegoro No.11, Dusun Krajan, Genteng Kulon
            <br />Waktu: 10 AM - 09 PM <br />Nomor: 03338502397
          </h4>
        </l-popup>
      </l-marker>
      <!-- Banyuwangi -->
      <l-marker :lat-lng="[-8.36533, 114.1469]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>KDS Mall Banyuwangi</h1>
          <h4>
            <br />Alamat: Jl. Diponegoro, Dusun Krajan, Genteng Kulon, Kec. Genteng <br />Waktu:
            08:30 AM - 09:00 PM <br />Nomor: 081259401600
          </h4>
        </l-popup>
      </l-marker>
      <!-- Situbondo -->
      <l-marker :lat-lng="[-7.7041, 114.00999]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>KDS Situbondo</h1>
          <h4>
            <br />Alamat: Jl. Achmad Yani No.183, Parse, Dawuhan, Kec. Situbondo <br />Waktu: 08:30
            AM - 09:00 PM <br />Nomor: (0356) 321642
          </h4>
        </l-popup>
      </l-marker>
      <!-- Mojokerto -->
      <l-marker :lat-lng="[-7.47177, 112.4428]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Carrefour Mojokerto</h1>
          <h4>
            <br />Alamat: Jl. Benteng Pancasila No.54, Mergelo, Balongsari, Kec. Magersari
            <br />Waktu: 10 AM - 09 PM <br />Nomor: (0321)398710
          </h4>
        </l-popup>
      </l-marker>
      <!-- Mojokerto -->
      <l-marker :lat-lng="[-7.47678, 112.43196]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Keraton Sultan Plaza Mojokerto</h1>
          <h4>
            <br />Alamat: Jl. Mojopahit No.412, Mergelo, Miji, Kec. Prajurit Kulon <br />Waktu: 8 AM
            - 9 PM <br />Nomor: (0356) 321642
          </h4>
        </l-popup>
      </l-marker>
      <!-- Lumajang -->
      <l-marker :lat-lng="[-8.13945, 113.20771]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Graha mulia plaza lumajang</h1>
          <h4>
            <br />Alamat: Jurang Mangu, Labruk Lor, Kec. Lumajang, Kabupaten Lumajang <br />Waktu:
            09 AM - 10 PM <br />Nomor: 082332227444
          </h4>
        </l-popup>
      </l-marker>
      <!-- Lumajang -->
      <l-marker :lat-lng="[-8.12911, 113.22475]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Plaza Lumajang</h1>
          <h4>
            <br />Alamat: V6CG+G2G, Tompokersan, Kec. Lumajang, Kabupaten Lumajang <br />Waktu: 9 AM
            - 9 PM <br />Nomor: (0356) 321667
          </h4>
        </l-popup>
      </l-marker>
      <!-- Bangkalan -->
      <l-marker :lat-lng="[-7.05043, 112.74382]">
        <l-icon icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png" :icon-size="[60, 60]" />
        <l-popup>
          <h1>Bangkalan Plaza</h1>
          <h4>
            <br />Alamat: Jl. Halim Perdana Kusuma, Area Sawah, Mlajah, Kec. Bangkalan <br />Waktu:
            10 AM - 09 PM <br />Nomor: (0356) 321622
          </h4>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LIcon, LMarker, LTileLayer, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    LMap,
    LIcon,
    LMarker,
    LTileLayer,
    LPopup,
  },
  setup() {
    const zoom = ref(8);
    return {
      zoom,
    };
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
