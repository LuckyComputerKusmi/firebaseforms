// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
  apiKey: "AIzaSyD5BjStqxv3d-3ct6rIYlivtI2xWR3swTc",
  authDomain: "databseinput.firebaseapp.com",
  databaseURL: "https://databseinput.firebaseio.com",
  storageBucket: "databseinput.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var recommendations = firebase.database().ref("Students");

// Save a new recommendation to the database, using the input in the form
var submitRecommendation = function () {

  // Get input values from each of the form elements
  var title = $("#talkTitle").val();
  var presenter = $("#talkPresenter").val();
  var link = $("#talkLink").val();
  var contact = $("#tcon").val();

  // Push a new recommendation to the database using those values
  recommendations.push({
    "Name": title,
    "Age": presenter,
    "DOB": link,
    "Contact": contact
  });
};
// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {
  $("#recommendationForm").submit(submitRecommendation);

});
