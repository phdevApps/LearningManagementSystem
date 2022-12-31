import { watch, task, series, parallel, registry, tree, lastRun, src, dest, symlink } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import bro from 'gulp-bro';
import babelify from 'babelify';
import del from 'del';
import autoPrefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import node from 'nodemon';
import path from 'path';
require("dotenv").config();

const sass = gulpSass(dartSass);
const webServ = browserSync.create()

const Port_src = process.env.PORT || 81;
const Port_srv = process.env.PORT_SRV || 80;





const browserSyncOpts = {
    // server: { baseDir: './' }
    // open: 'tunnel',//'local', 'external', 'tunnel', 'ui', 'ui-external'
    // host: 'www.myweb.com',
    port: Port_srv,
    proxy: `http://localhost:${Port_src}`,

}


const paths = {
    cleanP: {
        rmPub: './public',
        expPub: './public/*'
    },
    sass: {
        src: './src/sass/style.scss',
        src_imports: './src/sass/base/*.css',
        dist: './public/css/',
        watch: './src/sass/**/*.scss'
    },
    html: {
        src: './src/views/*.html',
        dist: './public/',
        watch: './src/views/**/*.html'
    },
    fonts: {
        src: './src/assets/fonts/**/*.*',
        dist: './public/fonts',
        watch: './src/assets/fonts/**/*.*'
    },

    js: {
        src: './src/js/script.js',
        src_imports: './src/js/imports_ext/*.js',
        dist: './public/js/',
        watch: './src/js/**/*.js'
    },
    ejs: {
        src: './src/views',
        dist: './src/views',
        watch: './src/views/**/*.*'
    },
    icons: {
        src: './src/icons/**/*.*',
        dist: './public/icons/',
        watch: './src/icons/**/*.*'
    },
    imgs: {
        src: './src/assets/images/**/*.*',
        dist: './public/imgs/',
        watch: './src/assets/images/**/*.*'
    },
    vids: {
        src: './src/assets/videos/**/*.*',
        dist: './public/imgs/',
        watch: './src/assets/videos/**/*.*'
    },
    vendors: {
        src: './src/vendors/**/*.*',
        dist: './public/vendors',
        watch: './src/vendors/**/*.*'
    }
};

// console.log('\x1b[33m Welcome to the app! \x1b[0m');
// console.log("\x1b[31m", "[-] deleted files/dirs", "\x1b[0m");

export const cleanPub = () => del([paths.cleanP.rmPub]).then(info => console.log("\x1b[31m", `\n[-] deleted files/dirs: ${info}\n`, "\x1b[0m"));
// export const compStyles = () => src(paths.sass.src).pipe(sourcemaps.init()).pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)).pipe(autoPrefixer()).pipe(sourcemaps.write('./')).pipe(dest(paths.sass.dist)).pipe(webServ.stream());
// export const compStyles = () => src(paths.sass.src).pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)).pipe(autoPrefixer()).pipe(dest(paths.sass.dist)).pipe(webServ.stream());
export const copyCssImports = () => src(paths.sass.src_imports).pipe(dest(paths.sass.dist)).pipe(webServ.stream());
export const compStyles = () => src(paths.sass.src).pipe(sass().on('error', sass.logError)).pipe(autoPrefixer()).pipe(dest(paths.sass.dist)).pipe(webServ.stream());
export const copyJsImports = () => src(paths.js.src_imports).pipe(dest(paths.js.dist))
export const copyVendors = (cb) => {
    // del([paths.vendors.dist]).then(info => console.log("\x1b[31m", `\n[-] deleted files/dirs: ${info}\n`, "\x1b[0m"))
    src(paths.vendors.src,{encoding:false}).pipe(dest(paths.vendors.dist))
    cb()
}
export const compJS = () => src(paths.js.src).pipe(sourcemaps.init()).pipe(bro({ transform: [babelify.configure({ "presets": ["@babel/preset-env"] }), ['uglifyify', { global: 'ture' }]] })).pipe(sourcemaps.write('./')).pipe(dest(paths.js.dist))
export const minIcons = () => src(paths.icons.src,{encoding:false}).pipe(imagemin()).pipe(dest(paths.icons.dist));
// export const minIcons = () => src(paths.icons.src).pipe(dest(paths.icons.dist));
export const minImgs = () => src(paths.imgs.src,{encoding:false}).pipe(imagemin()).pipe(dest(paths.imgs.dist));
// export const minImgs = () => src(paths.imgs.src).pipe(dest(paths.imgs.dist));
export const copyHTML = () => src(paths.html.src).pipe(dest(paths.html.dist))
export const copyFonts = () => src(paths.fonts.src,{encoding:false}).pipe(dest(paths.fonts.dist))

export const ws = () => webServ.init(browserSyncOpts);

export const app = () => node('.')

// export const par = series(app, ws)

// export const prepare = series(cleanPub, compStyles, compJS, copyHTML, copyFonts, minIcons, minImgs)
export const prepare = series(cleanPub, copyVendors, copyCssImports, compStyles, copyJsImports, compJS, copyFonts, copyHTML, minIcons, minImgs)


export const mWatch = parallel([() => watch(paths.sass.watch, compStyles),
() => watch(paths.js.watch, compJS).on('change', () => webServ.reload()),
() => watch(paths.js.src_imports, copyJsImports).on('change', () => webServ.reload()),
() => watch(paths.html.watch, copyHTML).on('change', () => webServ.reload()),
() => watch(paths.ejs.watch).on('change', () => webServ.reload()),
() => watch(paths.fonts.watch, series(function rmFiles() { del(paths.fonts.dist) }, copyFonts)).on('change', () => webServ.reload()),
() => watch(paths.icons.watch, minIcons).on('change', () => webServ.reload()),
() => watch(paths.imgs.watch, minImgs).on('change', () => webServ.reload()),
() => watch(paths.sass.src_imports, copyCssImports).on('change', () => webServ.reload()),
() => watch(paths.vendors.watch, copyVendors).on('change', () => webServ.reload()),
() => { console.log('started watching for changes in front-end files'); }
])


export const startServer = () => {
    node({
        script: 'app.js',
        ignore: ['node_modules', 'src', 'public', 'gulpfile.babel.js']
        // ignore:['*']


    }).on('start', () => {
        if (webServ.active) {
            webServ.reload()
        } else {
            setTimeout(() => {

                webServ.init(browserSyncOpts);
            }, 1000);
        }
    })


    // .on('exit', () => {
    //     webServ.pause()
    // })



    // setTimeout(() => {
    //     ws()
    // }, 50)D
}

export const start = series(prepare, parallel(startServer, mWatch))


export const fetchData = () => fetch("http://localhost:Port_src")
    .then((it) => it.text())
    .then(async (data) => console.log(await data));




















// const watch = () => {
//   gulp.watch(routes.pug.watch, pug);
//   gulp.watch(routes.img.src, img);
//   gulp.watch(routes.scss.watch, styles);
//   gulp.watch(routes.js.watch, js);
// };

// const watch = parallel([
//     () => gulp.watch(routes.pug.watch, pug),
//     () => gulp.watch(routes.img.src, img),
//     () => gulp.watch(routes.scss.watch, styles),
//     () => gulp.watch(routes.js.watch, js)]
//   )

