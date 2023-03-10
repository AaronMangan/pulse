// const { colors } = require('react-select/dist/declarations/src/theme');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: '#6320ee',
            primaryDark: '#3b1191',
            secondary: '#829cbc',
            info: '#6290c8',
            default: '#6290c8',
            success: '#64c464',
            warning: '#f6ce46',
            danger: '#f60417',
            error: '#f60417',
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
            },
            white: colors.white,
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
