var countriesNameSelectElem = document.getElementById("countries-name-select");
var countriesNameOptions = document.getElementById("countries-name-options");

// create countery name array


  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      // array of objects
      console.log(data);
      // ----------------------- set countries name options ----------------------- //
      const countryNames = data.map((country) => country.name.common).sort();

      countryNames.forEach((countryName) => {
        countriesNameOptions.innerHTML += ` <option value="${countryName}">${countryName}</option> `;
      });
      // console.log(countryNames);
    }
  };
 
////////////////////////////////////////////////////////////////////////////////
var selectedCountry;
countriesNameSelectElem.addEventListener("change", function () {
  selectedCountry = countriesNameSelectElem.value;

  var bodySections = document.getElementsByClassName("body-section");

  //========================= show country data if the user select a country =================== //
  if (selectedCountry == "Israel") {
    for (var i = 0; i < bodySections.length; i++) {
      bodySections[i].classList.add("removed");
    }
    document.getElementById("main-content").innerHTML += ` 
     <div class = "israel-div"> 
      <p>Israel is not a country, but just an entity that occupies the Palestinian territories.</p>
      <p>This is part of what Israel does in Palestine: </p>

      <img src="images/israelCrimes/is3.jpg" alt="isreal crime">
      <img src="images/israelCrimes/is11.jpg" alt="isreal crime">
      <img src="images/israelCrimes/is12.jpg" alt="isreal crime">
      <img src="images/israelCrimes/is8.jpg" alt="isreal crime">
      <img src="images/israelCrimes/is4.jpg" alt="isreal crime">
      
      <p> For more information about the occupation and Israel's crimes, please watch  <a href ="https://youtu.be/f0oy-NicIgE?si=jzB2hhrflCjbaazJ" target = "blank">this video</a> </p>.
      </div> `;
  } else {
    for (var i = 0; i < bodySections.length; i++) {
      bodySections[i].classList.remove("removed");
    }
    //====================================================================================== //

    var xhrCountry = new XMLHttpRequest();
    xhrCountry.open("GET", `https://restcountries.com/v3.1/name/${selectedCountry}`, true);
    xhrCountry.onreadystatechange = function() {
      if (xhrCountry.readyState == 4 && xhrCountry.status == 200) {
        var data = JSON.parse(xhrCountry.responseText);

        console.log(data); // object of country

        // get and set  the flag image
        const flagURL = data[0].flags.png;
        document.getElementById("flag-img").src = `${flagURL}`;

        // get and set  the coatOfArms image
        const coatOfArmsURL = data[0].coatOfArms.png;
        document.getElementById("coat-of-arms-img").src = `${coatOfArmsURL}`;

        // checl if the country if united
        const isUNMember = data[0].unMember;
        if (isUNMember) {
          document.getElementById(
            "united-status"
          ).innerHTML = ` United Nations <i class="fas fa-check"></i>`;
        } else {
          document.getElementById(
            "united-status"
          ).innerHTML = `United Nations <i class="fas fa-times"></i>`;
        }

        // checl if the country is independent.
        const isIndependent = data[0].independent;
        if (isIndependent) {
          document.getElementById(
            "independent-status"
          ).innerHTML = ` Independent <i class="fas fa-check"></i>`;
        } else {
          document.getElementById(
            "independent-status"
          ).innerHTML = `Independent <i class="fas fa-times"></i>`;
        }

        // get and set population
        const populationNum = data[0].population;
        document.getElementById(
          "population"
        ).innerHTML = `${populationNum.toLocaleString("en-AU")}`;

        // get and set region
        const region = data[0].region;
        document.getElementById("region").innerHTML = `${region}`;

        // get and set region
        const startOfWeek = data[0].startOfWeek;
        const startOfWeekCapitalized =
          startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1);
        document.getElementById(
          "start-of-week"
        ).innerHTML = `${startOfWeekCapitalized}`;

        // get and set timezones
        const timezones = data[0].timezones;
        document.getElementById("time-zone").innerHTML = `${timezones}`;

        // get and set timezones
        const capital = data[0].capital;
        document.getElementById("capital").innerHTML = `${capital}`;


        //=============== News  =================================//
        const cca2 = data[0].name.common;
        var newsXhr = new XMLHttpRequest();
        newsXhr.open("GET", `https://api.worldnewsapi.com/search-news?api-key=798b170d63844143bad04c552b7d3911&text=${cca2}`, true);
        newsXhr.onreadystatechange = function() {
          if (newsXhr.readyState == 4 && newsXhr.status == 200) {
            var newsData = JSON.parse(newsXhr.responseText);
            var newsList = newsData.news;
            console.log("newsList", newsList);

           ////////////////////////////////////////////////////////////////////////////////////////////
           let i = 0;
           let newsCardArray = document.querySelectorAll(".news-box");
           var date = new Date(newsList[i].publish_date);
           newsCardArray.forEach((element) => {
             if (newsList.length > 0) {
               if (newsList[i].image != null) {
                 imgeVar = newsList[i].image;
               }

               element
                 .querySelector(".new-thumb")
                 .querySelector("img").src = `${imgeVar}`;

               element
                 .querySelector(".new-thumb")
                 .querySelector("img").onerror = function () {
                 element.querySelector(".new-thumb").querySelector("img").src =
                   "images/eg1.jpg";
               };
               element
                 .querySelector(".new-thumb")
                 .querySelector("img").style.height = "200px";
               element
                 .querySelector(".new-txt")
                 .querySelector(".news-meta")
                 .querySelector(
                   "li"
                 ).innerHTML = `${date.getDate()} ${date.toLocaleString(
                 "default",
                 { month: "short" }
               )}, ${date.getFullYear()}`;
               element
                 .querySelector(".new-txt")
                 .querySelector("h6")
                 .querySelector("a").href = `${newsList[i].url}`;

               element
                 .querySelector(".new-txt")
                 .querySelector("h6")
                 .querySelector("a").innerHTML = `${newsList[i].title.slice(
                 0,
                 51
               )}`;
               element
                 .querySelector(".new-txt")
                 .querySelector("p").innerHTML = `${newsList[i].text.slice(
                 0,
                 101
               )}`;

               element
                 .querySelector(".news-box-f")
                 .querySelector("span").innerHTML = `${
                 newsList[i].author.split(",")[0]
               }`;

               element
                 .querySelector(".news-box-f")
                 .querySelector("a").href = `${newsList[i].url}`;

               i++;
             }
           });
          }
        };
        newsXhr.send();

        //-----------------------------------Maps --------------------------------------//

        var mapFrame = document.getElementById("map-frame");
        var mapBtn = document.getElementById("map-btn");

        countryName = data[0].name.common;
        const Url = `https://www.google.com/maps?q=${countryName}&hl=en&z=6&output=embed`;
        mapFrame.src = Url;
        mapBtn.href = data[0].maps.googleMaps;
      }
    };
    xhrCountry.send();
  }
});

// End of countriesNameSelectElem.addEventListener({})

//=============== Gey in touch =================================//
// var submitElm = document.getElementById("submit");
// var emailRow = document.getElementById("email-row");
// var emailStatus = document.getElementById("email-status");
// submitElm.style.cursor = "not-allowed";
// var ulElems = document.querySelector("ul.row").children;
// console.log("ul: ", ulElems);

// // for (let ulElem of ulElems) {
// //   console.log(ulElem.children);
// //
// // }

// document.getElementById("name").addEventListener("change", () => {
//   name = document.getElementById("name").value;
//   console.log(name);
// });
// document
//   .getElementById("email")
//   .addEventListener(
//     "change",
//     () => (email = document.getElementById("email").value)
//   );
// // document
// //   .getElementById("name")
// //   .addEventListener(
// //     "change",
// //     () => (name = document.getElementById("name").value)
// //   );

// message = document.getElementById("msg").value;

// if (!(name == "" || name == "  " || email == "" || email == "")) {
//   submitElm.style.cursor = "pointer";
//   submitElm.removeAttribute("disabled");
// }

// function sendMail() {
//   (function () {
//     emailjs.init("nR2NW5Zn2awN3i0-0");
//   })();

//   var mailData = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("msg").value,
//   };
//   const serviceID = "service_2tp9zeb";
//   const templateID = "template_agm5yg9";

//   // "" or " "

//   emailjs
//     .send(serviceID, templateID, mailData)
//     .then((res) => {
//       // console.log("name = ", document.getElementById("name").value, "<");
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("msg").value = "";
//       emailStatus.classList.remove("hidden");
//       emailStatus.classList.add("email-success");
//       setTimeout(function () {
//         emailStatus.classList.add("hidden");
//       }, 3000);
//     })
//     .catch((err) => {
//       console.log(err);
//       emailStatus.classList.remove("hidden");
//       emailStatus.classList.add("email-fail");
//       setTimeout(function () {
//         emailStatus.classList.add("hidden");
//       }, 3000);
//     });
// }
// submitElm.addEventListener("click", sendMail);
//====================== Get in Touch =====================//
var submitElm = document.getElementById("submit");

function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("msg").value;
  var emailStatus = document.getElementById("email-status");

  if (!name.trim() || !email.trim() || !message.trim()) {
    emailStatus.innerText = "Please fill out all fields.";
    emailStatus.classList.remove("hidden");
    emailStatus.classList.add("email-fail");
    setTimeout(function () {
      emailStatus.classList.add("hidden");
    }, 3000);
    return;
  }
  if (email.indexOf("@") == -1) {
    emailStatus.innerText = "Email address is not valid.";
    emailStatus.classList.remove("hidden");
    emailStatus.classList.add("email-fail");
    setTimeout(function () {
      emailStatus.classList.add("hidden");
    }, 3000);
    return;
  }
  emailStatus.classList.remove("email-fail");

  (function () {
    emailjs.init("nR2NW5Zn2awN3i0-0");
  })();

  var mailData = {
    name: name,
    email: email,
    message: message,
  };
  const serviceID = "service_2tp9zeb";
  const templateID = "template_agm5yg9";

  emailjs
    .send(serviceID, templateID, mailData)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      emailStatus.innerText = "Email sent successfully!";
      emailStatus.classList.remove("hidden");
      emailStatus.classList.add("email-success");
      setTimeout(function () {
        emailStatus.classList.add("hidden");
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
      emailStatus.innerText = "Failed to send email.";
      emailStatus.classList.remove("hidden");
      emailStatus.classList.add("email-fail");
      setTimeout(function () {
        emailStatus.classList.add("hidden");
      }, 3000);
    });
}

submitElm.addEventListener("click", sendMail);
