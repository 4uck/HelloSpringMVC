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