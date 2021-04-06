module.exports = {
    purge: {
        content: [
            "./resources/**/*.antlers.html",
            "./resources/**/*.blade.php",
            "./content/**/*.md",
        ],
    },
    important: true,
    theme: {
        extend: {
            colors: {
                brown: {
                    300: "#E8E4DB",
                },
            },
        },
    },
    variants: {},
    plugins: [],
};
