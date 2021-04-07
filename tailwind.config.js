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
       sm: '562px',
       md: '576px',
       lg: '768px',
       xl: '960px',
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
