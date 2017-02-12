# Deployment

## Setting up

To setup, you need to have the following installed:

* [GCloud][gcloud]

You also need to have installed `kubectl`, which powers Kubernetes, using the
following command:

```bash
gcloud components install kubectl
```

This also expects you've spun up a Google Container Engine (GKE) cluster,
similar to the one we use in the Student Robotics Stack.

## Logging into Kubernetes

```bash
gcloud container clusters get-credentials <cluster_name>
```

## HTTPS certificates

The application needs a HTTPS certificate and private key to be in place,
otherwise the app won't start. We use Kubernetes secret management for this.

```bash
kubectl create secret generic https-keys \
    --from-file=cert.pem \
    --from-file=key.pem
```

## Deploy the application

Todo: Template this somehow

Within `kubernetes/service.yml`, you need to replace the static IP we use
(i.e. `104.155.107.130`) with the one you intend to use to expose your
application. Then you run:

```bash
kubectl create -f kubernetes/
```

This should deploy your application to the cluster, and expose it on the IP you
specified.

## Deploying new versions

Because we don't do any sophisticated tagging, we have to force Kubernetes to
pull the latest version of the app. We do this by doing the following:

```bash
kubectl patch deployment srobo-website \
    -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"
```
