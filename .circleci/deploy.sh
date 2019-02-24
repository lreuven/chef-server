#!/bin/bash
# This script is meant to be run from a Circle CI job to automatically deploy to the specified environment.

set -e

function deploy () {
    git clone https://github.com/inPact/helm-live.git /tmp/helm-live
    helm upgrade --namespace "$namespace" "$name" "$live_path"  --values "$values_file" --set image.tag="${CIRCLE_BRANCH////_}-$(echo $CIRCLE_SHA1 | cut -c -7)"
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
    export live_path="/tmp/helm-live/azure/reporting-server"
    #export values_file="/tmp/helm-live/azure/reporting-server/values-dev.yaml"
    export values_file="/tmp/helm-live/azure/dev/default/services/report-server/values.yaml"
    export namespace="default"
    export name=report-server
elif [[ "$CIRCLE_BRANCH" == "azure-int-il" ]]; then
    echo "On $CIRCLE_BRANCH branch. with $live_path"
elif [[ "$CIRCLE_BRANCH" == "azure-stage-il" ]]; then
    echo "On $CIRCLE_BRANCH branch. with $live_path"
elif [[ "$CIRCLE_BRANCH" == "azure-prd-il" ]]; then #git push origin HEAD:azure-prd-il
    export KUBECONFIG="/tmp/helm-live/azure/prd-il/aks/kube_config"
    export live_path="/tmp/helm-live/azure/reporting-server"
    export values_file="/tmp/helm-live/azure/prd-il/default/services/report-server/values.yaml"
    export namespace="default"
    export name=report-server
   echo "On $CIRCLE_BRANCH branch. with $live_path"
elif [[ "$CIRCLE_BRANCH" == "azure-prd-us" ]]; then #git push origin HEAD:azure-prd-us
    export KUBECONFIG="/tmp/helm-live/azure/prd-il/aks/kube_config"  #TO DO check if need to change
    export live_path="/tmp/helm-live/azure/reporting-server"
    export values_file="/tmp/helm-live/azure/prd-us/default/services/report-server/values.yaml"
    export namespace="us"
    export name=report-server-us
   echo "On $CIRCLE_BRANCH branch. with $live_path"
else
  echo "Did not find release tag or master branch, so skipping deploy."
  exit 0
fi

deploy