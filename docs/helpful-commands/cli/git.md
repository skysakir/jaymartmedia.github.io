# Git

Git is a command line tool for tracking changes in text files. Often used by software development teams to collaborate on shared code.

`git checkout -b {branchName}` Create a new branch off of the current branch and immediately check it out

`git push -u origin {branchname}` Push new branch to remote

`git config --global http.sslVerify false` - disable ssl verification (DON'T DO THIS UNLESS YOU HAVE A VERY GOOD REASON!)

`git config --global http.sslVerify true` - enable ssl verification (always do ASAP after disabling)

`git update-index --skip-worktree packages/backend/local-config.json` - ignore changes to a tracked file in git. This could be useful if you have to change a file locally, but don't want to commit those changes. It can be dangerous to forget that it is ignored though. Use carefully.

`git update-index --no-skip-worktreen packages/backend/local-config.json` - stop ignoring changes to a tracked file in git. Undoes the command above.

`git log --shortstat --author "JayMartMedia" --since "2 weeks ago" --until "1 week ago" | grep "files changed" | awk '{files+=$1; inserted+=$4; deleted+=$6} END {print "files changed:", files, "lines inserted:", inserted, "lines deleted:", deleted}'` - check lines and files changed by user in time period