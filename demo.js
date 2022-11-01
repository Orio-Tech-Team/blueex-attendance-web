var table = $("#deliveriesTable").DataTable( {

    destroy: true,

    responsive : true, 

    // dom: "Bfrtip",

    dom:    `<'row'<'col-sm-12 col-md-5 mb-3 text-left'f><'col-sm-12 col-md-7 dataTables_pager'B>>

                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>

                <'row'<'col-sm-12'tr>>

                <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

    stateSave: true,

    buttons: "",

    rowReorder: false,

    order: [[ 2, "desc" ]],

    searchDelay : 200, 

    processing : true, 

    serverSide : false,

    lengthMenu : [[20, 50, 100, 500], [20, 50, 100, 500]],

    scrollX: true,

    ajax:{

        url: "./config/api/shipment/dispatched-report-shipment.php",

        type: "POST",

        timeout: 1000000,

        cache: true,

        data: {startdate: startdate, enddate: enddate, status: status},

    },

    drawCallback: function (settings) {

        var response = settings.json;

    },

    columns:[{ data: "RecordID" },{ data: "ORDERNO"},{ data: "CN"},{ data: "ORDERDATE"}], 

    columnDefs:[{targets:[0], sorting: 'false' },{targets:[1]},{targets:[2]},{targets:[3]}]

});