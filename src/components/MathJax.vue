<template>
  <span ref="mathJaxEl">{{formula}}</span>
</template>

<script>
export default {
  props: {
    formula: {
      type: String
    },
    safe: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {
    formula () {
      this.renderMathJax()
    }
  },
  mounted () {
    this.renderMathJax()
  },
  methods: {
    renderContent () {
      if (this.safe) {
        this.$refs.mathJaxEl.textContent = this.formula
      } else {
        this.$refs.mathJaxEl.innerHTML = this.formula
      }
    },
    renderMathJax () {
      this.renderContent()
      if (window.MathJax) {
        
        window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]);
      }
    }
  }
}
</script>