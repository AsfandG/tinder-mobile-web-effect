const users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1612904370314-68f344e324dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Lahore, Pakistan",
    name: "Seher",
    age: 24,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-book-open-line"></i>`, interest: "Reading" },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum illo repellendus fugit, exercitationem tenetur earum eligendi ex libero vero.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 2,
    location: "Karachi, Pakistan",
    name: "Farah",
    age: 22,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-book-open-line"></i>`, interest: "Reading" },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum illo repellendus fugit, exercitationem tenetur earum eligendi ex libero vero.",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1621694691103-e326ece9252b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 3,
    location: "Peshawar, Pakistan",
    name: "Asma",
    age: 26,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-book-open-line"></i>`, interest: "Reading" },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum illo repellendus fugit, exercitationem tenetur earum eligendi ex libero vero.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    displayPic:
      "https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 8,
    location: "Islamabad, Pakistan",
    name: "Alina",
    age: 21,
    interests: [
      { icon: `<i class="ri-music-2-fill"></i>`, interest: "music" },
      { icon: `<i class="ri-book-open-line"></i>`, interest: "Reading" },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum illo repellendus fugit, exercitationem tenetur earum eligendi ex libero vero.",
    isFriend: null,
  },
];

function select(element) {
  return document.querySelector(element);
}

let current = 0;
let isAnimating = false;

function setData(index) {
  select(".profile-image img").src = users[index].profilePic;
  select(".badge").textContent = users[index].pendingMessage;
  select(".location h2").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  var clutter = "";
  users[index].interests.forEach((item) => {
    clutter += `
    <div
    class="tag flex gap-3 items-center bg-white/30 px-3 py-1 rounded-full"
  >
    ${item.icon}
    <h2 class="text-sm tracking-tight capitalize">${item.interest}</h2>
  </div>
    `;
  });

  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[index].bio;
}

(function setInitials() {
  select(".maincard img").src = users[current].displayPic;
  select(".incomingcard img").src = users[current + 1]?.displayPic;

  setData(current);
  current = 2;
  //   select(".profile-image img").src = users[current].profilePic;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (current === users.length) current = 0;
        select(".maincard img").src = users[current].displayPic;
        current++;
        main.classList.remove("maincard");
        main.classList.add("incomingcard");
        incoming.classList.add("maincard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(current - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    ease: Circ,
    duration: 1,
  });
});

accept.addEventListener("click", function () {
  imageChange();
  setData(current - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    ease: Circ,
    duration: 1,
  });
});

(function containerCreator() {
  document.querySelectorAll(".element").forEach((element) => {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
