 // JavaScript Widget Code

// Create a function to initialize the widget
function initWidget() {

  // Create a variable to store the HTML for the widget
  var widgetHTML = '<div class="widget">';
  widgetHTML += '<h2> </h2>';
  widgetHTML += '<p> </p>';
  widgetHTML += '</div>';

  // Append the HTML to the page
  document.body.innerHTML += widgetHTML;
}

// Call the initWidget function when the page loads
window.onload = initWidget;
