// 禁止表情及特殊字符

/**
 * 背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。
 * 我们常规方法是在每一个表单的 on-change 事件上做处理。
 * 使用：将需要校验的输入框加上 v-emoji 即可
 * <input type="text" v-model="note" v-emoji />
 */

let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type);
};

const trigger = (el, type) => {
  const e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};

const emoji = {
  bind: function (el) {
    // 正则规则可根据需求自定义
    var regRule = /[^u4E00-u9FA5|d|a-zA-Z|rns,.?!，。？！…—&$=()-+/*{}[]]|s/g;
    let $inp = findEle(el, "input");
    el.$inp = $inp;
    $inp.handle = function () {
      let val = $inp.value;
      $inp.value = val.replace(regRule, "");
      trigger($inp, "input");
    };
    $inp.addEventListener("keyup", $inp.handle);
  },
  unbind: function (el) {
    el.$inp.removeEventListener("keyup", el.$inp.handle);
  },
};

export default emoji;
