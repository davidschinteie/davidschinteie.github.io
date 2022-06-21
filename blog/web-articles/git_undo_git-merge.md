# Undo Git merge/commit

## How do you undo a Git merge/commit before push

```
git reset --hard <last-undamaged-commit-sha>
```
or if the remote branch is all you need

```
git reset --hard origin/<name-of-branch>
```

## How do you undo a Git merge after pushing the changes?

If you have already pushed the merge commit to the remote repo, you will need to make a new commit that reverts the changes.

```
git revert -m 1 <merge-commit-sha>
```

This will create a new commit that reverses the changes from the merge commit.

Other resources:
 - [How do you undo a Git merge?](https://www.gitkraken.com/learn/git/problems/undo-git-merge#:~:text=Now%2C%20if%20you%20have%20already,commit%20from%20the%20context%20menu.)
