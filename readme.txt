
https://github.com/FortAwesome/angular-fontawesome
  Tem a documentacao abaixo do link acima


no video abaixo mostra como instalar o fontawesome ao minuto 18min.
https://www.youtube.com/watch?v=sdbl2iWQf9M

npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/angular-fontawesome@2.x
npm install @ngx-translate/core
npm install bootstrap --legacy-peer-deps
ng g environments

npm install @fortawesome/angular-fontawesome@0.12.0 --legacy-peer-deps
npm install @fortawesome/fontawesome-svg-core --legacy-peer-deps

npm install leaflet --legacy-peer-deps

Tive que atualizar para a ultima versao do angular e executar o comando
    npm install @fortawesome/angular-fontawesome@2.x
ng update @angular/core@latest @angular/cli@latest --force

ng add @ng-bootstrap/ng-bootstrap --legacy-peer-deps --force

npm install ngx-toastr --save
npm install ngx-pagination --save
npm install ng2-charts --save
npm install sweetalert2 --save

npm install @ngx-translate/http-loader


Ler
https://sass-lang.com/documentation/breaking-changes/import/





ERROS resolvidos com o windsurf:
---------------------------

Windsurf
6:49 pm, Jul 2, 2025
The issue you're encountering is due to a TypeScript feature called "Definite Assignment Assertion".

In TypeScript, when you declare a property without an initializer, the compiler checks if the property is definitely assigned a value in the constructor. If it's not, TypeScript throws an error.

In your case, the property _showSidebar is declared as an @Input() property, which means it's expected to be initialized by the parent component that uses the
Header
 component.

However, TypeScript doesn't know that the parent component will definitely assign a value to _showSidebar, so it throws an error.

To fix this issue, you can use the "Definite Assignment Assertion" operator, which is the exclamation mark !, to tell TypeScript that you're certain the property will be assigned a value.

Here's the corrected code:

typescript
@Input() _showSidebar!: boolean;
By adding the ! operator, you're asserting that _showSidebar will definitely be assigned a value, and TypeScript will no longer throw an error.

Note that this is a common pattern when working with @Input() properties in Angular, as the parent component is responsible for providing the value.

---------------------------







PS C:\MyCard\Angular-wksp\lojaHeroina> ng update @angular/core@latest @angular/cli@latest --force
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 20.0.5 to perform the update.
(node:57296) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
(Use `node --trace-deprecation ...` to show where the warning was created)
Using package manager: npm
Collecting installed dependencies...
Found 27 dependencies.
Fetching dependency metadata from registry...
                  Package "@fortawesome/angular-fontawesome" has an incompatible peer dependency to "@angular/core" (requires "^15.0.0" (extended), would install "20.0.6").
    Updating package.json with dependency @angular-devkit/build-angular @ "20.0.5" (was "19.2.15")...
    Updating package.json with dependency @angular/cli @ "20.0.5" (was "19.2.15")...
    Updating package.json with dependency @angular/compiler-cli @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency typescript @ "5.8.3" (was "5.7.3")...
    Updating package.json with dependency @angular/common @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency @angular/compiler @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency @angular/core @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency @angular/forms @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency @angular/platform-browser @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "20.0.6" (was "19.2.14")...
    Updating package.json with dependency @angular/router @ "20.0.6" (was "19.2.14")...
UPDATE package.json (1249 bytes)
✔ Cleaning node modules directory
✔ Installing packages

(node:49616) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
(Use `node --trace-deprecation ...` to show where the warning was created)
** Executing migrations of package '@angular/cli' **

❯ Update workspace generation defaults to maintain previous style guide behavior.
UPDATE angular.json (4120 bytes)
  Migration completed (1 file modified).

❯ Migrate imports of 'provideServerRendering' from '@angular/platform-server' to '@angular/ssr'.
  Migration completed (No changes made).

❯ Migrate 'provideServerRendering' to use 'withRoutes', and remove 'provideServerRouting' and 'provideServerRoutesConfig' from '@angular/ssr'.
  Migration completed (No changes made).

❯ Update 'moduleResolution' to 'bundler' in TypeScript configurations.
  You can read more about this, here: https://www.typescriptlang.org/tsconfig/#moduleResolution
  Migration completed (No changes made).

** Optional migrations of package '@angular/cli' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

 Select the migrations that you'd like to run [use-application-builder] Migrate application
projects to the new build system. (https://angular.dev/tools/cli/build-system-migration)

❯ Migrate application projects to the new build system.
  Application projects that are using the '@angular-devkit/build-angular' package's 'browser' and/or 'browser-esbuild' builders will be migrated to use the new 'application' builder.
  You can read more about this, including known issues and limitations, here: https://angular.dev/tools/cli/build-system-migration
UPDATE package.json (1232 bytes)
UPDATE angular.json (4060 bytes)
✔ Packages installed successfully.
  Migration completed (2 files modified).

** Executing migrations of package '@angular/core' **

❯ Moves imports of `DOCUMENT` from `@angular/common` to `@angular/core`.
  Migration completed (No changes made).

❯ Replaces usages of the deprecated InjectFlags enum.
  Migration completed (No changes made).

❯ Replaces usages of the deprecated TestBed.get method with TestBed.inject.
  Migration completed (No changes made).

** Optional migrations of package '@angular/core' **

This package has 1 optional migration that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

 Select the migrations that you'd like to run

PS C:\MyCard\Angular-wksp\lojaHeroina>






























































