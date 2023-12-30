# Encryption

## E2EE (End-to-end encryption)

Dr. Mike Pound explains how end-to-end encryption works, and vulnerabilities that could arise if e2e encryption could not be used: https://youtu.be/jkV1KEJGKRA (Computerphile)

## RSA (Rivest–Shamir–Adleman)

RSA is a standard asymmetric (public/private) key encryption algorithm. Often used for SSH keys, TLS handshakes, and more. RSA is slower than symmetric key algorithms such as AES, so RSA is typically used to exchange a primary key at the beginning of a session. Then the symmetric key is used to encrypt and decrypt the data payloads that are transmitted throughout the session. 

### Breaking RSA

computerphile: https://www.youtube.com/watch?v=-ShwJqAalOk

## Diffie-Hellman key exchange

The Diffie-Hellman key exchange is a way for two parties to create a shared symmetric encryption key.

In this video Dr. Mike Pound combines colored water to demonstrate how Diffie-Hellman allows two parties to create a shared symmetric key without knowing the others secret key: https://www.youtube.com/watch?v=NmM9HA2MQGI (Computerphile)

In this video Dr. Mike Pound discusses the mathmathmatics behind Diffie-Hellman, specifically the concept of how (g<sup>a</sup>)<sup>b</sup> == g<sup>a\*b</sup> == (g<sup>b</sup>)<sup>a</sup> : https://www.youtube.com/watch?v=Yjrfm_oRO0w (Computerphile)

In this video Dr. Mike Pound explains how DH is susceptible to a man-in-the-middle attack and how RSA works in conjunction with DH to protect against this: https://youtu.be/vsXMMT2CqqE (Computerphile)

## AES (Advanced Encryption Standard)

AES is a standard symmetric key encryption algorithm that uses 128 bit blocks, with a 128, 192, or 256 bit key. Often used for SSL/TLS, file encryption, and more. AES is faster than RSA, and therefore typically used to encrypt and decrypt data payloads once both parties have the key.

In this video Dr. Mike Pound discusses how and why AES was chosen as the standard symmetric key encryption algorithm: https://youtu.be/VYech-c5Dic (Computerphile)

In this video Dr. Mike Pound walks through the AES algorithm: https://youtu.be/O4xNJsjtN6E (Computerphile)

## TLS (Transport Layer Security)

In this video Dr. Mike Point discusses where TLS came from and where it sits within the layers of the internet: https://www.youtube.com/watch?v=0TLDTodL7Lc (Computerphile)

### TLS Handshake

In this video Dr. Mike Pound discusses the TLS handshake: https://www.youtube.com/watch?v=86cQJ0MMses (Computerphile)

## SP network (Substitution/Permutation)

In this video Dr. Mike Pound discusses the concept of a substitution and permutation network which is what AES is based on: https://youtu.be/DLjzI5dX8jc (Computerphile)

## Elliptic Curve

Elliptic Curve cryptography is an alternative to Diffie-Hellman. Elliptic curve is more difficult to reverse engineer and therefore can use shorter keys which speeds gives elliptic curve a speed advantage over Diffie-Hellman.

There may be some curves which are not as secure as others (allow backdoors), therefore there are still researchers who are skeptical about trusting elliptic curve cryptography.

In this video Dr. Mike Pound explains the concept of elliptic curve cryptography: https://youtu.be/NF1pwjL9-DE (Computerphile)

In this video Dr. Mike Pound discusses a time when NIST pushed for specific values for P and Q which along with other circumstances led researchers to believe that these values of P and Q allowed the NSA a backdoor into keys generated using these values: https://youtu.be/nybVFJVXbww (Computerphile)
