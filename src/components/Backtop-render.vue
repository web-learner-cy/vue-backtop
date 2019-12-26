
<script>
import { throtte } from "@/utils/throttte-debounce";
export default {
  name: "backtop-render",
  props: {
    target: String,
    bottom: {
      type: Number,
      defalut: 50
    },
    right: {
      type: Number,
      defalut: 50
    },
    showHeight: {
      type: Number,
      default: 200
    },
    animattion: {
      type: Boolean,
      default: true
    }
  },
  render(h) {
    return (
      <transition name="el-fade-in">
        <div
          class="backtop-render"
          v-show={this.isShow}
          onclick={this.goToTop}
          style={this.styleObject}
        >
          {this.$slots.default || <span>backtop</span>}
        </div>
      </transition>
    );
  },
  computed: {
    styleObject() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      };
    }
  },
  data() {
    return {
      isShow: false,
      el: null,
      container: null
    };
  },
  mounted() {
    // 确保元素挂载之后
    this.$nextTick(() => {
      this.init();
      this.throtteScrollHandler = throtte(this.handleScroll, 300);
      this.container.addEventListener("scroll", this.throtteScrollHandler);
    });
  },
  methods: {
    init() {
      if (this.target) {
        this.container = document.querySelector(this.target);
        if (!this.container)
          throw new Error(`target is not existed: ${this.target}`);
      } else {
        this.container = document;
        this.el = document.documentElement || document.body;
      }
      this.el = this.container.children[0];
    },
    handleScroll() {
      let scrollTop = this.container.scrollTop;
      // let outerHeight = this.container.offsetHeight;
      // let innerHeight = this.el.offsetHeight;
      // let distanceBottom = innerHeight - outerHeight - scrollTop; // 计算距离底部的距离
      // 滑动出去距离
      if (scrollTop >= this.showHeight) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    goToTop() {
      if (this.animattion) {
        let step = 0;
        let timeId = setInterval(() => {
          if (this.container.scrollTop <= 0) {
            clearInterval(timeId);
            this.container.scrollTop = 0;
            return;
          }
          step += 10;
          this.container.scrollTop -= step;
        }, 20);
      } else {
        this.container.scrollTop = 0;
      }
    }
  },
  beforeDestroy() {
    this.container.removeEventListener("scroll", this.throtteScrollHandler);
  }
};
</script>
<style lang="scss">
.backtop-render {
  position: fixed;
  // bottom: 100px;
  // right: 100px;
  padding: 20px;
  box-shadow: 0px 0px 5px #ddd;
  border-radius: 10px;
}
</style>