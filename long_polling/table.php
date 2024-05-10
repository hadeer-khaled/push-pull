
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <h1 style="text-align: center"> Customer </h1>
    
    <!-- Table to display customer data -->
    <table class="table">
        <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Department</th>
                <th scope="col">Address</th>
                <th scope="col">Country</th>
                <th scope="col">Gender</th>
            </tr>
        </thead>
        <tbody id="tbody">
        <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john_doe</td>
                <td>Marketing</td>
                <td>123 Main St</td>
                <td>USA</td>
                <td>Male</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>Smith</td>
                <td>jane_smith</td>
                <td>Human Resources</td>
                <td>456 Elm St</td>
                <td>Canada</td>
                <td>Female</td>
            </tr>
        </tbody>
    </table>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="jquery-3.7.1.min.js"> </script>
<script src="long_polling.js"> </script>

</body>
</html>