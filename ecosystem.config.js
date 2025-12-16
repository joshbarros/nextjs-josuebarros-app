module.exports = {
    apps: [
        {
            name: "site-a",
            script: "npm",
            args: "start -- -p 3000",
            cwd: "/home/deployer/websites/josuebarros",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
