const {dest,src,watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

const css = (done)=>{
    src("src/scss/**/*.scss")
        .pipe( plumber() )
        .pipe( sass() )
        .pipe( dest("src/build/css") );
    done();
}

const dev = ( done )=>{
    watch("src/scss/**/*.scss",css);
    done();
}

exports.css = css;
exports.dev = dev;

