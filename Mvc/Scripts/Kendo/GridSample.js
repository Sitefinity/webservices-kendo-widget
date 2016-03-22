$(document).ready(function () {
    
    // get the web service url and pass it to the Sitefinity object
    var wnd, detailsTemplate;
    var options = {
        serviceUrl: window.location.origin + "/api/default/"
    }

    // create the Sitefinity object for managing data
    var sf = new Sitefinity(options);

	// login the user
    sf.authentication.login("admin", "admin@2", function (data) {
		// create the kendo data source for accessing data.
        var sitefinityDataSource = new kendo.data.DataSource({
            // the SDK has a custom kendo transport for accessing the Sitefinity OData services.
            // internally it uses the sitefinity-webservices-sdk to query the services
            type: 'sitefinity',
            transport: {
                urlName: 'newsitems',
                providerName: 'OpenAccessDataProvider',
                dataProvider: sf
            },
            schema: {
                model: {
                    id: "Id",
                    fields: {
                        Id: { type: "string" },
                        Title: { type: "string" },
                        Content: { type: "string" },
                        Summary: { type: 'string' },
                        UrlName: { type: 'string' }
                    }
                }
            },
            serverPaging: false,
            serverSorting: true,
            serverFiltering: true,
            pageSize: 10,
            page: 1,
            sort: { field: 'Id', dir: 'desc' }
        });

		// create the kendo grid
        $("#gridView").kendoGrid({
            pageable: true,
            sortable: true,
            filterable: true,
            navigatable: true,
            dataSource: sitefinityDataSource,
            toolbar: ["create", "save", "cancel"],
            columns: ["Title", "Content", "Summary", { command: ["edit", "destroy", { text: "View Details", click: showDetails }], title: "&nbsp;", width: "300px" }],
            editable: "inline"
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
    });

    function showDetails(e) {
        e.preventDefault();

        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        wnd.content(detailsTemplate(dataItem));
        wnd.center().open();
    }
});