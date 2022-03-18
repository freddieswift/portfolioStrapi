module.exports = ({ env }) => ({
    url: 'https://api.freddieswift.dev',
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
});