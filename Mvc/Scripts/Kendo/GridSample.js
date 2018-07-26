$(document).ready(function () {
    
    // get the web service url and pass it to the Sitefinity object
    var wnd, detailsTemplate;
    var options = {
        serviceUrl: window.location.origin + "/api/default/"
    }

 	// login the user

    getToken().then((data) => {

        getData(data.access_token).then((data) => {
            // create the kendo grid
            $("#gridView").kendoGrid({
                pageable: true,
                sortable: true,
                filterable: true,
                navigatable: true,
                dataSource: data,
                toolbar: ["create", "save", "cancel"],
                columns: ["Title", "Content", "Summary", { command: ["edit", "destroy", { text: "View Details", click: showDetails }], title: "&nbsp;", width: "300px" }],
                editable: "inline"
            });
        });
    });

    wnd = $("#details")
            .kendoWindow({
                title: "News Details",
                modal: true,
                visible: false,
                resizable: false,
                width: 300
            }).data("kendoWindow");
    detailsTemplate = kendo.template($("#template").html());
    function showDetails(e) {
        e.preventDefault();

        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        wnd.content(detailsTemplate(dataItem));
        wnd.center().open();
    }


    function getToken() {
        var promise = new Promise((resolve, reject) => {
            var tokenEndPoint = window.location.origin + "/Sitefinity/Authenticate/OpenID/connect/token";
            $.ajax({
                url: tokenEndPoint,
                data: {
                    username: "admin@test.com",
                    password: "password",
                    grant_type: 'password',
                    scope: 'openid offline_access',
                    client_id: "testApp",
                    client_secret: "secret"
                },
                method: 'POST',
                success: function (data) {
                    resolve(data);
                },
                error: function (err) {
                    alert(err.responseText);
                }
            })
        });

        return promise;
    }

    function getData(token) {
        var promise = new Promise((resolve, reject) => {
            var apiEndPoint = window.location.origin + "/api/default/newsitems";
            $.ajax({
                url: apiEndPoint,
                method: 'GET',
                headers: { "Authorization": "Bearer " + token },
                success: function (data) {
                    resolve(data.value);
                },
                error: function (err) {
                    alert(err.responseText);
                }
            })
        });

        return promise;
    }
});