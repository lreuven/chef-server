#!/bin/bash
# This script is meant to be run from a Circle CI job to automatically deploy to the specified environment.

set -e

function deploy () {
    git clone https://github.com/inPact/helm-live.git /tmp/helm-live
    helm upgrade report-server "$live_path"  --values "$values_file" --set image.tag="${CIRCLE_BRANCH////_}-$(echo $CIRCLE_SHA1 | cut -c -7)"
    echo "Helm $CIRCLE_BRANCH branch. with $live_path"
}
# ====================================================================================================================
# ================================================      IGNORE        ================================================
# ====================================================================================================================
if [[ "$CIRCLE_TAG" =~ ^release-.*$ ]]; then
  echo "Not in use  !!!! - Found release tag. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "master" ]]; then
 echo "On $CIRCLE_BRANCH branch. with $live_path"
elif [[ "$CIRCLE_BRANCH" == "azure-dev" ]]; then #git push origin HEAD:azure-dev
    export KUBECONFIG="/tmp/helm-live/azure/dev/kube_config"
    #export live_path="/tmp/helm-live/azure/dev/services/reporting-server"
    export live_path="/tmp/helm-live/azure/reporting-server"
    export values_file="/tmp/helm-live/azure/reporting-server/values-dev.yaml"
elif [[ "$CIRCLE_BRANCH" == "azure-int-il" ]]; then
    echo "On $CIRCLE_BRANCH branch. with $live_path"
elif [[ "$CIRCLE_BRANCH" == "azure-stage-il" ]]; then
    echo "On $CIRCLE_BRANCH branch. with $live_path"
elif [[ "$CIRCLE_BRANCH" == "azure-prd-il" ]]; then
   echo "On $CIRCLE_BRANCH branch. with $live_path"
else
  echo "Did not find release tag or master branch, so skipping deploy."
  exit 0
fi

deploy