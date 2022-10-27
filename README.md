# Leapify-app V0.0.1

- Leapify App

  - Production
  - Develop

### Run it as:

```
npm start
```

### Node Version:

```
node = v16.18.0 ^
npm = v8.19.2 ^
```

### Git flow to merge at public branches:

```
git pull develop
git branch -b 'create your branch locally'
git add .
git commit -m 'Conventional commit message pattern'
git checkout develop
git pull
git checkout 'your created branch'
git rebase develp
git push origin 'your created branch'

Note: If you encounter conflict
fix your conflict first
git add .
git rebase --continue

on the terminal you can click the github link to request PR

Done

Cheers
```

### Pushing stages

```
Multistore
dev -> master

dev = git pull to develop branch -> git checkout test & git rebase develop & git push
master = git pull to dev branch -> git rebase dev & git push
```