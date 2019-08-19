const vm = new Vue({
  el: "#main",
  data: {
    saint_quartz: 0,
    summon_ticket: 0,
    summon: 0,
    rarity: 5,
    latest: {
      saint_quartz: 0,
      summon_ticket: 1,
      summon: 2
    }
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
    updateLatest: function(key) {
      for (let k of Object.keys(this.latest)) {
        this.latest[k]++
      }
      this.latest[key] = 0;
      for (let k of Object.keys(this.latest)) console.log(k, this.latest[k]);
    },
    updateSummon: function() {
      this.summon = Math.floor((Math.floor(this.saint_quartz / 3) + Number(this.summon_ticket)) * 1.1)
    }
  }
});