## This is the login page for the patient or GP/Doctor website
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GP Patient Monitoring System</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
 <script src="script.js" defer></script>
</head>
<body>

<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <!-- Left Image -->
            <img src="gp_logo.png" alt="Left Image" class="header-image mr-2">
            <!-- Centered Text -->
            <a class="navbar-brand mx-auto" href="#">
                GP Virtual Monitoring System
            </a>
            <!-- Right Image -->
            <img src="gp_logo.png" alt="Right Image" class="header-image ml-2">
            <!-- Navbar Toggler Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</header>



    <!-- Body Content -->
    <div class="container_main">
        <div class="row">
            <div class="col-lg-12">
                <!-- Account Login Form -->
               <h2>Are you a Patient or a GP/Doctor?</h2>
                <button type="button" class="white-button" onclick="showPatientForm()">Patient</button>
                <button type="button" class="white-button" onclick="showDoctorForm()">GP/Doctor</button>
            </div>
        </div>

        <!-- Patient Login Form -->
        <div id="patientForm" style="display: none;">
            <h2>Patient Login</h2>
            <form id="patientLoginForm">
                <label for="patientName">Name:</label>
                <input type="text" id="patientName" name="patientName" required><br>
                <label for="medicalID">Medical ID:</label>
                <input type="text" id="medicalID" name="medicalID" required><br>
                <label for="patientPassword">Password:</label>
                <input type="password" id="patientPassword" name="patientPassword" required><br>
            </form>
   <!-- Next Button to Patients Medical Reports -->
    <form action="Patients Medical Reports.html">
        <button type="submit">Next</button>
    </form>
        </div>

        <!-- GP/Doctor Login Form -->
        <div id="doctorForm" style="display: none;">
            <h2>GP/Doctor Login</h2>
            <form id="doctorLoginForm">
                <label for="doctorName">Name:</label>
                <input type="text" id="doctorName" name="doctorName" required><br>
                <label for="doctorMedicalID">Medical ID:</label>
                <input type="text" id="doctorMedicalID" name="doctorMedicalID" required><br>
                <label for="doctorPassword">Password:</label>
                <input type="password" id="doctorPassword" name="doctorPassword" required><br>
            </form>
    <!-- Next Button to Patients Medical Reports -->
    <form action="Patients Medical Reports.html">
        <button type="submit">Next</button>
    </form>
        </div>

<footer class="footer bg-dark text-white">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 footer-content">
                <p class="font-weight-bold">&copy; 2024 GP Virtual Monitoring System. All Rights Reserved.</p>
            </div>
            <div class="col-lg-6">
                <img src="gp_logo.png" alt="GP Logo" class="img-fluid float-right" style="max-height: 50px;">
            </div>
        </div>
    </div>
</footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
