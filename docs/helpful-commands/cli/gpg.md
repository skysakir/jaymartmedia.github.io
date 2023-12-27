# GPG

GPG is a command line tool for encrypting files, typically available on linux and in git bash

`gpg -c {filename.ext}` Encrypt a file with symmetric encryption (prompts for a password, and then produces a file called `{filename.ext}.gpg`)

`gpg {filename.ext.gpg` Decrypt a file (if symmetrically encrypted, prompts for a password, then produces a file called `{filename.ext}`, attempts to overwrite if file already exists, if no, then allows user to enter a new filename)

Resource: https://linux.die.net/man/1/gpg
