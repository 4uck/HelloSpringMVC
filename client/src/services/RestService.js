export const getRequest = (successCallback, errorCallback, url) => {
    fetch(url)
        .then(res => res.json())
        .then((response) => {
                successCallback(response);
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                errorCallback(error);
                console.log("ERROR");
            }
        )
};

export const postRequest = (successCallback, errorCallback, url, body) => {
    fetch(url, {method: 'POST',   headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(body)})
        .then(res => res.json())
        .then((response) => {
                successCallback(response);
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                errorCallback(error);
                console.log("ERROR", error);
            }
        )
};