export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getTagLabel() {
      return this.data.required ? "必須" : "";
    },
  },
  methods: {
    setInput(event) {
      console.log(event.target.value);
      // this.data.value = event.target.value;
      // this.setValue(this.data.name, event.target.value);
    },
  },
};
