const app = Vue.createApp({
  data() {
    return {
      name: "Vince",
      age: 19,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
