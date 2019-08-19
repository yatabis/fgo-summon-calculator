const vm = new Vue({
  el: "#main",
  data: {
    saint_quartz: 0,
    summon_ticket: 0,
    summon: 0
  },
  watch: {
    saint_quartz: function() {
      this.updateSummon()
    },
    summon_ticket: function () {
      this.updateSummon()
    }
  },
  methods: {
    updateSummon: function() {
      this.summon = Math.floor((Math.floor(this.saint_quartz / 3) + Number(this.summon_ticket)) * 1.1)
    }
  }
});