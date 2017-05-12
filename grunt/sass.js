module.exports = {
    options: {
        sourceMap: true,
    },
    dist: {
        files: {
            '<%= paths.public.stylesheets %>/app.css': '<%= paths.source.stylesheets %>/app.scss',
        },
    },
};
