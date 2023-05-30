const testimonialData = [
  {
    author: "Kucing Oyen",
    quote: "Makanlah Whiskas!!",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 5,
  },
  {
    author: "Kucing Item",
    quote: "Makan Ikan Laut",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80",
    rating: 4,
  },
  {
    author: "Meong",
    quote: "Main Dulu Yuk..!!!",
    image:
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80",
    rating: 4,
  },
  {
    author: "Puss",
    quote: "Tidur Aja Dulu..",
    image:
      "https://images.unsplash.com/photo-1606011334315-025e4baab810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    rating: 3,
  },
  {
    author: "Kucing Cilik",
    quote: "Minum Susu Dulu!!",
    image:
      "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 2,
  },
  {
    author: "Kucing Couple",
    quote: "Jalan Yuk Bareng..",
    image:
      "https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 1,
  },
  {
    author: "Kucing Kucingan",
    quote: "Lagi Gabut Nih..",
    image:
      "https://images.unsplash.com/photo-1604535480782-13fb81ac9927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    rating: 3,
  },
  {
    author: "Kucing Meong",
    quote: "Lagi Laper, Butuh Makan",
    image:
      "https://images.unsplash.com/photo-1595511890410-3b8dc237a537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
    rating: 4,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
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

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
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
