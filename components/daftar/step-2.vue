<template>
  <div>
    <div class="title primary__dark--text my-2">Data Diri</div>

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
      :items="placeOfBirthItems"
      :search-input.sync="searchPlaceOfBirth"
      autocomplete
      cache-items
      v-model="model.placeOfBirth"
      data-vv-as="Tempat Lahir"
      :error-messages="errors.collect('placeOfBirth')"
      v-validate="'required'"
      data-vv-name="placeOfBirth"
      label="Tempat Lahir"
      :loading="loadingPlaceOfBirth"
      item-value="name"
      item-text="name"
    >
      <div slot="no-data" @click="applyOtherPlaceOfBirth()">{{ loadingPlaceOfBirth ? 'Loading...' : searchPlaceOfBirth }}</div>
    </v-select>

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
        min="1993-01-01"
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
      item-value="name"
      item-text="alias"
    ></v-select>

    <div class="title primary__dark--text my-2">Alamat Domisili</div>
    <v-select
      :items="provinceItems"
      item-value="name"
      item-text="name"
      return-object
      :loading="loadingProvince"
      v-model="model.province"
      data-vv-as="Provinsi"
      :error-messages="errors.collect('province')"
      v-validate="'required'"
      data-vv-name="province"
      label="Provinsi"
    ></v-select>
    <v-select
      :items="regencyItems"
      :search-input.sync="searchRegency"
      autocomplete
      cache-items
      item-value="name"
      item-text="name"
      :loading="loadingRegency"
      v-model="model.regency"
      data-vv-as="Kota/Kabupaten"
      :error-messages="errors.collect('regency')"
      v-validate="'required'"
      data-vv-name="regency"
      label="Kota/Kabupaten"
    >
      <div slot="no-data" @click="applyOtherRegency()">{{ searchRegency }}</div>
    </v-select>
    <v-text-field
      v-model="model.domicileAddress"
      :error-messages="errors.collect('address')"
      v-validate="'required'"
      data-vv-name="address"
      data-vv-as="Alamat"
      label="Alamat">
    </v-text-field>

    <div class="title primary__dark--text my-2">Institusi</div>
    <v-select
      :items="institutionItems"
      :search-input.sync="searchInstitutions"
      autocomplete
      cache-items
      v-model="model.institution"
      data-vv-as="Sekolah/Universitas"
      :error-messages="errors.collect('institution')"
      v-validate="'required'"
      data-vv-name="institution"
      label="Sekolah/Universitas"
      :loading="loadingUniversity"
      item-value="name"
      item-text="name"
    >
      <div slot="no-data" @click="applyOtherInstitution()">{{ loadingUniversity ? 'Loading...' : searchInstitutions }}</div>
    </v-select>

    <div class="title primary__dark--text my-2">Kontak</div>
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
      type="email"
      label="Email"
      data-vv-as="Email"
      :error-messages="errorEmail"
      v-validate="'required|email|unique'"
      data-vv-name="email"
      data-vv-delay="700"
      :loading="loadingCheckEmail"
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
import swal from 'sweetalert2'
import _debounce from 'lodash/debounce'
import _orderBy from 'lodash/orderBy'

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
        regency: '',
        institution: '',
        phone: '',
        email: '',
        socmed: {
          line: '',
          instagram: ''
        },
      },
      loadingCheckEmail: false,
      loadingPlaceOfBirth: false,
      loadingProvince: false,
      loadingRegency: false,
      loadingUniversity: false,
      placeOfBirthItems: [],
      searchPlaceOfBirth: '',
      regencyItems: [],
      searchRegency: '',
      genderItems: [
        { name: 'male', alias: 'Laki-Laki' },
        { name: 'female', alias: 'Perempuan' }
      ],
      provinceItems: [],
      institutionItems: [],
      searchInstitutions: '',
      menuDateOfBirth: false
    }
  },
  computed: {
    errorEmail () {
      if(!this.loadingCheckEmail) return this.errors.collect('email')
    }
  },
  watch: {
    menuDateOfBirth (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    'model.province' (val) {
      if (val) this.fetchDataRegencies()
    },
    searchPlaceOfBirth: _debounce(function (e) {
      e && this.fetchDataPlaceOfBirth()
    }, 500),
    searchInstitutions: _debounce(function (e) {
      e && this.fetchDataUniversities()
    }, 500),
  },
  methods: {
    saveDateOfBirth (date) {
      this.$refs.menu.save(date)
    },
    validate () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((valid) => {
          resolve({ valid: valid, model: this.model });
        });
      })
    },
    fetchDataPlaceOfBirth () {
      this.loadingPlaceOfBirth = true
      this.$axios.get('http://128.199.72.101:3000/api/dataregencies', {
        params: {
          filter: {
            limit: 20,
            where: {
              // options untuk supaya case insensitive -> regex
              name: { like: this.searchPlaceOfBirth + '.*', options: 'i' }
            }
          }
        }
      }).then(response => {
        console.log('tmpt lahir ', response.data);
        this.placeOfBirthItems = response.data
        this.loadingPlaceOfBirth = false
      }).catch(error => {
        console.log('err tmpt lahir ', error)
        this.loadingPlaceOfBirth = false
      })
    },
    fetchDataUniversities () {
      this.loadingUniversity = true
      this.$axios.get('http://128.199.72.101:3000/api/datauniversities', {
        params: {
          filter: {
            limit: 20,
            where: {
              // options untuk supaya case insensitive -> regex
              name: { like: this.searchInstitutions + '.*', options: 'i' }
            }
          }
        }
      }).then(response => {
        console.log('provinsi ', response.data);
        this.institutionItems = response.data
        this.loadingUniversity = false
      }).catch(error => {
        console.log('err provinsi ', error)
        this.loadingUniversity = false
      })
    },
    fetchDataProvinces () {
      this.loadingProvince = true
      this.$axios.get('http://128.199.72.101:3000/api/dataprovinces').then(response => {
        console.log('provinsi ', response.data);
        this.provinceItems = _orderBy(response.data, ['name'], ['asc'])
        this.loadingProvince = false
      }).catch(error => {
        console.log('err provinsi ', error)
        this.loadingProvince = false
      })
    },
    fetchDataRegencies () {
      this.loadingRegency = true
      this.regencyItems = []
      this.model.regency =  ''
      this.$axios.get('http://128.199.72.101:3000/api/dataregencies', {
        params: {
          filter: {
            where: {
              provinceId: this.model.province.selfId || '100'
            }
          }
        }
      }).then(response => {
        console.log('regency ', response.data);
        this.regencyItems = response.data
        this.loadingRegency = false
      }).catch(error => {
        console.log('err regency ', error)
        this.loadingRegency = false
      })
    },
    applyOtherInstitution () {
      this.model.institution = this.searchInstitutions
      this.institutionItems.push({ id: 'otherInstitution', name: this.searchInstitutions })
    },
    applyOtherPlaceOfBirth () {
      this.model.placeOfBirth = this.searchPlaceOfBirth
      this.placeOfBirthItems.push({ id: 'othePlaceOfBirth', name: this.searchPlaceOfBirth })
    },
    applyOtherRegency () {
      this.model.regency = this.searchRegency
      this.regencyItems.push({ id: 'otherRegency', name: this.searchRegency })
    },
    handleValidateEmail () {
      setTimeout(() => {
        if (this.errors.items.length < 1) {
          this.checkValidEmail()
        }
      })
    },
    checkValidEmail () {
      this.loadingCheckEmail = true
      return this.$axios.$get('http://localhost:3000/api/Registrars/check-email', {
        params: { email: this.model.email }
      }).then(response => {
        this.loadingCheckEmail = false
        return {
          valid: response.valid,
          data: {
            message: response.message
          }
        };
      }).catch(error => {
        this.loadingCheckEmail = false
        if (error.response) {
          return {
            valid: false,
            data: {
              message: error.response.data.error.message
            }
          }
        }
        return {
          valid: false,
          data: {
            message: error.message
          }
        }
      })
    },
  },
  mounted () {
    this.fetchDataProvinces()
    this.$validator.extend('unique', {
      validate: this.checkValidEmail,
      getMessage: (field, params, data) => data.message
    });
  }
}
</script>
