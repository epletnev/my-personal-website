const quotes = [
"'Do you fall in love with boys or with girls?' I asked her. 'Sometimes boys,' she replied. 'Mostly souls.' ― Juansen Dizon",
"'Only by speaking out can we create lasting change. And that change begins with coming out.' ― DaShanne Stokes",
"'To all the young people who discover they are gay: Don't be afraid to come out of the closet right now.' ― Núria Añó",
"'I’ll be okay even if i don’t understand how i don’t want to be a girl, but also don’t want to be a man.' ― Courtney Carola",
"'Standing against discrimination for some while supporting discrimination against others hurts us all.' ― DaShanne Stokes",
"'One day, progress being what it was, I hoped no one would have to have a big gay coming-out or a bisexual coming-out. It would just be what it was, and that would be that. But we weren't quite there yet.' ― S.E. Harmon",
"'Living in a world that is grossly opposed to who you are, the bravest and most radical thing to do is to be yourself. And being a part of the LGBTQ community is just that – brave.' ― Courtney Carola",
"'How heavenly it would be to live their lives free from the thought that they were being criticized, pointed out - their love for each other discussed as though it were some low vulgar thing.' ― Lilyan Brock",
"'Saying it's hard being straight is like complaining to the poor that it's difficult being wealthy.' ― DaShanne Stokes",
"'Pride is not an LGBTQ celebration, it's a human rights celebration - it's a celebration of equality - it's a celebration of inclusion - it's a celebration of acceptance.' ― Abhijit Naskar"
];

let slideIndex = 1;
slider(slideIndex);

// Next/prev buttons function
function addSlide(n) {
  slider((slideIndex += n));
}

// Link circles indicators function
function selectSlide(n) {
  slider((slideIndex = n));
}

// Slider function
function slider(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const circles = document.getElementsByClassName("circle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].className += " active";

  // New quote function
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("newQuote").innerHTML = quotes[randomNumber];
}

// Flip box function
const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    this.classList.toggle("flip");
  });
}
