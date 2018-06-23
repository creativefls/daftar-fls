<template>
  <div>
    <div class="subheading primary__dark--text">Apa motivasi kamu mengikuti FLS 2018?</div>
    <v-text-field
      v-model="model.essayMotivationJoin"
      data-vv-as="Jawaban"
      :error-messages="errors.collect('motivationJoin')"
      multi-line
      counter="1500"
      v-validate="'required|max:1500'"
      data-vv-name="motivationJoin"
      placeholder="Motivasi"
      class="pa-0"
    ></v-text-field>

    <div class="subheading primary__dark--text mt-4">Mengapa kamu memilih room tersebut?</div>
    <v-text-field
      v-model="model.essayRoomSelected"
      data-vv-as="Jawaban"
      :error-messages="errors.collect('roomSelected')"
      multi-line
      counter="1500"
      v-validate="'required|max:1500'"
      data-vv-name="roomSelected"
      placeholder="Alasan"
      class="pa-0"
    ></v-text-field>

    <div class="title primary__dark--text mt-4">Studi Kasus Room {{ roomSelected }}</div>

    <div v-html="caseStudyQuestion" class="subheading primary__dark--text mt-4"></div>
    <v-text-field
      v-model="model.essayCaseStudy"
      data-vv-as="Studi kasus"
      :error-messages="errors.collect('caseStudy')"
      multi-line
      counter="1500"
      v-validate="'required|max:1500'"
      data-vv-name="caseStudy"
      placeholder="Jawaban"
      class="pa-0"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        essayMotivationJoin: '',
        essayRoomSelected: '',
        essayCaseStudy: ''
      },
      tes: `<strong>dodo</strong>`
    }
  },
  computed: {
    roomSelected () {
      return this.$store.state.roomSelected
    },
    caseStudyQuestion () {
      switch (this.roomSelected) {
        case 'Education':
          return `
            <p>Perkembangan zaman yang pesat memberi keuntungan bagi orang untuk mengakses informasi yang dibutuhkan dengan cepat dan mudah . Tanpa perlu bertatap muka dengan guru atau mendapat bimbingan khusus, seseorang dapat belajar lewat video interaktif yang dibuat oleh suatu lembaga bimbingan online. Di Indonesia sudah banyak tersedia platform online yang mengundang pembelajaran virtual seperti Ruangguru, Quipper, Zenius, HarukaEdu, dan lain lain sebagainya yang menyediakan berbagai macam jenis pendidikan dengan harga terjangkau. Tidak hanya itu ada juga inspigo yang juga memberikan pendidiksn dengan softskill berbasis audio dengan cuma – cuma.</p>
            <p>Dalam cakupan regional yang lebih luas juga tersedia coursera.com yang menyediakan materi perkulihaan secara gratis. Limitless Campus Indonesia juga merupakan salah satu penyedia pendidikan softskill offline dengan metode pembayaran “pay as you wish”. Namun, dengan berbagai kemudahan akses terhadap pendidikan dan berbagai layanan yang gratis, angka putus sekolah di Indonesia masih saja terbilang tinggi.</p>
            <p>Mengutip data dari UNICEF tahun 2016 sebanyak 2,5 juta anak Indonesia tidak dapat menikmati pendidikan lanjutan yakni sebanyak 600 ribu anak usia Sekolah Dasar (SD) dan 1,9 juta anak usia Sekolah Menengah Pertama (SMP). Dari data sebelumnya ebanyak 47,3 persen responden menjawab tidak bersekolah lagi karena masalah biaya, kemudian 31 persen karena ingin membantu orang tua dengan bekerja, serta 9,4 persen karena ingin melanjutkan pendidikan nonformal seperti pesantren atau mengambil kursus keterampilan lainnya. Olah karena itu, bangsa Indonesia membutuhkan peran serta dari generasi muda untuk ikut serta menciptakan perubahan distruptif di dunia pendidikan agar pendidikan yang gratis dapat menikmati oleh seluruh lapisan masyarakat di Indonesia.</p>
            <p>Nah! menurut kamu kenapa angka anak yang putus sekolah masih saja tinggi ? lalu sebagai seorang pemuda, jelaskan langkah yang harus dilakukan untuk memperbaiki masalah tersebut?</p>
          `
        case 'Digital':
          return `
            <p>Bank Indonesia (BI) akan melarang transaksi pembayaran menggunakan bitcoin pada 2018. Larangan bitcoin ini akan diatur dalam peraturan Bank Indonesia (PBI) yang rencananya akan dikeluarkan dalam waktu dekat. &quot;Saat ini belum ada aturan yang jelas jika masyarakat melakukan transaksi bitcoin,&quot; kata Onny di Jakarta, Selasa (5/12).</p>
            <p>Bitcoin belum diatur secara spesifik oleh BI. Untuk itu, saat ini, BI masih melakukan pengkajian secara mendalam terkait bitcoin, apakah akan diatur dalam PBI uang elektronik atau terpisah misalnya nanti masuk dalam PBI cryptocurrency.</p>
            <p>Yang jelas, BI mengimbau agar merchant tidak menerima bitcoin sebagai alat pembayaran resmi di Indonesia. Jika masyarakat mengalami kerugian terkait bitcoin, regulator BI tidak akan bertanggung jawab terkait hal ini.</p>
            <p>Bagaimana pandangan kamu sebagai warga negara Indonesia mengenai kehidupan dengan atau tanpa bitcoin di Indonesia? Apabila Bank Indonesia membuka ruang pendapat mengenai polemik bitcoin yang ada, bagaimana sikap kamu terhadap masalah bitcoin tersebut? Jelaskan!</p>
          `
        case 'Poverty':
          return `
            <p>Data BPS pada tahun 2014 menunjukkan, dari 31 juta warga miskin di negeri ini sebagian besar di antaranya adalah warga pedesaan yang berstatus sebagai petani. Berbagai upaya juga sudah dilakukan pemerintah dan banyak pihak untuk meningkatkan kesejahteraan petani, namun faktanya mereka tetap saja terjebak pada kemiskinan dan bahkan cenderung semakin miskin. Berbagai upaya yang dilakukan untuk mengangkat derajat kelayakan hidup petani seolah sia-sia dan petani sepertinya menjadi semakin tidak berdaya.</p>
            <p>Salah satu jawaban mengapa petani tetap saja miskin dikemukakan oleh Dirjen Prasarana dan Sarana Pertanian Kementerian Pertanian, Gatot Irianto. Menurutnya, banyak petani tetap miskin karena jumlah petani dan tenaga kerja di sektor pertanian, khususnya pertanian tanaman pangan memang cenderung berlebihan. Dengan luas baku lahan pertanian 8,1 juta hektar idealnya hanya dibutuhkan satu juta rumah tangga petani, dengan sekitar 400.000 hingga 500.000 tenaga kerja formal di tingkat budidaya. Padahal ada sekitar 30 juta petani yang menggeluti lahan itu.</p>
            <p>Fakta itu menunjukkan, jumlah petani yang menggarap dan menggantungkan hidupnya dari lahan pertanian jauh melebihi kemampuan ideal lahan pertanian untuk menampung tenaga kerja penggarap. Artinya, jumlah tenaga kerja di sektor pertanian tanaman pangan terlalu berlebihan sehingga tidak mampu lagi memberi hasil yang mensejahterakan bagi mereka yang menggarap.</p>
            <p>Berdasarkan data dari Badan Pusat Statistik, tingkat kemiskinan di perdesaan meningkat dari 14.09% menjadi 14.11% dan Nilai Tukar Petani menurun menjadi 101.47 pada tahun 2016. Sehingga pemerintah mulai menargetkan untuk tidak ada lagi petani lokal miskin pada tahun 2045. Pemerintah mulai mewujudkan sistem pertanian bioindustri berkelanjutan. Pertanian  bioindustri berkelanjutan ini memandang lahan pertanian tidak semata- mata merupakan sumberdaya alam namun juga industri yang memanfaatkan seluruh faktor produksi untuk menghasilkan pangan guna mewujudkan ketahanan pangan serta produk lain yang dikelola menjadi bioenergi serta bebas limbah dengan menerapkan prinsip mengurangi, memanfaatkan kembali dan mendaur ulang (reduce, reuse and recycle).</p>
            <p>Lalu bagaimana pendapat kamu mengenai target Indonesia bebas kemiskinan tahun 2045 ? Dan apa yang dapat kamu lakukan untuk menurunkan tingkat kemiskinan terutama dalam bidang pertanian?</p>
          `
        case 'Human Capital':
          return `
            <p>Human Capital berfokus pada aktivitas-aktivitas yang dilakukan perusahaan/organisasi untuk mempersiapkan masa depan perusahaan/organisasi melalui penanaman pengetahuan atau kemampuan pada manusianya. Adanya intervensi dari perusahaan terhadap karyawannya yaitu agar karyawan menyadari bahwa mereka juga bagian dari sebuah aset bagi perusahaan, selain modal kerja dalam bentuk uang dan peralatan kerja yang ada. Tanpa ada kombinasi ketiga aset ini (manusia, uang, dan peralatan kerja) maka dapat dipastikan bahwa perusahaan akan cenderung sulit untuk mencapai segala target yang ditetapkan.</p>
            <p>Masalah mendasar dari membangun sistem Human Capital adalah bagaimana si pembangun ini memiliki identitas sebagai Human Capital Practitioner yaitu mengenal setiap orang yang ada dalam organisasi, berbicara dengan mereka, membangun relasi yang positf dan inspiratf. Namun justru kebanyakan hanya bekerja bersama dokumen dan konsep. Sistem memang perlu dimiliki dan dilakukan, namun membangun identitas diri sebagai departemen yang sungguh terkoneksi dengan manusia adalah tantangan sesungguhnya. Menghadapi bonus demografi dibeberapatahun yang akan datang (2020-2030), menjadi tantangan tersendiri bagi Indonesia, jangan sampai terlalu lepas akan kenikmatan kuantitas sdm usia produktif karena ada Prasyarat yang harus dipenuhi oleh suatu negara apabila ingin memperoleh manfaat besar dari bonus demografi yaitu sumber daya manusia yang berkualitas. Peningkatan mutu sdm itu juga yang menjadi tantangan terutama dalam penggunaan teknologi, karena seperti yang kita tau pada saat ini saja pernanan manusia sudah banyak yang digantikan oleh teknologi, bagaimana jika manusia itu sendiri tidak ada keinginan untuk bisa menguasai teknologi agar tidak diambil alih penuh? sikap atau cara apa yang akan kamu lakukan agar tetap bersaing dalam menghadapi maraknya teknologi ditengah situasi bonus demografi?</p>
          `
        case 'Entrepreneurship':
          return `
            <p>Ekonomi kreatif menjadi harapan Indonesia di tengah gejolak perekonomian global saat ini. Sektor ekonomi kreatif mampu memberikan sumbangan yang positif bagi perekonomian Indonesia dalam kontribusinya terhadap PDB (Produk Domestik Bruto) Indonesia yang selalu mengalami peningkatan. PDB Ekonomi Kreatif tumbuh sebesar 4,38 persen pada tahun 2015 dengan total nilai 852,24 triliun Rupiah. Pada tahun 2014-2015 ekspor Ekonomi Kreatif mengalami penguatan sebesar 6,60% dengan total nilai ekspor sebesar USD 19,4 miliar. Munculnya Start Up di dunia usaha ekonomi kreatif juga menunjukkan bahwa daya saing produk dan daya saing usaha/perusahaan Indonesia juga memiliki prospek yang cukup cerah.</p>
            <p>Dalam upaya meningkatkan potensi ekonomi kreatif di Indonesia, dikeluarkan Peraturan Presiden Nomor 72 Tahun 2015 tentang Badan Ekonomi Kreatif. salah satu tugas Badan Ekonomi Kreatif adalah mengelola 16 subsektor ekonomi kreatif yang meliputi arsitektur, desain interior, desain komunikasi visual, desain produk, film, animasi, dan video, fotografi, kriya, kuliner, musik, fashion, aplikasi dan game developer, penerbitan, periklanan, televisi dan radio, seni pertunjukan, dan seni rupa. Namun dari hasil Listing Sensus Ekonomi 2012 menunujukan dari 16 subsektor yang ada, hanya 3 subsektor yang perkembangannya paling signifikan yaitu kuliner, fashion dan kriya.</p>
            <p>Menurut pendapat kamu apakah yang menyebabkan kesenjangan tingkat perkembangan subsektor-subsektor ekonomi kreatif di Indonesia? Dan kontribusi apakah yang bisa kamu berikan untuk meningkatkan perkembangan ekonomi kreatif di Indonesia?</p>
          `
        case 'Urban Planning':
          return `
            <p>Manusia dan hunian tidak bisa dipisahkan, terutama generasi millennial yang saat ini mendominasi penduduk Indonesia. Menurut Badan Pusat Statistik, dari jumlah penduduk usia produktif, kelompok usia yang mendominasi adalah usia 15-39 tahun dengan jumlah sekitar 84,75 juta (32% dari total penduduk Indonesia dengan jumlah 258 juta pada tahun 2017). Artinya, kemungkinan besar beberapa tahun kedepan generasi millennial akan mendominasi jumlah penduduk di Indonesia.</p>
            <p>Namun yang menjadi permasalahan saat ini adalah terjadinya penyusutan lahan produktif yang digunakan untuk hunian. Selain hunian, lahan produktif juga digunakan untuk proyek nasional dan sejumlah industri baru. Menurut data Rumah123, kenaikan harga rumah jauh lebih besar dibanding kenaikan pendapatan pertahunnya. Disamping itu, menurut pendiri Trinity Property Group Bong Chandra menyebutkan beberapa kesulitan generasi millennial belum bisa memiliki property di usia muda karena salah satu diantaranya adalah financial planning yang buruk.</p>
            <p>APABILA KAMU DIPERCAYA UNTUK MENJADI SALAH SATU ORANG YANG BISA MENINGKATKAN DAN MENGEMBANGKAN KUALITAS PERENCANAAN HUNIAN YANG LAYAK BAGI GENERASI MILLENNIAL KEDEPANNYA, APA SAJA KONSEP DAN INOVASI YANG AKAN KAMU LAKUKAN? Ketika New York dan Hongkong memiliki konsep Urban Design Guidelines, bagaimana dengan Indonesia?</p>
          `
      }
    }
  },
  methods: {
    validate () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((valid) => {
          resolve({ valid: valid, model: this.model });
        });
      })
    }
  }
}
</script>
