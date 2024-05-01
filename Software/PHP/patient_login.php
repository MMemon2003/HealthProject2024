<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GP Patient Monitoring System</title>
    <!-- Linking to custom CSS file -->
    <link rel="stylesheet" href="style.css">
    <!-- Linking to Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Linking to Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Including JavaScript file -->
    <script src="script.js" defer></script>
</head>

<body>
    <!-- Header section -->
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <!-- Creates a Logo in the header -->
                    <img src="gp_logo.png" alt="Logo" class="header-logo">
                    GP Virtual Monitoring System
                </a>
                <!-- Navbar toggler for navigation design -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <?php
        $patientName = $_POST['patientName'];
        $medicalID = $_POST['medicalID'];
        $patientPassword = $_POST['patientPassword'];
        ?>
        <!-- Box around echoed patient information -->
        <div class="grey-box">
            <p><?php echo $patientName; ?></p>
            <p><?php echo $patientPassword; ?></p>
            <p><?php echo $medicalID; ?></p>
        </div>

        <?php
        // Database connection
        $con = new mysqli("localhost", "root", "Abdullah3434", "registerredd_patients");
        if ($con->connect_error) {
            die("Failed to connect: " . $con->connect_error);
        }

        // Prepare and execute SQL query
        $stmt = $con->prepare("SELECT * FROM table_of_patients WHERE `name` = ? AND `password` = ? AND `medical ID` = ?");
        if (!$stmt) {
            die("Error preparing statement: " . $con->error);
        }

        $stmt->bind_param("sss", $patientName, $patientPassword, $medicalID);
        $stmt->execute();
        $stmt_result = $stmt->get_result();

        if ($stmt_result->num_rows > 0) {
            echo "Login successfully";
            // Authentication successful, redirect to next HTML page
            header("Location: GP Virtual System.html");
            exit();
        } else {
            echo "<div class='grey-box'>Please,Register yourself</div>";
        }

        // Close statement and connection
        $stmt->close();
        $con->close();
        ?>
    </main>

    <!-- Footer -->
    <footer class="footer bg-dark text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 footer-content">
                    <!-- Copyright information -->
                    <p class="font-weight-bold">&copy; 2024 GP Virtual Monitoring System. All Rights Reserved.</p>
                </div>
                <!-- Search form in the footer -->
                <div class="col-lg-6">
                    <form class="form-inline float-right">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search this site"
                            aria-label="Search">
                        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>
