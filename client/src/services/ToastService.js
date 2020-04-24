var updateShowToastCallback = undefined;

export const showToast = (message) => {
    updateShowToastCallback(message);
};

export const setCallback = (callback) => {
    updateShowToastCallback = callback;
};