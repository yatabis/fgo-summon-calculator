const vm = new Vue({
  el: "#main",
  data: {
    saint_quartz: 0,
    summon_ticket: 0,
    rarity: 5,
    np_level: 1,
    latest: {
      saint_quartz: 0,
      summon_ticket: 1,
      summon: 2
    }
  },
  computed: {
    summon: {
      get: function () {
        return Math.floor((Math.floor(this.saint_quartz / 3) + this.summon_ticket) * 1.1)
      },
      set: function (summon) {
        this.saint_quartz = (Math.floor(summon / 11) * 10 + summon % 11) * 3
        this.summon_ticket = 0
      }
    }
  },
  methods: {
    updateLatest: function(key) {
      for (let k of Object.keys(this.latest)) {
        this.latest[k]++
      }
      this.latest[key] = 0
      for (let k of Object.keys(this.latest)) console.log(k, this.latest[k])
    },
  }
})