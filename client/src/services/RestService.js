export const getRequest = (successCallback, errorCallback, url) => {
    fetch(url)
        .then(response => {
            if (response.ok) {
                successCallback(response);
            } else {
                errorCallback(response);
            }
        });
};

export const postRequest = (successCallback, errorCallback, url, body) => {
    fetch(url, {method: 'POST',   headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(body)})
        .then(response => {
            if (response.ok) {
                successCallback(response);
            } else {
                errorCallback(response);
            }
        })
};