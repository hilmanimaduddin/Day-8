const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/8e85d56d9f0f358bbf9b", true);
  console.log(xhr);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Data.");
    }
  };
  xhr.onerror = () => {
    reject("Network error.");
  };
  xhr.send();
});

async function allTestimonials() {
  const response = await promise;

  let testimonialHTML = "";
  response.forEach((item) => {
    testimonialHTML += `<div class="testimonial">
                            <img src="${item.image}}" alt="" class="foto" />
                            <p class="quote">${item.quote}</p>
                            <p class="author">~${item.author}</p>
                            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div> 
         `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

async function filterTestimonials(rating) {
  const response = await promise;

  const testimonialFiltered = response.filter((item) => {
    return item.rating === rating;
  });
  let testimonialHTML = "";

  if (testimonialFiltered.length === 0) {
    testimonialHTML = "<h1>Data Not Found..!!</h1>";
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML += `<div class="testimonial">
                                 <img src="${item.image}}" alt="" class="foto" />
                                 <p class="quote">${item.quote}</p>
                                 <p class="author">~${item.author}</p>
                                 <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                  </div>
            `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
