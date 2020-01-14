export const getHumans = (successCallback, errorCallback) => {
    fetch("/rest/humans/all")
        .then(res => res.json())
        .then((humans) => {
                successCallback(humans);
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
                errorCallback(error);
                console.log("ERROR");
            }
        )
};