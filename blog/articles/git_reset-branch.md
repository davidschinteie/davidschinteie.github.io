# Git Reset Branch

Save the state of your current branch in another branch, named staging-backup, in case something goes wrong:

```
git commit --allow-empty -m "Backup"
git checkout -b staging-backup
```

Fetch the remote branch and set your branch to match it:

```
git checkout staging
git fetch origin
```

Overwrite remote staging branch with reset to master done locally

```
git push -f
```

Note: This can cause the remote repository to lose commits; use it with care.

Other resources:
 - [How to reset a Git branch to a remote repository](https://www.educative.io/edpresso/how-to-reset-a-git-branch-to-a-remote-repository)
