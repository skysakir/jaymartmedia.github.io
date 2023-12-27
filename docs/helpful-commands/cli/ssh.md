# SSH

SSH is used to connect a secure shell to a remote machine.

Generate SSH key files: `ssh-keygen -f ~/.ssh/gcp -t rsa` (generate an rsa public and privates keys in the files ~/.ssh/gcp/{id_rsa & id_rsa.pub}, will be prompted for password)

Use specific SSH private key: `ssh -i ~/.ssh/gcp/id_rsa root@11.22.33.44` (will be prompted for password)
