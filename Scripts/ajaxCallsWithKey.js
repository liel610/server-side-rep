function ajaxCall2(method, api, data, successCB, errorCB) {
    $.ajax({
        type: method,
        url: api,
        data: data,
        cache: false,
        headers: {
            'x-rapidapi-key': '14a9b7f875mshc8fa6fa346cbe60p1e8815jsnc82c85354b32',   // replace it with your own key
        },
        contentType: "application/json",
        dataType: "json",
        success: successCB,
        error: errorCB
    });
}