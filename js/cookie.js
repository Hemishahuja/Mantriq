//////////////////////////////////////////
// Regular Functions
//////////////////////////////////////////

// Check if Cookie Exists
function checkCookie() {

	// Undefined if not set
	var cookiesAllowed = localStorage.getItem('cookiesAllowed');
	
	// if cookies are already allowed
	if (cookiesAllowed == 'yes') {
		// show small div
		$('#cookieDivSmall').show();
	} else {
		// show large div
		$('#cookieDivFull').show();
	}
};

// callback function to open small div after large one has closed
function openSmall() {
    localStorage.setItem('cookiesAllowed', 'yes');
	$('#cookieDivSmall').show(500, 'swing');
    return true;
};

// callback function to open large div after small one has closed
function openLarge() {
	$('#cookieDivFull').show(500, 'swing');
};

function acceptClick() {
        $('#cookieDivFull').hide(500, 'swing', openSmall);
        return false;
}

function privacyClick() {
        $('#cookieDivSmall').hide(500, 'swing', openLarge);
        return false;
}
//////////////////////////////////////////
// End Regular Functions
//////////////////////////////////////////

//////////////////////////////////////////
// Jquery Doc Ready Functions
//////////////////////////////////////////
$(document).ready(function(e) {
	

	// create new content before binding events
	
	// string of HTML to append to the body tag
	//var string = '<div id="cookieDivFull" style="display:none"><p>We use <a class="popUpLink" href="http://www.euroenvironmental.co.uk/pages/privacy">cookies</a> to ensure that we give you the best experience on our website. If you continue we will assume that you agree to our <a class="popUpLink" href="http://www.euroenvironmental.co.uk/pages/privacy">use of cookies</a><a href="#" id="acceptCookie" onclick="return acceptClick()"><img src="images/euroenv/icons/search_icon.png" /></a></p></div>';
                var string = '<div id="cookieDivFull" style="display:none"><p>Mantriq uses <a class="popUpLink" href="privacy-and-cookies.html">cookies</a> to ensure you get the best experience on our website. By continuing you agree to our <a class="popUpLink" href="privacy-and-cookies.html">use of cookies</a><a href="#" id="acceptCookie" onclick="return acceptClick()"><img src="../images/default/favicons/favicon-32x32.png" alt="Accept" /></a></p></div><div id="cookieDivSmall" style="display:none"><p><a href="#" onclick="return privacyClick()">Privacy & Cookies</a></p></div>'

	// Append to body
	$(string).appendTo('body');
	
	// make body bottom margin 70px 
	//$('body').css({marginBottom: '70px'});
	
	// Check cookie
	checkCookie();	
});
// End Jquery Doc Ready Functions
