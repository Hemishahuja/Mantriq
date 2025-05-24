$(document).ready(function(){
	
	if ($(window).width() >= 992) {

		$('.team-readmore').hide();

		$('.meet-team.grid-item').hover(function(){

			$(this).find('.team-readmore').stop().slideToggle();

		});
	
	}
    
});

$(document).ready(function(){
    // Click event for opening the popup
    $(".meet-team.grid-item").click(function() {
        $(this).find(".team-popup-container").fadeIn(500);
    });

    // Click event for closing the popup
    $(document).on("click", ".meet-team.grid-item .team-popup-container .close-icon", function() {
        $(this).closest(".team-popup-container").fadeOut(800);
    });
});

$(document).ready(function() {
    setTimeout(function() {
        $('#cookieDivFull').fadeOut();
    }, 5000); // 5000 milliseconds = 5 seconds
});

function createTimelineItem(triggerSelector, targetSelector, xOffset, yOffset, startVariable) {
    gsap.to(targetSelector, {
        scrollTrigger: {
            trigger: triggerSelector,
            start: startVariable,
            toggleActions: "play none none none",
        },
        x: xOffset,
        y: yOffset,
        opacity: 1,
        duration: 1.2,
        stagger: 0,
    });
}

document.querySelectorAll(".timeline-content").forEach((element) => {
    createTimelineItem(element, element, 0, 0, "top center");
});


const instagram = document.querySelectorAll(".instagram-feed-sub .hideinit");

instagram.forEach((reel, index) => {
  gsap.to(reel, {
	y: 0,
	opacity: 1,
	duration: 1,
	delay: index * 0.2,
	scrollTrigger: {
	  trigger: ".instagram-feed-sub",
	  start: "top bottom",
	},
  });
});