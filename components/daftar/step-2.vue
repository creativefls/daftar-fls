<template>
  <div>
    <v-subheader>Data Diri</v-subheader>
    <v-divider></v-divider>

    <v-text-field
      v-model="model.fullName"
      label="Nama Lengkap"
      data-vv-as="Nama Lengkap"
      :error-messages="errors.collect('name')"
      v-validate="'required'"
      data-vv-name="name"
    ></v-text-field>

    <v-text-field
      v-model="model.nickName"
      label="Nama Panggilan"
      data-vv-as="Nama Panggilan"
      :error-messages="errors.collect('nickName')"
      v-validate="'required'"
      data-vv-name="nickName"
    ></v-text-field>

    <v-select
      :items="cityItems"
      v-model="model.placeOfBirth"
      data-vv-as="Tempat Lahir"
      :error-messages="errors.collect('placeOfBirth')"
      v-validate="'required'"
      data-vv-name="placeOfBirth"
      label="Tempat Lahir"
      item-value="text"
    ></v-select>

    <v-menu
      ref="menu"
      lazy
      :close-on-content-click="false"
      v-model="menuDateOfBirth"
      transition="scale-transition"
      full-width
      :nudge-right="40"
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        label="Tanggal Lahir"
        v-model="model.dateOfBirth"
        data-vv-as="Tanggal Lahir"
        :error-messages="errors.collect('dateOfBirth')"
        v-validate="'required'"
        data-vv-name="dateOfBirth"
        readonly
      ></v-text-field>
      <v-date-picker
        ref="picker"
        v-model="model.dateOfBirth"
        @change="saveDateOfBirth"
        min="1980-01-01"
        :max="new Date().toISOString().substr(0, 10)"
      ></v-date-picker>
    </v-menu>

    <v-select
      :items="genderItems"
      v-model="model.gender"
      data-vv-as="Jenis Kelamin"
      :error-messages="errors.collect('gender')"
      v-validate="'required'"
      data-vv-name="gender"
      label="Jenis Kelamin"
      item-value="text"
    ></v-select>

    <v-subheader>Alamat</v-subheader>
    <v-divider></v-divider>
    <v-select
      :items="provinceItems"
      v-model="model.province"
      data-vv-as="Provinsi"
      :error-messages="errors.collect('province')"
      v-validate="'required'"
      data-vv-name="province"
      label="Provinsi"
      item-value="text"
    ></v-select>
    <v-select
      :items="cityItems"
      v-model="model.city"
      data-vv-as="Kota/Kabupaten"
      :error-messages="errors.collect('city')"
      v-validate="'required'"
      data-vv-name="city"
      label="Kota/Kabupaten"
      item-value="text"
    ></v-select>
    <v-text-field
      v-model="model.domicileAddress"
      :error-messages="errors.collect('address')"
      v-validate="'required'"
      data-vv-name="address"
      data-vv-as="Alamat Domisili"
      textarea
      rows="3"
      label="Alamat Domisili">
    </v-text-field>

    <v-subheader>Institusi</v-subheader>
    <v-divider></v-divider>
    <v-select
      :items="institutionItems"
      v-model="model.institution"
      data-vv-as="Sekolah/Universitas"
      :error-messages="errors.collect('institution')"
      v-validate="'required'"
      data-vv-name="institution"
      label="Sekolah/Universitas"
      item-value="text"
    ></v-select>

    <v-subheader>Kontak</v-subheader>
    <v-divider></v-divider>
    <v-text-field
      v-model="model.phone"
      label="Nomor Telepon"
      data-vv-as="Nomor Telepon"
      :error-messages="errors.collect('phone')"
      v-validate="'required|numeric'"
      data-vv-name="phone"
    ></v-text-field>
    <v-text-field
      v-model="model.email"
      label="Email"
      data-vv-as="Email"
      :error-messages="errors.collect('email')"
      v-validate="'required|email'"
      data-vv-name="email"
    ></v-text-field>
    <v-text-field
      v-model="model.socmed.instagram"
      label="Akun Instagram"
      data-vv-as="Akun Instagram"
      :error-messages="errors.collect('instagram')"
      v-validate="'required'"
      data-vv-name="instagram"
      prefix="@"
    ></v-text-field>
    <v-text-field
      v-model="model.socmed.line"
      label="Akun Line"
      data-vv-as="Akun Line"
      :error-messages="errors.collect('line')"
      v-validate="'required'"
      data-vv-name="line"
    ></v-text-field>

  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        fullName: '',
        nickName: '',
        placeOfBirth: '',
        dateOfBirth: '',
        gender: '',
        domicileAddress: '',
        province: '',
        city: '',
        institution: '',
        phone: '',
        email: '',
        socmed: {
          line: '',
          instagram: ''
        },
      },
      cityItems: [
        'semarnang',
        'solo',
        'demak',
        'kudus'
      ],
      genderItems: [
        'Laki-Laki',
        'Perempuan'
      ],
      provinceItems: [
        'semarnang',
        'solo',
        'demak',
        'kudus'
      ],
      institutionItems: [
        'semarnang',
        'solo',
        'demak',
        'kudus'
      ],
      menuDateOfBirth: false
    }
  },
  watch: {
    menuDateOfBirth (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    saveDateOfBirth (date) {
      this.$refs.menu.save(date)
    },
    validate () {
      this.$validator.validateAll().then(() => {
        if (this.errors.any()) {
          return false
        } else {
          return true
        }
      })
    }
  }
}
</script>
