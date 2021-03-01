let words = ['missions', 'équipes', 'engagements', 'certifications'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.titre-effet').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// EFFET CURSEUR

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})  

document.addEventListener('click', () => {
cursor.classList.add("expand");

setTimeout(() => {
  cursor.classList.remove("expand");
}, 500)
})


  // MENU DEROULANT

  // const ww = document.body.clientWidth;

  $(".menu").click(function() {
	  if (window.innerWidth < 1000) {
      $("li").slideToggle(500);
    }
  }); 

// const pays = [
//     {name: 'Soudan', slug: '#soudanName'},
//     {name: 'Tchad', slug: '#tchadName'},
//     {name: 'Burkina Faso', slug: '#burkinaName'},
//     {name: 'Inde', slug: '#indName'},
//     {name: 'Pérou', slug: '#perouName'},
//     {name: 'Italie', slug: '#italieName'},
//     {name: 'Espagne', slug: '#espagneName'}
// ]


// Burkina Faso
  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".burkina" ).click(function() {
    $( ".modulo-burkina" ).fadeIn(2000);
  });

  // Soudan

  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".soudan" ).click(function() {
    $('#burkinaName').text("Soudan");
    $( ".modulo-burkina" ).fadeIn(2000);
  });

  // Tchad

  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".tchad" ).click(function() {
    $('#burkinaName').text("Tchad");
    $( ".modulo-burkina" ).fadeIn(2000);
  });

  // Inde

  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".inde" ).click(function() {
    $('#burkinaName').text("Inde");
    $( ".modulo-burkina" ).fadeIn(2000);
  });

  // Perou

  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".perou" ).click(function() {
    $('#burkinaName').text("Perou");
    $( ".modulo-burkina" ).fadeIn(2000);
  });

  // Italie

  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".italie" ).click(function() {
    $('#burkinaName').text("Italie");
    $( ".modulo-burkina" ).fadeIn(2000);
  });

  // Espagne

  $( "#closeBurkina" ).click(function() {
    $( ".modulo-burkina" ).fadeOut(2000);
  });

  $( ".espagne" ).click(function() {
    $('#burkinaName').text("Espagne");
    $( ".modulo-burkina" ).fadeIn(2000);
  });
  

