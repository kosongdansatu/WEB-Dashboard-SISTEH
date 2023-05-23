// SIDEBAR TOGGLE
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var page = 1;
var limit = 10;
var total = 0;

// Get total data count from database
db.ref('users').on('value', function(snapshot) {
	total = snapshot.numChildren();
	generatePagination();
});

// Generate pagination links
function generatePagination() {
	var paginationDiv = document.getElementById('pagination');
	var totalPages = Math.ceil(total / limit);

	// Clear pagination links
	paginationDiv.innerHTML = '';

	// Create pagination links
	for (var i = 1; i <= totalPages; i++) {
		var link = document.createElement('a');
		link.href = '#';
		link.innerHTML = i;
		link.classList.add('pagination-link');
		if (i == page) {
			link.classList.add('active');
		}
		link.setAttribute('data-page', i);
		link.addEventListener('click', function() {
			page = parseInt(this.getAttribute('data-page'));
			getData();
		});
		paginationDiv.appendChild(link);
	}
}

// Get data from database and display in table
function getData() {
	var offset = (page - 1) * limit;
	db.ref('users').orderByChild('nama').limitToFirst(limit).startAt(offset).once('value', function(snapshot)); {
		var tableBody = document.getElementById('table-body');
		tableBody.innerHTML = '';
		snapshot.forEach(function(childSnapshot) {
			var data = childSnapshot.val();
			var row = '<tr>';
			row += '<tr>';
// Display data in table
      row += '<td>' + (offset + 1) + '</td>';
      row += '<td>' + data.nama + '</td>';
      row += '<td>' + data.email + '</td>';
      row += '</tr>';
      tableBody.innerHTML += row;
      offset++;
});
};
}

// Initialize page
getData();

