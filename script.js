// Get references to elements
const welcomePage = document.getElementById('welcome-page');
const loginPage = document.getElementById('login-page');
const createAccountPage = document.getElementById('create-account-page');
const sensorReadingsPage = document.getElementById('sensor-readings-page');
const medicalReportsPage = document.getElementById('medical-reports-page');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const loginBtn = document.getElementById('login-btn');
const createAccountBtn = document.getElementById('create-account-btn');
const sensorReadingsBtn = document.getElementById('sensor-readings-btn');
const allReportsBtn = document.getElementById('all-reports-btn');
const allReportsBtnCreate = document.getElementById('all-reports-btn-create');
const backBtns = document.querySelectorAll('.back-btn');

// Function to toggle active class on pages
function togglePage(page) {
  welcomePage.classList.remove('active');
  loginPage.classList.remove('active');
  createAccountPage.classList.remove('active');
  sensorReadingsPage.classList.remove('active');
  medicalReportsPage.classList.remove('active');
  page.classList.add('active');
}

// Event listener for Yes button click
yesBtn.addEventListener('click', function() {
  // Show login page
  togglePage(loginPage);
});

// Event listener for No button click
noBtn.addEventListener('click', function() {
  // Show create account page
  togglePage(createAccountPage);
});

// Event listener for Login button click
loginBtn.addEventListener('click', function() {
  // Show sensor readings page
  togglePage(sensorReadingsPage);
});

// Event listener for Create Account button click
createAccountBtn.addEventListener('click', function() {
  // Show sensor readings page
  togglePage(sensorReadingsPage);
});

// Event listener for Sensor Readings button click
sensorReadingsBtn.addEventListener('click', function() {
  // Show sensor readings page
  togglePage(sensorReadingsPage);
});

// Event listener for All Reports button click on login page
allReportsBtn.addEventListener('click', function() {
  // Load medical reports page content within an iframe
  medicalReportsPage.innerHTML = '<iframe src="medical-reports.html" frameborder="0" width="100%" height="100%"></iframe>';
  // Show medical reports page
  togglePage(medicalReportsPage);
});

// Event listener for All Reports button click on create account page
allReportsBtnCreate.addEventListener('click', function() {
  // Load medical reports page content within an iframe
  medicalReportsPage.innerHTML = '<iframe src="medical-reports.html" frameborder="0" width="100%" height="100%"></iframe>';
  // Show medical reports page
  togglePage(medicalReportsPage);
});

// Event listeners for back buttons
backBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    togglePage(welcomePage);
  });
});

// Function to display the medical report
function displayMedicalReport(name, medicalId, gender, heartRate, temperature, spo2) {
  const healthReportTitle = document.getElementById('health-report-title');
  const nameDisplay = document.getElementById('name-display');
  const medicalIdDisplay = document.getElementById('medical-id-display');
  const genderDisplay = document.getElementById('gender-display');
  const heartRateDisplay = document.getElementById('heart-rate');
  const temperatureDisplay = document.getElementById('body-temperature');
  const spo2Display = document.getElementById('spo2');

  // Set values in the medical report
  healthReportTitle.textContent = 'Medical Report';
  nameDisplay.textContent = name;
  medicalIdDisplay.textContent = medicalId;
  genderDisplay.textContent = gender;
  heartRateDisplay.textContent = heartRate;
  temperatureDisplay.textContent = temperature;
  spo2Display.textContent = spo2;

  // Hide years list and show medical report container
  medicalReportContainer.style.display = 'block';
  document.getElementById('years-list').style.display = 'none';
}

// Function to generate yearly report
function generateYearlyReport() {
  // Get user input values
  const patientName = document.getElementById('patient-name').value;
  const medicalId = document.getElementById('medical-id').value;
  const selectedYear = document.getElementById('year').value;

  // Validate user input
  if (!patientName || !medicalId || !selectedYear) {
      alert("Please fill in all fields.");
      return;
  }

  // Create the report content with sample sensor readings
  const reportContent = `
      <div id='sensor-readings-page' class='page'>
          <div class='box-full'>
              <h2 class="heading">Yearly Report - ${selectedYear}</h2>
              <p>Patient's Name: ${patientName}</p>
              <p>Medical ID: ${medicalId}</p>
              <p>Year: ${selectedYear}</p>
              <p>Sensor Readings:</p>
              <p>Body Temperature: 37°C</p>
              <p>Heart Rate: 75 BPM</p>
              <p>Blood Pressure: 150mmHg</p>
          </div>
      </div>`;

  // Display the report content
  document.getElementById('yearly-report-content').innerHTML = reportContent;
}

// Additional functions
function sendEmail() {
  // Code to send email goes here
  alert("Thank you! An email has been sent. A GP or doctor will get back to you as soon as possible.");
}

function showCurrentReport() {
  document.getElementById('current-report').style.display = 'block';
  document.getElementById('yearly-reports').style.display = 'none';
}

function showYearlyReports() {
  document.getElementById('current-report').style.display = 'none';
  document.getElementById('yearly-reports').style.display = 'block';
}

function generateCurrentReport() {
    // Get form values
    var patientName = document.getElementById("patient-name").value;
    var medicalId = document.getElementById("medical-id").value;
    var phoneNumber = document.getElementById("phone-number-input").value;
    var dateOfBirth = document.getElementById("date-of-birth-input").value;

    // Create report content
    var reportContent = `
        <div class="container report-box">
            <h2 class="text-center">Current Medical Report</h2>
            <p>Patient's Name: ${patientName}</p>
            <p>Medical ID: ${medicalId}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Date of Birth: ${dateOfBirth}</p>
            <p>Body Temperature: 37°C</p>
            <p>Heart Rate: 75 BPM</p>
            <p>Blood Pressure: 150mmHg</p>
        </div>
    `;
    
    // Display report content
    document.getElementById("current-report-content").innerHTML = reportContent;
    // Show the current report section
    document.getElementById("current-report").style.display = "block";
}

function generateYearlyReport() {
    // Get form values
    var patientName = document.getElementById("patient-name").value;
    var medicalId = document.getElementById("medical-id").value;
    var patientPhoneNumber = document.getElementById("phone-number-input").value;
    var patientDateOfBirth = document.getElementById("date-of-birth-input").value;
    var selectedYear = document.getElementById("year").value;
    
    // Create report content
    var reportContent = `
        <div class="container report-box">
            <h2 class="text-center">Yearly Medical Report - ${selectedYear}</h2>
            <p>Patient's Name: ${patientName}</p>
            <p>Medical ID: ${medicalId}</p>
            <p>Patient's Phone Number: ${patientPhoneNumber}</p>
            <p>Patient's Date of Birth: ${patientDateOfBirth}</p>
            <p>Year: ${selectedYear}</p>
            <p>Sensor Readings:</p>
            <p>Body Temperature: 37°C</p>
            <p>Heart Rate: 75 BPM</p>
            <p>Blood Pressure: 150mmHg</p>
        </div>
    `;
    
    // Display report content
    document.getElementById("yearly-report-content").innerHTML = reportContent;
    // Show the yearly report section
    document.getElementById("yearly-reports").style.display = "block";
}


   function showCurrentReport() {
            document.getElementById('current-report').style.display = 'block';
            document.getElementById('yearly-reports').style.display = 'none';
            document.getElementById('prescriptions').style.display = 'none';
        }

        function showYearlyReports() {
            document.getElementById('current-report').style.display = 'none';
            document.getElementById('yearly-reports').style.display = 'block';
            document.getElementById('prescriptions').style.display = 'none';
        }

        function showPrescription() {
            document.getElementById('current-report').style.display = 'none';
            document.getElementById('yearly-reports').style.display = 'none';
            document.getElementById('prescriptions').style.display = 'block';
        }
		
     function generatePrescription() {
            var patientName = document.getElementById("patient-name").value;
            var medicalId = document.getElementById("medical-id").value;
            var phoneNumber = document.getElementById("phone-number-input").value;
            var dateOfBirth = document.getElementById("date-of-birth-input").value;
            var heartRate = document.getElementById("heart-rate-input").value;
            var temperature = document.getElementById("temperature-input").value;
            var spo2 = document.getElementById("spo2-input").value;
            var diagnosis = document.getElementById("diagnosis-input").value;
            var treatment = document.getElementById("treatment-input").value;
            var notes = document.getElementById("notes-input").value;
            var gpSignature = document.getElementById("gp-signature").value;
            var patientSignature = document.getElementById("patient-signature").value;
            var reportDate = document.getElementById("date-input").value;

            var prescriptionContent = `
                <div class="container report-box">
                    <h2 class="text-center">Prescription</h2>
                    <p>Patient's Name: ${patientName}</p>
                    <p>Medical ID: ${medicalId}</p>
                    <p>Phone Number: ${phoneNumber}</p>
                    <p>Date of Birth: ${dateOfBirth}</p>
                    <p>Heart Rate: ${heartRate} BPM</p>
                    <p>Body Temperature: ${temperature} °C</p>
                    <p>SpO2: ${spo2}%</p>
                    <p>Diagnosis: ${diagnosis}</p>
                    <p>Treatment: ${treatment}</p>
                    <p>Additional Notes: ${notes}</p>
                    <p>GP's Signature: ${gpSignature}</p>
                    <p>Patient's Signature: ${patientSignature}</p>
                    <p>Date of Report: ${reportDate}</p>
                </div>
            `;
            document.getElementById("prescription-content").innerHTML = prescriptionContent;
            document.getElementById("prescriptions").style.display = "block";
        }

        function showPatientForm() {
            document.getElementById("patientForm").style.display = "block";
            document.getElementById("doctorForm").style.display = "none";
        }

        function showDoctorForm() {
            document.getElementById("patientForm").style.display = "none";
            document.getElementById("doctorForm").style.display = "block";
        }

        function showPatientInfo() {
            var patientName = document.getElementById("patientName").value;
            var medicalID = document.getElementById("medicalID").value;
            var patientPassword = document.getElementById("patientPassword").value;

            var patientInfo = document.getElementById("patientInfo");
            patientInfo.innerHTML = "<h2>Patient Information</h2>" +
                                    "<p>Name: " + patientName + "</p>" +
                                    "<p>Medical ID: " + medicalID + "</p>" +
                                    "<p>Password: " + patientPassword + "</p>";

            patientInfo.style.display = "block";
        }

        function showDoctorInfo() {
            var doctorName = document.getElementById("doctorName").value;
            var doctorMedicalID = document.getElementById("doctorMedicalID").value;
            var doctorPassword = document.getElementById("doctorPassword").value;

            var doctorInfo = document.getElementById("doctorInfo");
            doctorInfo.innerHTML = "<h2>Doctor Information</h2>" +
                                    "<p>Name: " + doctorName + "</p>" +
                                    "<p>Medical ID: " + doctorMedicalID + "</p>" +
                                    "<p>Password: " + doctorPassword + "</p>";

            doctorInfo.style.display = "block";
        }