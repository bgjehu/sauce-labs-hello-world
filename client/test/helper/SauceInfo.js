module.exports = () => {
    const username = process.env.SAUCE_USERNAME,
        accessKey = process.env.SAUCE_ACCESS_KEY,
        used = username && accessKey;
    return {username, accessKey, used};
};