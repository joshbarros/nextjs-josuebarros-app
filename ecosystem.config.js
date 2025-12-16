module.exports = {
    apps: [
        {
            name: "site-a",
            script: "npm",
            args: "start -- -p 3002",
            cwd: "/home/deployer/websites/josuebarros",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
