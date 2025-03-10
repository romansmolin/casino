/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: process.env.NODE_ENV === 'production' ? { preset: 'default' } : false
    },
}

export default config
  
