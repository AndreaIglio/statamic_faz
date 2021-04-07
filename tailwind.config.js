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
        height: {
       sm: '500px',
       md: '',
       lg: '853px',
       xl: '48px',
      },
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
