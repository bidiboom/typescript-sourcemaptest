Just a test for gulp-typescript/gulp-sourcemaps

To have the build result :

- `npm install`
- `gulp`

You will have a a folder named `compiled` which will contain transpiled files with their sourcemap.

- Case 0: No options, sourceRoot is written using absolute path. Not usable. I need relative path so i try case 2
- Case 1: I give the sourceRoot to the sourcemaps plugin. It will put what i gave as an options as-is to every file without taking a look to the depth
- Case 2: I give the sourceRoot to the typescript plugin. It will put what i gave as an options as-is to every file without taking a look to the depth
- Case 3: I give the sourceRoot to the typescript and sourcemaps plugin. It will put what i gave as an options as-is to every file without taking a look to the depth
