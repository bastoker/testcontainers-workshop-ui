#!/bin/zsh
latest_tag=$(git tag --sort=-v:refname | head -n 1)
echo "Using latest tag ${latest_tag} for docker push"
docker push suffix/testcontainers-workshop-ui:${latest_tag}