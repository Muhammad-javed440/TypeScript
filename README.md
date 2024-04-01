# Notes of Typescript
## To install typescript globally
```
 npm install -g typescript
```
> To install manually typescript
```
npm install typescript
```
> To check installed version of typescript
```
tsc -v
```
> or 
```
tsc --version
```
## To creat __tsconfig__ file
```
tsc --init
```
## To create __package.json__ file manually
```
npm init
```
> to create auto file
```
npm init -y
```
## To create __node_modules and package_lock.json__ files
```
npm i @types/node -D
```
## To change directory
- cd foldername    (used to go inside the folder)
- cd ..            (used to go outside the folder)

# To create togather __package.json and package_lock.json__ files
```
npm install -D typescript@next
```
## To install 2016 version
```
npm i -D @types/node@16
```
## Development dependencies are typically tools or libraries that are only
needed duringdevelopment and testing, not in production. 
```
npm install typescript --save-dev
```
### Additionally, you can configure TypeScript-specific options in your tsconfig.json file within your project directory.










