const { createApp } = Vue;

createApp({
  data() {
    return {
      kmh: 0,
      ms: 0,
      fromInput: ''
    };
  },
  methods: {
    onKmhInput() {
      if (this.fromInput !== 'kmh') {
        this.fromInput = 'kmh';
        this.ms = +(this.kmh / 3.6).toFixed(2);
        this.fromInput = '';
      }
    },
    onMsInput() {
      if (this.fromInput !== 'ms') {
        this.fromInput = 'ms';
        this.kmh = +(this.ms * 3.6).toFixed(2);
        this.fromInput = '';
      }
    }
  },
  mounted() {
    this.onKmhInput();
  }
}).mount('#app');
