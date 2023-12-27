# Kubernetes

Kubernetes is a tool used for orchestrating containers.

## Namespaces

### Set default namespace

`kubectl config set-context --current --namespace=<namespace>`

## Exec into pod

Open bash shell `kubectl exec -it myapp-123 -- /bin/bash` (`//bin//bash` on Windows)

Run command and exit `kubectl exec myapp-123 -- ls`

## Cronjobs/Jobs

### Create and run a job based on a cronjob

this can be used to manually trigger a cronjob

`kubectl create job --from=cronjob/<cronjob name> <job name>`

## JQ

JQ is a CLI tool that can be used to filter/format json. It can be used to select specific values from json output from the `kubectl get <resource>` command.

See [my notes on jq for more info](./jq)

### Get all images for a pod

```sh
$ kubectl get pod/mypod -o json | jq '.spec.containers[].image' -r

nginx
image2
image3
```

### Get all resource types, names, and images

```sh
$ kubectl get all -o json | jq '.items[] | ("Resource kind: " + .kind),("Resource name: " + .metadata.name),("images: " + spec.containers[]?.image),("")' -r

Resource kind: Pod
Resource name: mypod
images: nginx

Resource kind: Service
Resource name: myservice
```

