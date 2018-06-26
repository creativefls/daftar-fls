<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="display-2">Pendaftaran FLS 2018</div>
      <br class="my-2">
      <v-card>
        <v-chip style="margin-top: -16px;" class="ml-4" color="primary" text-color="white">
          <div class="subheading">
            Syarat dan Ketentuan Delegates 2018
          </div>
        </v-chip>
        <v-card-text>
          <p>
            <v-icon small>fiber_manual_record</v-icon> Pemuda/pemudi berusia 18-25 tahun
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon> Mempunyai ketertarikan dalam isu sosial sesuai room Future Leader Summit 2017
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon> Bersedia membayar commitment fee, jika terpilih menjadi delegates
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon> Siap berkontribusi dan berjejaring di Future Leader Summit 2017
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon> Mengikuti peraturan kebijakan dan alur pendaftaran
          </p>
        </v-card-text>
      </v-card>
      <br class="my-2">
      <v-card>
        <v-chip style="margin-top: -16px;" class="ml-4" color="primary" text-color="white">
          <div class="subheading">
            Tahap Pendaftaran Delegates 2017
          </div>
        </v-chip>
        <v-card-text>
          <!-- FIXME: banyak html seperti link quote dsb -->
          <p>
            <v-icon small>fiber_manual_record</v-icon>
              Follow fanspage dan instagram Future Leader Summit 2017 : Future Leader Summit
              @FutureLeaderSummit
              @flsummit
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon>
            Daftar online melalui tombol link di bawah
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon>
            Setelah itu akan langsung mendapatkan konfirmasi melalui website dan email
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon>
            Download poster yang telah disediakan, kemudian upload di instagram kamu dengan caption
            <br>
            “Saya sudah berani untuk mulai berkarya dengan mendaftar Future Leader Summit 2017. Yuk, kalau kamu kapan? #DaretoCreate #FutureLeaderSummit2017”
            <br>
            lalu tag akun Future Leader Summit @FLSummit dan 5 teman kamu!
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon>
            Pengumuman penerimaan delegates akan diumumkan melalui email dan website resmi Future Leader Summit 2017
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon>
            Setelah pengumuman penerimaan delegates via email dan website Future Leader Summit 2017, delegates terpilih wajib melakukan konfrimasi dan pembayaran maksimal 3x24 jam via email PID masing-masing room.
          </p>
          <p>
            <v-icon small>fiber_manual_record</v-icon>
            Peserta waiting list akan dihubungi ketika ada calon delegates yang mengundurkan diri
          </p>
        </v-card-text>
      </v-card>
      <br class="my-2">
      <v-card>
        <v-card-text>
          <h3 class="text-xs-center">Grab the Chance, Take the Charge!</h3>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn color="primary" large round nuxt to="/daftar">Daftar Sekarang</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
