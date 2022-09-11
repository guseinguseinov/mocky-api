function getCookie() {
    const token = document.cookie
        .split("; ")
        .find(row => row.startsWith('userToken='))
        ?.split('=')[1];

    return token;
}

export default getCookie;