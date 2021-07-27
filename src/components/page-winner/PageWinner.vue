<template>
  <div class="PageWinner text-center">
    <div class="PageWinner__line">
      <router-link :to="{ name: 'home' }">Home</router-link>
    </div>

    <strong class="PageWinner__strong">¡Felicitaciones al ganador!</strong>
    <h2 class="PageWinner__title" v-if="displaySellerWinner">{{ displaySellerWinner.name }}</h2>

    <ImageUser />

    <div class="PageWinner__button">
      <BaseButton @click="generateInvoice" class="btn--secondary">
        <IconShare />
        Información del premio
      </BaseButton>
      <div v-if="urlInvoice" class="text-center">
        <p>
          <a :href="urlInvoice" target="_blank">Descarga la factura</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { now } from '@/helpers'

import { mapGetters } from 'vuex'

export default {
  name: 'PageWinner',
  data () {
    return {
      urlInvoice: ''
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'sellers/displayIsLoading',
      displaySellerWinner: 'sellers/displaySellerWinner',
      displayTotalScore: 'sellers/displayTotalScore'
    })
  },
  methods: {
    _processInvoiceData (seller, quantity = 0) {
      const date = now()
      const dueDate = now()
      const client = 1 // Generic client
      const items = [{
        id: 2,
        price: 1.0,
        quantity,
        description: `* Este premio es para ${seller.name}`
      }] // Generic product
      return {
        date,
        dueDate,
        client,
        items,
        seller: seller.id
      }
    },
    _downloadFile (url) {
      var filename = 'invoice.pdf'
      // SOURCE: https://stackoverflow.com/questions/34691525/how-to-download-pdf-automatically-using-js
      var link = document.createElement('a')
      link.href = url
      link.download = filename
      link.dispatchEvent(new MouseEvent('click'))
    },
    _generateInvoicePreview (payload) {
      this.$store.dispatch('invoices/invoicePreview', payload.data)
        .then((response) => {
          if (response && response.pdfUrl) {
            this.urlInvoice = response.pdfUrl
            // this._downloadFile(response.pdfUrl)
          }
        })
    },
    _createInvoice (payload) {
      this.$store.dispatch('invoices/createInvoice', payload.data)
        .then((response) => {
          if (response && response.data.id) {
            // Update invoice with a invoice identificator to avoid duplicate the invoice
            const payloadSeller = {
              id: payload.seller.id,
              data: {
                identification: response.data.id // invoiceId
              }
            }
            this.$store.dispatch('sellers/update', payloadSeller)
          }
        })
    },
    generateInvoice () {
      const seller = this.displaySellerWinner
      if (!seller.id) {
        return
      }

      const quantity = this.displayTotalScore
      const payloadInvoice = this._processInvoiceData(seller, quantity)
      console.log(!Number(seller.identification))
      if (!Number(seller.identification)) {
        this._createInvoice({ data: payloadInvoice, seller })
      }

      this._generateInvoicePreview({ data: payloadInvoice })
    }
  }
}
</script>

<style lang="scss" scoped>
  .PageWinner {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-left: 1rem; // 45 / 16
    margin-right: 1rem; // 45 / 16
    background-color: var(--white);
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .PageWinner__title {
    color: var(--green-100);
  }

  .PageWinner__strong {
    margin-top: 2rem;
  }

  .PageWinner__button {
    margin-bottom: 2rem;
  }

  .PageWinner__line {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 576px) {
    .PageWinner {
      margin: 0 auto;
      width: 570px;
    }
  }
</style>
