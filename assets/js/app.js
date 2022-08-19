/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#000000",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#000000",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);


var $c = $('#card'),
	open = false;

$c = {
	root: $c,
	bg: $c.find('.card__background'),
	status: $c.find('.card__status'),
	brand: $c.find('.card__brand'),
	content: $c.find('.card__content'),
	timeline: $c.find('.event__timeline')
};

var toggleCard = function(){
	
	open = !open;
	
	var rW = $c.root.innerWidth(),
		rH = $c.root.innerHeight(),
		cW = $c.content.innerWidth(),
		cH = $c.content.innerHeight();

	TweenMax
		.to($c.bg, .6, {
			width: open ? cW : rW,
			height: open ? cH : rH,
			ease: Elastic.easeOut.config(1, .5)
		});
 
	TweenMax
		.to($c.brand, .6, {
			y: open ? 0 - ( ( cH - rH ) / 2 ) : 0,
			force3D: true,
			ease: Elastic.easeOut.config(1, .5)
		});
	
	TweenMax
		.to($c.status, open ? .07 : .3, {
			autoAlpha: open ? 0 : 1,
			force3D: true, 
			delay: open ? 0 : .25,
			ease: Expo.easeOut
		});

	if( open ){
		
		TweenMax
			.fromTo($c.content, .6, {
				scale: .6
			},{
				scale: 1,
				force3D: true,
				ease: Elastic.easeOut.config(1, .5)
			});
	
	}

	TweenMax
		.fromTo($c.content, open ? .4 : .1, {
			autoAlpha: 1 
		},{
			autoAlpha: open ? 1 : 0,
			ease: Cubic.easeOut
		});

	var $events = $c.timeline.find('li li');
	 
	if( open ){
		
		TweenMax
			.staggerFromTo($events, .5, {
				y: -40
			},{
				y: 0, 
				delay: .15,
				force3D: true,
				ease: Elastic.easeOut.config(1, .5)
			}, .05);

		TweenMax
			.staggerFromTo($events, .45, {
				opacity: 0
			},{
				opacity: 1,
				delay: .15,
				ease: Cubic.easeOut
			}, .05);

		var $dates = $c.timeline.find('.event__group-date');

		TweenMax
			.staggerFromTo($dates, .5, {
				y: -40
			},{
				y: 0,
				delay: .15,
				force3D: true,
				ease: Elastic.easeOut.config(1, .5)
			}, .05);

		TweenMax
			.staggerFromTo($dates, .45, {
				opacity: 0
			},{
				delay: .15,
				opacity: 1,
				ease: Cubic.easeOut
			}, .05);
	
	}
	
};

$c.root.on('click', toggleCard);