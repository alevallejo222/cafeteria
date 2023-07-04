
const {src,dest,watch,series,parallel} = require('gulp');


const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// compilar sass con gulp

function css(done){

    //identificar el archivo
    src('src/scss/app.scss')

    //compilar el archivo
    .pipe(sass({outputstyle: 'compressed'}))// outputstyle puede ser 'compressed' o 'expanded'
    .pipe(postcss( [autoprefixer]))//se usa para crear versiones compatibles con algunos navegadores que no soporten la nueva sintaxis (regularmente Microsoft Edge, Safari, etc)

    //guardar archivo
    .pipe(dest('build/css'))

    done();
}

function dev(){
    watch('src/scss/**/*.scss', css) //Ver los cambios en los archivos sass
}

exports.css = css;
exports.dev = dev;







