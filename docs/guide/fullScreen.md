# 全屏显示 fullScreen
1. 给需要全屏显示的元素绑定ref属性并赋任意值X;
2. 在触发按钮绑定fullScreen指令，并将X作为该指令的参数，例如：v-full-screen:X
3. 等号后边传入boolean类型的值，true为进入全屏，false为退出全屏，默认为false

::: warning 注意
只支持PC端，移动端暂不支持
:::

## 正常用法
```vue
<template>
  <div ref="box" style="background: #fff;">
    <p>
      《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？欣赏它的歌词——“太阳当空照花儿对我笑/小鸟说早早早/你为什么背上小书包/我要上学校天天不迟到/爱学习爱劳动/长大要为人民立功劳”——一个时代有一个语境，这首歌诞生在那个英雄主义讲求奉献的年代，当时过境迁的我们青春不再时，我们的孩子依然会唱着我们那个年代哼唱的这首儿歌，饱含在这简单而质朴的旋律中的是无数老去的孩子们对下一代的殷切期望，即使我们拙于用语言表达自己对他们的无限疼爱。这首歌的曲作者段福培很偶然地在如此单调的旋律里把一个个方块字排列组合，成就了经典，也成就了无数老孩子的美好记忆
    </p>
    <button v-full-screen:box="true">进入全屏</button>
    <button v-full-screen:box="false">退出全屏</button>
  </div>
</template>
```
<template>
  <div ref="box" style="background: #fff;">
    <p>
      《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？欣赏它的歌词——“太阳当空照花儿对我笑/小鸟说早早早/你为什么背上小书包/我要上学校天天不迟到/爱学习爱劳动/长大要为人民立功劳”——一个时代有一个语境，这首歌诞生在那个英雄主义讲求奉献的年代，当时过境迁的我们青春不再时，我们的孩子依然会唱着我们那个年代哼唱的这首儿歌，饱含在这简单而质朴的旋律中的是无数老去的孩子们对下一代的殷切期望，即使我们拙于用语言表达自己对他们的无限疼爱。这首歌的曲作者段福培很偶然地在如此单调的旋律里把一个个方块字排列组合，成就了经典，也成就了无数老孩子的美好记忆
    </p>
    <button v-full-screen:box="true">进入全屏</button>
    <button v-full-screen:box="false">退出全屏</button>
  </div>
</template>

## 事件监听
```vue
<template>
  <div ref="box2" style="background: #fff;">
    <p>
      《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？欣赏它的歌词——“太阳当空照花儿对我笑/小鸟说早早早/你为什么背上小书包/我要上学校天天不迟到/爱学习爱劳动/长大要为人民立功劳”——一个时代有一个语境，这首歌诞生在那个英雄主义讲求奉献的年代，当时过境迁的我们青春不再时，我们的孩子依然会唱着我们那个年代哼唱的这首儿歌，饱含在这简单而质朴的旋律中的是无数老去的孩子们对下一代的殷切期望，即使我们拙于用语言表达自己对他们的无限疼爱。这首歌的曲作者段福培很偶然地在如此单调的旋律里把一个个方块字排列组合，成就了经典，也成就了无数老孩子的美好记忆
    </p>
    <button
      v-full-screen:box2="flag"
      @enter-full-screen="enterFullScreen"
      @exit-full-screen="exitFullScreen"
    >{{text}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '进入全屏',
      flag: true
    }
  },
  methods: {
    enterFullScreen() {
      console.log('进入全屏')
      this.text = '退出全屏'
      this.flag = false
    },
    exitFullScreen() {
      console.log('退出全屏')
      this.text = '进入全屏'
      this.flag = true
    }
  }
}
</script>
```

<template>
  <div ref="box2" style="background: #fff;">
    <p>
      《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？欣赏它的歌词——“太阳当空照花儿对我笑/小鸟说早早早/你为什么背上小书包/我要上学校天天不迟到/爱学习爱劳动/长大要为人民立功劳”——一个时代有一个语境，这首歌诞生在那个英雄主义讲求奉献的年代，当时过境迁的我们青春不再时，我们的孩子依然会唱着我们那个年代哼唱的这首儿歌，饱含在这简单而质朴的旋律中的是无数老去的孩子们对下一代的殷切期望，即使我们拙于用语言表达自己对他们的无限疼爱。这首歌的曲作者段福培很偶然地在如此单调的旋律里把一个个方块字排列组合，成就了经典，也成就了无数老孩子的美好记忆
    </p>
    <button
      v-full-screen:box2="flag"
      @enter-full-screen="enterFullScreen"
      @exit-full-screen="exitFullScreen"
    >{{text}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '进入全屏',
      flag: true
    }
  },
  methods: {
    enterFullScreen() {
      console.log('进入全屏')
      this.text = '退出全屏'
      this.flag = false
    },
    exitFullScreen() {
      console.log('退出全屏')
      this.text = '进入全屏'
      this.flag = true
    }
  }
}
</script>

## 事件回调
|事件名称|说明|回调参数|
|---|---|---|
|enter-full-screen|进入全屏。|-|
|exit-full-screen|退出全屏。|-|
