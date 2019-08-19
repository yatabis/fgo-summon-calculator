const combination = (a, b) => {
  let c = 1
  for (let i = 1; i <= b; i++) {
    c = c * (a - i + 1) / i
  }
  return c
}

const vm = new Vue({
  el: "#main",
  data: {
    saint_quartz: 30,
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
    },
    hit: function () {
      return 0.008
    },
    probability: {
      get: function () {
        return combination(this.summon, this.np_level) * this.hit**this.np_level * (1 - this.hit) ** (this.summon - this.np_level)
      }
    }
  },
  methods: {
    updateLatest: function (key) {
      for (let k of Object.keys(this.latest)) {
        this.latest[k]++
      }
      this.latest[key] = 0
      for (let k of Object.keys(this.latest)) console.log(k, this.latest[k])
    },
  }
})