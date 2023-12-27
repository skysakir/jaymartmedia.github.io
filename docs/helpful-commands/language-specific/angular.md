# Angular

Angular is a frontend JavaScript framework.

## Running
`ng serve --host 0.0.0.0` serve the app on the local network (by default is only accessible on local machine via localhost

## Generation
### Component

https://angular.io/cli/generate#component

`ng g c {componentName}` shorthand for `ng generate component {componentName}`: Generates component, html, style, spec files and adds to componnent list in module

`ng g c {componentName} -s -t`: Same as above, but with inline template and styles

Dry run (-d) allows you to preview the changes. Generate a component in a particular module with inline styles and template.
> $`ng g c nav-module/profile-dropdown -s -t -d`  
> CREATE src/app/nav-module/profile-dropdown/profile-dropdown.component.spec.ts (690 bytes)  
> CREATE src/app/nav-module/profile-dropdown/profile-dropdown.component.ts (294 bytes)  
> UPDATE src/app/nav-module/nav.module.ts (560 bytes)  
>   
> NOTE: The "dryRun" flag means no changes were made.  

## Tests

`npm run test -- --include='**/app.component.spec.ts'` - run tests for only specific files
