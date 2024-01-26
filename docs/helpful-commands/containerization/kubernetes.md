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

## KIND

[KIND](https://kind.sigs.k8s.io/) stands for Kubernetes IN Docker. Kind is a tool that creates a development Kubernetes cluster inside of Docker quickly and easily. KIND also allows local multi-node setups.

`choco install kind` - Use Chocolatey to install kind on Windows

`kind create cluster --name my-kind-cluster` - Create a cluster

`kubectl config get-contexts` - List clusters

`kubectl config use-context {name of context}` - Switch to the KIND cluster

`kind delete cluster --name my-kind-cluster` - Delete the KIND cluster

## Configuring a KIND cluster
KIND also allows you to customize your cluster when it is created via a [yaml config file](https://kind.sigs.k8s.io/docs/user/configuration/#nodes). ([related blog post](https://dotnetninja.net/2021/03/running-a-multi-node-kubernetes-cluster-on-windows-with-kind/))

```yaml title="./my-cluster-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
```

`kind create cluster --name my-custom-kind-cluster --config ./my-cluster-config.yaml` - Create a KIND cluster based on the config file

## JQ

JQ is a CLI tool that can be used to filter/format json. It can be used to select specific values from json output from the `kubectl get <resource>` command.

See [my notes on jq for more info](../cli/jq)

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

