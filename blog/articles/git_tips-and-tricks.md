# Git Tips and Tricks

## Git alias for faster commits

```
git commit -am "commit message"
```

instead of using

```
git add .
git commit -m "commit mesage"
```

or add an alias

```
git config --global alias.ac "commit -am"
```

and now we can simply use

```
git ac "commit message"
```

Note: This runs into issues with new files, though. Since the -a flag only adds modified files it will not add new files or deleted files. 

## Update commits unpushed to remote


If you haven't already pushed the merge commit to the remote repo, and you noticed a mistake in the commit message you can simply use the --amend command to update the last commit

```
git commit --amend -m "new commit message"
```

Or if you forgot some updates to couple of files

```
git add .
git commit --amend --no-edit // -no-edit flag will keep the same commit message
```

## Update commits already pushed to remote

Use with caution cause this will overwrite your remote commits with your local changes. However, this can lose your remote commits that is not on your machine

```
git push origin/remote-branch --force
```

Alternatively, you can undo the pushed commits by using:

```
git revert <sha of commit>
```

This will undo a commit with a new commit, meaning your history will disaply the code changes but the state of the code will be restored to the previous state of the unwanted commit.

## Save your work without commit

If you find yourself in a situation where you've done some changes but aren't complete just yet and you have to move to another branch or you simply want to save your work without commit, then you can use git stash

```
git stash // saves your work
git stash pop // get back to where you were
```

or if you use it frequently you can add a label to your stash

```
git stash save name-your-tmp-changes

```

that way you can find it easily in your list of stashes and you can use its index to use it

```
git stash list
git stash apply <index-of-stash>
```

## Visualize your commits

```
git log // for a simple log of your commits
git log --graph --oneline --decorate // for a more graphic way
```

## Remove local changes in the state of the remote repository

```
git fetch origin
git reset --hard origin/master // or any other of your branch: origin/remote-branch
```

## Shortcut to go back to the previous branch

```
git checkout -
```

To research:
 - git bisect
 - git squash and git fixup
 - git hooks

Other resources:
 - [13 Advanced (but useful) Git Techniques and Shortcuts](https://www.youtube.com/watch?v=ecK3EnyGD8o)
