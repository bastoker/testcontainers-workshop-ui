#!/bin/zsh
latest_tag=$(git tag --sort=-v:refname | head -n 1)

echo "Using latest tag ${latest_tag} for docker push"
echo "Building image with tag suffix/testcontainers-workshop-ui:${latest_tag}"

docker build -t suffix/testcontainers-workshop-ui:${latest_tag} .