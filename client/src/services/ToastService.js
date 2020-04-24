var updateShowToastCallback = undefined;

export const showToast = () => {
    updateShowToastCallback();
};

export const setCallback = (callback) => {
    updateShowToastCallback = callback;
};