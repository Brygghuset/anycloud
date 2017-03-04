const gulp = require('gulp');

gulp.task('default', () => {
  // config
  // copy to dist
  // what else?
  // deploy?
})

gulp.task('config', () => {
  // build serverless.yml files, one for each cloud
  // start with common template, override parts of sections from the provider specific config files
})

gulp.task('copy', () => {
  // copy each deployable provider to dist folder
})

gulp.task('deploy', () => {
  // run sls deploy for each provider from dist folder
})
