<template>
  <div class="PageVoteResult__button">
    <BaseButton
      class="btn--secondary"
      v-clipboard:copy="messageToCopy"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">
      <IconShare />
      {{ label }}
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'ButtonShare',
  data () {
    return {
      label: 'Comparte con tus amigos'
    }
  },
  computed: {
    messageToCopy () {
      return `${location.host}`
    }
  },
  methods: {
    onCopy (e) {
      this.label = 'Copiando link...'
      setTimeout(() => {
        this.label = 'Comparte con tus amigos'
      }, 1000)
    },
    onError () {
      console.log('Failed to copy texts')
    }
  }
}
</script>
