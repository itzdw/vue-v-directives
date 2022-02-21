<template>
  <div>
    <div
      ref="a"
      v-countdown="10"
      @countdown-end="countdownEnd"
      @click="handleClick"
    ></div>
    <div class="background" v-watermarker="'davidZhou版权所有'"></div>
    <span v-disabled="1000" @click="success">文本复制</span>
  </div>
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
    },
    success(val) {
      console.log(666)
    }
  }
}
</script>

<style scoped>
.container {
  background: #fff;
}
.background {
  height: 400px;
}
</style>
