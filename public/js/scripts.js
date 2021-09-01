let a = document.getElementById("search-btn");
let b = document.getElementById("search-bar");
let c = document.getElementById("description");
let d = document.getElementById("notes");
let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Repudiandae totam dolorum laudantium cumque eum maiores reprehenderit, iure obcaecati eaque aut iste blanditiis fugiat 
quidem modi odio unde pariatur incidunt. Minima eos praesentium aspernatur expedita natus, 
aperiam sed maiores aut, illum sapiente et repellendus. Rerum nulla numquam est dignissimos officia! Temporibus!`;

a.onclick = () => {
  document.getElementById("search-bar").classList.toggle("translate-x-12");
  document.getElementById("search-bar").classList.toggle("w-0");
  b.focus();
};

b.onblur = () => {
  document.getElementById("search-bar").classList.toggle("translate-x-12");
  document.getElementById("search-bar").classList.toggle("w-0");
};
c.onclick = () => {
  document.getElementById("video-description").classList.remove("hidden");
  document.getElementById("readMore").classList.remove("hidden");
  document
    .getElementById("video-description-readmore")
    .classList.remove("hidden");
  document
    .getElementById("video-description-google")
    .classList.remove("hidden");
  c.classList.add("bg-red-500", "text-white");
  if (!document.getElementById("video-notes").classList.contains("hidden")) {
    document.getElementById("video-notes").classList.add("hidden");
    d.classList.remove("text-white", "bg-red-500");
    d.classList.add("bg-white");
  }
};

d.onclick = () => {
  d.classList.add("bg-red-500", "text-white");
  if (
    !document.getElementById("video-description").classList.contains("hidden")
  ) {
    document.getElementById("video-description").classList.add("hidden");
    document.getElementById("readMore").classList.add("hidden");
    document
      .getElementById("video-description-readmore")
      .classList.add("hidden");
    document.getElementById("video-description-google").classList.add("hidden");
    c.classList.remove("text-white", "bg-red-500");
    c.classList.add("bg-white");
  }
  document.getElementById("video-notes").classList.remove("hidden");
};

let f = document.getElementById("video-description").getBoundingClientRect();
console.log(f);
if (f.height > 20) {
  document
    .getElementById("video-description-readmore")
    .classList.add("overflow-y-hidden");
}
let readMore = document.getElementById("readMore");
let readMoreText = document.getElementById("readMore").textContent;

readMore.onclick = () => {
  document
    .getElementById("video-description-readmore")
    .classList.toggle("overflow-y-hidden");
  document
    .getElementById("video-description-readmore")
    .classList.toggle("h-20");

  if (readMore.textContent == "Read Less") {
    readMore.textContent = "Read More";
  } else readMore.textContent = "Read Less";
};
