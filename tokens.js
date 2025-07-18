// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1394475134991077426",
        serverId: "1344059457046319198",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
