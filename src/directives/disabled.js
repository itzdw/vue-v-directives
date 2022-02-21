const disabled = {
  inserted(el, binding) {
    el.onclick = function () {
      const TAGNAMES = ['BUTTON', 'INPUT', 'OPTION', 'SELECTION']
      if(!TAGNAMES.includes(el.tagName)){
        console.warn('v-disable: 功能失效！因为该标签无法使用disable属性，请换button等标签试试！')
      }
      if (!el.disabled) {
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, binding.value || 1000);
      }
    };
  },
};

export default disabled;
