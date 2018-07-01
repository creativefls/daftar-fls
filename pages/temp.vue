<template>
  <div>asd</div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  data () {
    return {
      formModel: {
        nickName: 'gasing',
        email: 'asdfa@adf.com'
      }
    }
  },
  mounted()  {
    let self = this
    swal({
      title: 'Terima kasih, ' + self.formModel.nickName,
      html: 'Kamu telah terdaftar dengan email <b>' + self.formModel.email + '</b>. <a href="/images/grab-the-chance.jpeg" download>lalala</a> Ingat selalu email ini, karena pengumuman hasil seleksi akan menggunakan email tersebut. Untuk info lebih lanjut pantau sosial media FLS 2018',
      type: 'success',
      allowOutsideClick: false,
      confirmButtonText: 'OK',
    })
  }
}
</script>
