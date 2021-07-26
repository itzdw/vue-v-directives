<template>
  <div
    ref="a"
    v-countdown="10"
    @countdown-end="countdownEnd"
    @click="handleClick"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      count: 20,
      text: '进入全屏',
      flag: true
    }
  },
  methods: {
    countdownEnd() {
      alert('倒计时结束')
    },
    handleClick() {
      this.$nextTick(()=>{
        this.$refs.a.countdownStart()
      })
    }
  }
}
</script>

<style scoped>
.container {
  background: #fff;
}
</style>
