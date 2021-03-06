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
git stash apply <index-of-stash> // for instance git stash apply 2
```

Interstingly enough, `git stash pop` and `git stash apply 0` uses differently the stash history.

When a developer uses the git stash apply command, the most recently saved stash overwrites files in the current working tree but leaves the stash history alone. 

In contrast, the pop command restores files but then deletes the applied stash

other useful stash commands:

```
git stash clear // empties the stash list by removing all the stashes.
git stash drop <stash_id> // deletes a particular stash from the stash list.
git stash branch <new_branch_name stash_id> // which creates a new branch based on the commit the stash was created from and pops the stashed changes to it.
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

## Comparing commits
You can compare the state of your repository across branches, tags, commits, forks, and dates.

To quickly compare two commits directly with each other in a two-dot diff comparison on GitHub, edit the URL of your repository's "Comparing changes" page.

For example, this URL uses the shortened seven-character SHA codes to compare commits c3a414e and faf7c6f: https://github.com/github/linguist/compare/c3a414e..faf7c6f


To research:
 - git bisect
 - git squash and git fixup
 - git hooks

Other resources:
 - [13 Advanced (but useful) Git Techniques and Shortcuts](https://www.youtube.com/watch?v=ecK3EnyGD8o)
 - [Comparing commits](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)
 - [A practical guide to using the git stash command](https://opensource.com/article/21/4/git-stash)
