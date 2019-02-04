#!/bin/bash
# This script is meant to be run from a Circle CI job to automatically deploy to the specified environment.

set -e

function deploy () {
    local readonly live_path="$1"
    #git clone https://github.com/inPact/helm-live.git /tmp/helm-live
    #helm upgrade report-server /tmp/helm-live/azure/dev/services/reporting-server --set image.tag="${CIRCLE_BRANCH////_}-$(echo $CIRCLE_SHA1 | cut -c -7)"
    helm upgrade report-server "$live_path" --set image.tag="${CIRCLE_BRANCH////_}-$(echo $CIRCLE_SHA1 | cut -c -7)"
}
# ====================================================================================================================
# ================================================      IGNORE        ================================================
# ====================================================================================================================
if [[ "$CIRCLE_TAG" =~ ^release-.*$ ]]; then
  echo "Not in use  !!!! - Found release tag. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "master" ]]; then
  echo "On master branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "azure-dev" ]]; then #git push origin HEAD:azure-dev
   export live_path="/tmp/helm-live/azure/dev/services/reporting-server"
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "azure-int-il" ]]; then
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "azure-stage-il" ]]; then
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "azure-prd-il" ]]; then
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
else
  echo "Did not find release tag or master branch, so skipping deploy."
  exit 0
fi

deploy