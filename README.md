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
## To creat _tsconfig_ file
```
tsc --init
```
## Some changes required in tsconfig file
- "target": "ES2022",
- "module": "NodeNext",
- "moduleResolution": "NodeNext",
## To create _package.json_ file manually
```
npm init
```
> to create auto file
```
npm init -y
```
## To create _node_modules and package_lock.json_ files
```
npm i @types/node -D
```
## To change directory
- cd foldername    (used to go inside the folder)
- cd ..            (used to go outside the folder)

# To create togather _package.json and package_lock.json_ files
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

## To configure your Git name and email, use the following commands
```
 git config --global user.name "Your Name"
```
```
   git config --global user.email "youremail@example.com"
```
### To Confirm your configuration by executing
```
git config --list
```

# GitBash Installation:
- For those who haven't yet installed GitBash, it can be downloaded from [GitBash](https://git-scm.com/downloads). Please verify your Git installation by using the command
```
git -v.
```
> To initialize git
```
git init
```
> To check hidden folder on git bash
```
ls -lart
```
> To check status
```
git status
```
> To add all files
``` git add .
```
> To add single file (git add fileName)
```
git add index.html
```
> To save our files
```
git commit
```
```
initial commit
```
> After this a win editor is opened to escaped from this editor
```
Esc:wq
```
## To create a Blank file in the terminal
```
touch about.html
```
```
touch contact.html
```
```
tuoch monuments.html
```

> To reverse the a file in last commit
```
git checkout contact.html
```
> To reverse all the file in last commit
```
git checkout -f
```
## git log tell us about our commit
```
git log
```
> To check last five commit
```
git log -p -5
```
# To exit press q
## To diffrentiate between two files
```
git diff
```
> To compaire the last commit
```
git diff --staged
```

