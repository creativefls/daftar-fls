<template>
  <v-layout class="fullheight my-4 py-4 bg-success" align-center>
    <v-flex text-xs-center>
      <v-container>
        <v-layout align-center justify-center wrap>
          <v-flex v-for="room in rooms" :key="room.name" md4 xs6>
            <v-card class="elevation-0 cursor-pointer" color="transparent" @click.native.stop="openRoomInfo(room.name)">
              <v-card-title style="justify-content: center;">
                <img :src="room.image" alt="">
              </v-card-title>
              <v-card-text>
                <v-radio-group v-model="model.room1"
                  name="room1"
                  data-vv-as="Room Pilihan"
                  :error-messages="errors.collect('room1')"
                  v-validate="'required'"
                  column>
                    <v-radio
                      :label="room.name"
                      :color="room.color"
                      :value="room.name"
                      :key="index"
                    ></v-radio>
              </v-radio-group>
              </v-card-text>  
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <div class="py-4"></div>
      <img src="/images/background-tangan.png" class="img-tangan" width="80%" alt="" style="margin-bottom: -40px;">
    </v-flex>
   <v-dialog v-model="dialogRoom" max-width="80%">
      <v-card>
        <v-card-title>
          <div class="headline">{{ selectedRoomInfo.name }}</div>
          <v-spacer></v-spacer>
          <v-icon class="cursor-pointer" @click="dialogRoom = false">close</v-icon>
        </v-card-title>
        <v-card-text>
          <p class="subheading">{{ selectedRoomInfo.description }}</p>
          <p v-html="selectedRoomInfo.longDesc">
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      model: {
        room1: null
      },
      rooms: [
        {
          image: '/images/rooms/education.png',
          name: 'Education',
          color: 'secondary',
          description: 'Accessing The Knowledge Easily, Generating Educated People Evenly.',
          longDesc: `Perkembangan zaman yang pesat memberi keuntungan bagi tiap orang untuk mengakses informasi yang dibutuhkan dengan cepat dan mudah. Tanpa perlu bertatap muka dengan guru atau mendapat bimbingan khusus, seseorang dapat belajar lewat video interaktif yang dibuat oleh suatu lembaga bimbingan online. <br>
          Namun, dengan berbagai kemudahan akses terhadap pendidikan dan berbagai layanan yang gratis angka putus sekolah di Indonesia mengutip data dari UNICEF tahun 2016 sebanyak 2,5 juta anak Indonesia tidak dapat menikmati pendidikan lanjutan yakni sebanyak 600 ribu anak usia sekolah dasar (SD) dan 1,9 juta anak usia Sekolah Menengah Pertama (SMP). Oleh karena itu, bangsa Indonesia membutuhkan peran serta dari generasi muda untuk turut serta menciptakan perubahan disruptif di dunia pendidikan agar pendidikan yang gratis dapat dinikmati seluruh lapisan masyarakat di Indonesia.`
        },
        {
          image: '/images/rooms/entrepreneur.png',
          name: 'Entrepreneurship',
          color: 'warning',
          description: 'Seen the Unseen, Escalate the Oppotunity!',
          longDesc: `Idealnya, ekosistem ekonomi kreatif harus tumbuh karena lingkungan yang sehat baik institusinya, pembinaan dan pertumbuhannya. Selama ini ekonomi kreatif yang dibicarakan hanya berfokus pada bentuk - bentuk yang sedang populer dikalangan menegah keatas, sementara ekonomi kreatif yang berada pada level grass root tidak tersentuh. Grassroot sendiri merupakan masyarakat akar rumput atau suatu konsep inovasi yang bepihak kepada kaum kecil atau menengah kebawah, seperti pengrajin kain konvensional, pemahat patung, mebel dan furniture. Diperlukan pengembangan dalam meningkatkan kapasitas usaha, inovasi produk serta meningkatkan keahlian.`
        },
        {
          image: '/images/rooms/poverty.png',
          name: 'Poverty',
          color: 'error',
          description: 'Harnessing Agricultural Potential To Eradicate Poverty.',
          longDesc: `Berita Resmi Statistik tentang Profil Kemiskinan di Indonesia Maret 2016 diterbitkan Badan Pusat Statistik (BPS) pada tanggal 18 Juli 2016 kemarin. Menurut BPS, jumlah penduduk miskin—penduduk dengan pengeluaran per kapita per bulan di bawah garis kemiskinan—pada Maret 2016 di Indonesia mencapai 28,01 juta jiwa atau sebesar 10,86 persen dari total jumlah penduduk Indonesia. Berdasarkan profil kemiskinan BPS, walaupun dari sisi jumlah kemiskinan di perdesaan menurun, namun secara persentase penduduk miskin meningkat. Pada bulan Maret 2015 persentase penduduk miskin perdesaan sebesar 14,21 persen, lalu turun pada September 2015 menjadi 14,09 persen kemudian naik 0,02 persen di bulan Maret 2016 menjadi 14,11 persen. Profil kemiskinan di Indonesia yang mengalami penurunan dalam angka namun secara absolut angka kemiskinan di Indonesia masih besar sejumlah 26,58 juta pada tahun 2017.`
        },
        {
          image: '/images/rooms/urban-planning.png',
          name: 'Urban Planning',
          color: 'info',
          description: 'The Viable Solution for Sustainable Living.',
          longDesc: `Harga tanah yang makin tinggi dan naik begitu cepat membuat industri properti di tanah air cukup tertekan, terutama untuk penyediaan rumah murah bagi masyarakat. Dengan harga tanah yang semakin mahal tapi tak sebanding dengan kenaikan pendapatan, maka diprediksi akan makin banyak masyarakat yang tidak punya rumah, khususnya generasi milenial yang akan mendominasi demografi penduduk Indonesia di masa mendatang. Sebab itu, dibutuhkan sebuah solusi disruptif agar generasi milenial bisa tetap memiliki hunian di masa depan saat lahan semakin terbatas dan harga tanah menjadi semakin mahal. `
        },
        {
          image: '/images/rooms/human-capital.png',
          name: 'Human Capital',
          color: 'primary',
          description: 'Learning Ability In The Future Human Age.',
          longDesc: `Saat ini peran manusia mulai digantikan oleh teknologi baik itu secara teknis operasional dengan mesin-mesin canggih ataupun secara intelektual dengan artificial inteligence. Tentu hal ini menghadirkan kegelisahan tersendiri bagi mereka yang mulai tergantikan perannya. Beberapa pekerjaan lama mungkin akan bisa tergantikan sepenuhnya oleh kecanggihan teknologi, namun akan ada berbagai macam jenis pekerjaan baru yang belum pernah terpikirkan sebelumnya di masa depan akan bermunculan seperi desainer 3d printing, Insinyur Drones, sejarawan internet, jasa penghijauan lingkungan, bahkan hingga terapis untuk pecandu media sosial.
          <br>
          Oleh karena itu, generasi milennials harus mempersiapkan diri untuk menghadapi berbagai jenis pekerjaan dan peluang baru di masa depan agar tidak tergantikan oleh canggihnya teknologi.`
        },
        {
          image: '/images/rooms/digital.png',
          name: 'Digital',
          color: 'success',
          description: 'Redefining The Next Big Thing of Digital Technology.',
          longDesc: `Di Indonesia diskusi tentang blockchain menghangat menyusul kehebohan soal mata uang digital, termasuk bitcoin. teknologi ini mendesentralisasikan fungsi pengawasan dan intermediasi sehingga penggunaan mata uang digital dipercaya oleh semua pihak. Setiap transaksi bisa divalidasi semua pihak tanpa butuh bank sentral. Secara sederhana, teknologi blockchain ini menghubungkan antarkomputer satu dengan yang lain dan memungkinkan pencatatan data tersebut di jaringan tanpa pihak ketiga. Teknologi blockchain merupakan teknologi yang lebih menyederhanakan sistem yang selama ini tersentralisasi. Di balik teknologi ini, jasa makelar atau perantara segera berakhir. `
        },
      ],
      selectedRoom: '',
      dialogRoom: false
    }
  },
  computed: {
    selectedRoomInfo () {
      if (this.selectedRoom.length < 1) return { image: '', name: '', description: '', longDesc: '' }
      return this.rooms.find(room => room.name == this.selectedRoom)
    }
  },
  methods: {
    openRoomInfo (room) {
      this.selectedRoom = room
      this.dialogRoom = true
    },
        validate () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((valid) => {
          let errors = this.errors.collect()
          resolve({ valid: valid, model: this.model, error: errors[Object.keys(errors)[0]]});
        });
      })
    }
  }
}
</script>
