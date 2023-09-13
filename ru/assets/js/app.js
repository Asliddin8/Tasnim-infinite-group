// const { log } = require("console");

// let main_cards = document.querySelector(".main_cards");
// let modal = document.querySelector(".modal")
// let clos = document.querySelector(".clos")
// let modal_body = document.querySelector(".modal-body")




// for (let index = 0; index < cards.length; index++) {
  //   let col = document.createElement("div");
//   col.classList.add("col-xl-3");
//   col.classList.add("col-sm-4");
//   col.classList.add("col-md-6");
//   col.setAttribute("data-index", index);

//   let card = document.createElement("div");
//   card.classList.add("card");
//  let img = document.createElement("img")
// img.src = cards[index].img
//   // let label = document.createElement("label");
//   // label.classList.add("label")
//   // label.innerHTML = "Raqamingizni kiriting "
//   // let input = document.createElement("input");
//   // input.classList.add("input")
//   // input.placeholder = "Masal:+950628888"
//   // input.maxLength = 13
//   // input.minLength = 13

//   let btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.classList.add("btn-success");
//   btn.classList.add("locationTG");
//   btn.innerHTML = "Buyurtma berish";

//   let cardBody = document.createElement("div");
//   let h4 = document.createElement("h4");
//   h4.innerHTML = cards[index].title;


//   let p = document.createElement("p");
//   p.innerHTML = cards[index].decription;
//   let price = document.createElement("p");
//   price.innerHTML = cards[index].price;

//   cardBody.appendChild(h4);
//   cardBody.appendChild(p);
//   cardBody.appendChild(price);
//   // modal_body.appendChild(label);
//   // modal_body.appendChild(input);
//   card.appendChild(img);
//   card.appendChild(cardBody);
//   card.appendChild(btn);
//   col.appendChild(card);
//   main_cards.appendChild(col);

//   col.addEventListener("click", () => {
  //     modal.classList.add("modal-active")
  //     displayUserInfo(index);
  //     // getLocationConstant()
  
  //   });
  
  
  //   clos.addEventListener("click", () => {
    //     modal.classList.add("modal-non")
    
    //   });
    
    // }
    let go = document.querySelector(".go")
    go.addEventListener("click", () => {
      // displayUserInfo(index);
      getLocationConstant()
  // window.location.reload()
  console.log("yes");
});
function displayUserInfo(index) {
  const user = cards[index];
  selectCard.title = user.title
  selectCard.decription = user.decription
  selectCard.input = user.input
  
  console.log('Title', selectCard);
}

// userList.forEach((user, index) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = user.name;
//   listItem.setAttribute("data-index", index); // Storing the index as a custom attribute
//   userListElement.appendChild(listItem);

// Adding click event listener to each list item
// listItem.addEventListener("click", () => {
//   displayUserInfo(index);
// });
// });

const token = "6293495868:AAHW_RzYea3fyUHkrSQ5155k_nAfWRIvha4";
const chat_id = "6554547092";
const Url_API = `https://api.telegram.org/bot${token}/sendMessage`;
const names = document.querySelector(".names");
const numbers = document.querySelector(".numbers");
const comments = document.querySelector(".comments");
// const count = document.querySelector(".count")
function getLocationConstant() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
    console.log("YEs");
  } else {
    alert("Brauzeringiz yoki qurilmangiz Geolocation-ni qo‘llab-quvvatlamaydi");
  }
}

function onGeoSuccess(event) {
  let lat = event.coords.latitude;
  let lng = event.coords.longitude;
  let link = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  //   let position = `<b>Foydalanuvchi joylashuvi latitude: ${event.coords.latitude}</b>\n`;
  //    position += `<b>Foydalanuvchi joylashuvi longitude:  ${event.coords.longitude}</b>\n`;
  // position += `<b>Foydalanuvchi joylashuvi latitude: ${url}</b>\n`

  // If we have a successful location update
  // position += `<b>Fastfood:  ${Numbers.textContent}</b>\n`;
  let position = `<b>Your name: ${names.value} </b>\n`;
  position = `<b>Your locaton:  ${link}</b>\n`;
  position += `<b>Your number :${numbers.value}</b>\n`;
  position += `<b>Your comment:${comments.textContent}</b>\n`;
  // position += `<b>Buyurmta soni:${count.value}</b>\n`;

  axios
    .post(Url_API, {
      chat_id: chat_id,
      parse_mode: "html",
      text: position,
    })
    .then((event) => {
      //console.log(response.data.token);
      return event.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
// If something has gone wrong with the geolocation request
function onGeoError(event) {
  alert("Error code " + event.code + ". " + event.message);
}




