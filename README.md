# Introduction

Monday July 3rd 2023. Starting to get hands on practice.

Modifying file
git commit -a -m "name"

# Commands for git

### Local repo commands

- `git init` create new repo (local)
- `git status || git commit status ` check status
- `git add .` for adding (stage) all the files or `git add file.txt` for specific ones
- `git reset .` remove file from staging
- `git commit -m "commit name"` Commit staged files to repo
- `git commit -a -m "commit name" || git commit -am "commit name"` add and commit together
- `git log` shows history of commit

### Remote repo commands

- `git remote` List current remotes in the local repo
- `git remote add "origin(name)" <url-to-your-github-repo>` Link remote
- `git push origin(remote) master(local) -u` push from local to remote (usually main instead of master)
  > Use -u flag to set origin as the upstream remote in your git config so git pull can be used without any arguments in the future.
- `git fetch` to fetch from remote
- `git merge` to merge remote and local
- `git pull (origin master)` to do fetch & merge together

### Branching

- `git branch` list the branches
- `git branch -M name` change name of branch (this case: name)
- `git branch hello` makes a new branch called hello
- `git branch -d hello` deletes hello branch (Use -D for force delete)
- `git checkout hello` moves into branch hello
- `git checkout -b hello` creates hello and moves into it

### Merge conflict

- `git diff` see difference
- `git merge --abort` goes back to state before merge
