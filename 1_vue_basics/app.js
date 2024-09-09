const app = Vue.createApp({
  //we can store data and functions in here
  //also template html: (but this is bad pratice, better do it in html doc)
  // template: "<h2>I am a template </h2>",

  //data is a function and in return is an object
  //this in here will only work in the scopre of what we mounted
  data() {
    return {
      url: "https://moviesphere-flo.netlify.app/",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "Patrick Sebastien",
          img: "assets/plutus4.webp",
          isFav: true,
        },
        {
          title: "The way the wind",
          author: "Patrick Fiori",
          img: "assets/plutus5.webp",
          isFav: true,
        },
        {
          title: "The wind of the way",
          author: "Patrick Bruel",
          img: "assets/plutus6.webp",
          isFav: false,
        },
      ],
      // title: "The final empire",
      // //then we put {{title}} in html doc => this is a dynamic variable
      // author: "Flo the flo",
      // age: "203",
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      //this will access whats in the fn
      this.title = "Words of Randiance";
      //we can alos do this if we pass an argument in the function in the html doc
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
