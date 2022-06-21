 # Basic Git Commands

`git init` Create a new local repository 

`git clone <URL of the repository>` Create a working copy of a remote repository

`git add .` Add one or more files to staging

`git commit -m "commit message"` Commit changes to head (but not yet to the remote repository)

`git status` List the files you've changed and those you still need to add or commit

## Git branch

`git branch` List all the branches in your repo, and also tell you what branch you're currently in

`git checkout <branchname>` Switch from one branch to another:

`git checkout -b <branchname>` Create a new branch and switch to it:

`git push origin <branchname>` Push the branch to your remote repository, so others can use it

`git push --delete <remote_name> <branch_name>` Delete Remote Branch 

`git branch -d branch_name` Delete Local Branch

## Git pull

`git pull` Fetch and merge changes on the remote server to your working directory

`git pull origin master` Update your local branch with the master branch

`git pull origin master --allow-unrelated-histories` Force merge between 2 branches that have no common base by default - for instance when you want to add new code to your repo from a different local repo

`git pull --rebase` 

## Usual workflow: 

```
git add .

git commit -m "commit message"

git pull --rebase
```

## Push

`git push`

[push a new local branch to a remote Git repository](https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too)

`git push -u origin new_branch` Push a new local branch to a remote Git repository

## `git pull origin master` alternative:

`git fetch origin`

`git merge origin master`

## Merge

`git merge <branchname>` To merge a different branch into your active branch:

## Gitignore

`touch .gitignore` Create .gitignore file

[gitignore](https://www.atlassian.com/git/tutorials/saving-changes/gitignore)

## Cache

`git rm --cached debug.log` Remove cached files from previous commits

`git commit -m "Start ignoring debug.log"` Start Ignoring debug.log file

## Git setup for automatic upload on live server at git push

`git remote add live ssh://username@domain.com/root/example.git` Add a new live remote

`git remote -v` View current remotes

`git remote rm live` Remove live remote

?? `git config --get remote.origin.url`

?? `git remote show origin`

## Other Commands

`git stash` - when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit.

`git stash pop` - Remove a single stashed state from the stash list and apply it on top of the current working tree state, 

Workflow: `git stash` -> `git checkout -b new_branch` -> `git stash pop`

`git fetch origin`

`git reset --hard origin/master` (overwrite the local changes with the remote repo - this will also delete all your local updates, it's like a fresh restart)

`git diff HEAD^^ HEAD main.c` //to see the difference for a file "main.c" between now and two commits back, here are three equivalent commands:

`git diff --staged` See the changes you just staged

`git reset <path_to_file>` Unstage files

`git checkout -- <file>` Change back the files to how they were at the last commit 

`git rm '*.txt'` Remove all the .txt files

[git cannot see new remote branch](https://stackoverflow.com/questions/12762922/git-cannot-see-new-remote-branch)

`git filter-branch --tree-filter 'rm -f passwords.txt' HEAD` Remove a file named passwords.txt from your entire history

[Remove a large file from several commits ago](https://superuser.com/questions/1191186/remove-large-file-from-several-commits-ago-in-git)

[Adding an existing project to github from a new directory - git remote add origin remote_repo_URL && git remote -v](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

[How can I determine the URL that a local Git repository was originally cloned from?](https://stackoverflow.com/questions/4089430/how-can-i-determine-the-url-that-a-local-git-repository-was-originally-cloned-fr)