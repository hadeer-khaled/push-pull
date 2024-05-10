
console.log("welcome to polling")

tbody = document.getElementById('tbody')

// use ajax --> to contact server --> to get data from it
// lastModified = 0;
function dopolling(lastmodified) {

    $.ajax({
        method: "POST",
        url: 'http://localhost/php/long_polling/server.php',
        data:{
            lastModified: lastmodified
        },
        success: function (res) {
            console.log(res)
            data = JSON.parse(res);
            console.log("data.rows", data.rows) 
            console.log("data.rows",typeof data.rows)
            var customers = JSON.parse(data.rows);
            console.log("customers", customers)
            // tbody.innerHTML = data.rows;

            $('#tbody').empty();

            // Loop over row.data and fill the table
            customers.forEach(function (customer) {
                console.log(customer) 
                var rowHtml = '<tr>';
                // Assuming the properties are consistent for all customers
                rowHtml += '<td>' + customer.firstname + '</td>';
                rowHtml += '<td>' + customer.lastname + '</td>';
                rowHtml += '<td>' + customer.username + '</td>';
                rowHtml += '<td>' + customer.department + '</td>';
                rowHtml += '<td>' + customer.address + '</td>';
                rowHtml += '<td>' + customer.country + '</td>';
                rowHtml += '<td>' + customer.gender + '</td>';
                rowHtml += '</tr>';
                $('#tbody').append(rowHtml);
            });

            dopolling(data.server_time); 
        },
        error: function () {
            console.log('error')
            dopolling(0);
        }


    })
}

dopolling(0);




            // $('#tbody').empty();

            // // Loop over row.data and fill the table
            // data.rows.forEach(function (customer) {
            //     console.log(customer) 
            //     var rowHtml = '<tr>';
            //     // Assuming the properties are consistent for all customers
            //     rowHtml += '<td>' + customer.firstname + '</td>';
            //     rowHtml += '<td>' + customer.lastname + '</td>';
            //     rowHtml += '<td>' + customer.username + '</td>';
            //     rowHtml += '<td>' + customer.department + '</td>';
            //     rowHtml += '<td>' + customer.address + '</td>';
            //     rowHtml += '<td>' + customer.country + '</td>';
            //     rowHtml += '<td>' + customer.gender + '</td>';
            //     rowHtml += '</tr>';
            //     $('#tbody').append(rowHtml);
            // });