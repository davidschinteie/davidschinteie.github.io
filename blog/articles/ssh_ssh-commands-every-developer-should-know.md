# SSH commands every developer should know

## 1. Add your ssh key to server 

### Method 1: Manually copy the public ssh key to the server

    Step 1 Get your local ssh-key
    ```
    cat ~/.ssh/id_rsa.pub
    ```
    Step 2 Create ssh directory & authorized_keys file if not exists
    ```
    mkdir -p /home/user_name/.ssh
    touch /home/user_name/.ssh/authorized_keys
    ```
    Step 3 Edi authorized_keys file with your own ssh-key
    ```
    vim /home/user_name/.ssh/authorized_keys
    ```
### Method 2: Automatically copy the ssh key to server

```
ssh-copy-id user@hostname.example.com
```

Note: while this method seems the go to option, there are use cases where you can't use it (like adding someone else's ssh key or root ssh isn't available from your machine)
You should be able to use both.

Other resources:
 - [How to Add SSH Public Key to Server](https://linuxhandbook.com/add-ssh-public-key-to-server/)
