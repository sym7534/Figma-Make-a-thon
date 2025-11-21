# 0. One-time setup

git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "code --wait"   # or nano/vim/etc.
git config --list                               # show current config


# 1. Getting a repo

# Create a brand-new repo in the current folder
git init

# Clone an existing remote repo
git clone https://github.com/user/repo.git
git clone git@github.com:user/repo.git          # SSH
git clone <url> my-folder-name                  # clone into specific dir


# 2. Checking status & history

git status                                      # what changed / staged / untracked
git log                                         # full commit history
git log --oneline --graph --all                 # compact, with branches
git show <commit>                               # show details of a commit
git diff                                        # unstaged changes vs last commit
git diff --staged                               # staged changes vs last commit


# 3. Adding, committing, and managing files

git add file.cpp                                # stage one file
git add src/                                    # stage a folder
git add .                                       # stage everything (careful)
git reset HEAD file.cpp                         # unstage a file

git commit -m "meaningful message"              # commit staged changes
git commit                                      # open editor for multi-line message

# File operations
git rm file.cpp                                 # delete file + stage deletion
git mv old.cpp new.cpp                          # rename/move file

# Newer “undo” commands
git restore file.cpp                            # discard *unstaged* changes
git restore --staged file.cpp                   # unstage, keep changes in working tree


# 4. Branches & switching work

# Basic branching
git branch                                      # list branches
git branch feature-x                            # create new branch
git switch feature-x                            # switch to branch (newer syntax)
git switch -c feature-x                         # create + switch

# older syntax (still everywhere):
git checkout feature-x
git checkout -b feature-x                       # create + switch

# Merging changes
git switch main
git merge feature-x                             # merge feature-x into main

# After resolving conflicts:
git add <fixed-files>
git commit                                      # completes the merge

# Stashing (temporary shelving)
git stash                                       # save dirty changes, clean working tree
git stash list                                  # show stashes
git stash apply                                 # reapply latest stash (keep it)
git stash pop                                   # reapply and remove stash
git stash drop                                  # delete latest stash


# 5. Working with remotes (GitHub, GitLab, etc.)

# Inspect / add remotes
git remote -v                                   # list remotes
git remote add origin <url>                     # add a remote called 'origin'
git remote set-url origin <url>                 # change remote URL

# Getting updates
git fetch origin                                # download new data, don’t merge
git pull                                        # fetch + merge current branch
git pull origin main                            # pull specific branch

# Pushing your changes

# First time pushing a new branch:
git push -u origin main                         # set upstream + push
git push -u origin feature-x                    # for a new feature branch

# Afterwards:
git push                                        # push to its upstream


# 6. Fixing mistakes (local history editing)

# Soft / mixed / hard reset (rewind branch pointer):
git reset --soft HEAD~1                         # undo last commit, keep changes staged
git reset HEAD~1                                # undo last commit, keep changes unstaged
git reset --hard HEAD~1                         # drop last commit AND changes (danger)

# Revert a commit (safe for shared branches):
git revert <commit-hash>                        # new commit that undoes that commit


# 7. Tags

git tag                                         # list tags
git tag v1.0                                    # create lightweight tag
git tag -a v1.0 -m "Release 1.0"                # annotated tag
git push origin v1.0                            # push specific tag
git push origin --tags                          # push all tags
