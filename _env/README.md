# Deploying the Website

## Setting up

This assumes you've got access to a kubernetes cluster. We have [a guide][guide]
on how we do this at Student Robotics.

## Deploy the application

```bash
kubectl create -f kubernetes/
```

This should deploy your application to the cluster, and expose it on the host
container under port `30000`.

## Deploying new versions

Because we don't do any sophisticated tagging, we have to force Kubernetes to
pull the latest version of the app. We do this by doing the following:

```bash
kubectl patch deployment website \
    -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"
```

[gcloud]: https://cloud.google.com/sdk/downloads
[guide]: https://github.com/srobo/infrastructure#interacting-with-kubernetes
