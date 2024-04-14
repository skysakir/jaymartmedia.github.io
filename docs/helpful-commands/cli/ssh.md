# SSH

SSH is used to connect a secure shell to a remote machine.

Generate SSH key files: `ssh-keygen -f ~/.ssh/gcp -t rsa -C "Comment here" -b 4096` (generate an rsa public and privates keys in the files `~/.ssh/gcp/{id_rsa & id_rsa.pub}`, will be prompted for password)
- `-f` specifies the output file names
- `-t` specifies the encryption type, RSA
- `-C` adds a human-readable comment which can make it easier to identify keys in the future
- `-b` specifies the number of bits in the key, 2048 is the default (and typically the recommended minimum), 4096 is recommended by some such as Github

Use specific SSH private key: `ssh -i ~/.ssh/gcp/id_rsa root@11.22.33.44` (will be prompted for password)

## Resources

More info on generating keys: https://www.ssh.com/academy/ssh/keygen
