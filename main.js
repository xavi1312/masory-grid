Vue.component("box-item", {
  props: ["image", "text"],
  template: `
  <div class="box">
   <div class="content">
    <img :src="image" />
    <p>{{text}}</p>
   </div>

  </div>`
});

const app = new Vue({
  el: "#app",
  data: {
    boxsInfo: [
      {
        id: 1,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684551.svg",
        text: "Responsive web design"
      },
      {
        id: 2,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684557.svg",
        text: "Web design"
      },
      {
        id: 3,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684573.svg",
        text: "Page not found"
      },
      {
        id: 4,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684655.svg",
        text: "Color piker"
      },
      {
        id: 5,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684648.svg",
        text: "Web settings"
      },
      {
        id: 6,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684609.svg",
        text: "Diamond web"
      },
      {
        id: 7,
        imageLink: "https://image.flaticon.com/icons/svg/2684/2684636.svg",
        text: "File explorer"
      }
    ]
  }
});
