#!/bin/bash
# This script is meant to be run from a Circle CI job to automatically deploy to the specified environment.

set -e

function deploy {
    git clone https://github.com/inPact/helm-live.git /tmp/helm-live
    helm upgrade report-server /tmp/helm-live/azure/dev/services/reporting-server --set image.tag="${CIRCLE_BRANCH////_}-$(echo $CIRCLE_SHA1 | cut -c -7)"
    # change dir so git add in terraform-update-variable will work
    #cd /tmp/infrastructure-live
    #for region in "${REGIONS[@]}"
    #do
    #  for service in "${SERVICES[@]}"
    #  do
    #    SERVICE_PATH="$ACCOUNT/$region/$ROS_ENV/services/$service"
    #    terraform-update-variable --name "image_version" --value "$CIRCLE_BRANCH-$(echo $CIRCLE_SHA1 | cut -c -7)" --tfvars-path "/tmp/infrastructure-live/$SERVICE_PATH/terraform.tfvars"
    #    terragrunt apply --terragrunt-working-dir "/tmp/infrastructure-live/$SERVICE_PATH"  --terragrunt-iam-role "$IAM_ROLE_ARN" -input=false --terragrunt-non-interactive -auto-approve
    #  done
    #done
}
# ====================================================================================================================
# ================================================      IGNORE        ================================================
# ====================================================================================================================
if [[ "$CIRCLE_TAG" =~ ^release-.*$ ]]; then
  echo "Not in use  !!!! - Found release tag. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "master" ]]; then
  echo "On master branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
elif [[ "$CIRCLE_BRANCH" == "ecs-il-production" ]]; then

   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"

elif [[ "$CIRCLE_BRANCH" == "ecs-il-production-rp" ]]; then
   IAM_ROLE_ARN="arn:aws:iam::205788730759:role/allow-auto-deploy-from-other-accounts"
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"

elif [[ "$CIRCLE_BRANCH" == "ecs-il-production-rp-beta" ]]; then
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"

elif [[ "$CIRCLE_BRANCH" == "ecs-il-production-worker" ]]; then
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"

elif [[ "$CIRCLE_BRANCH" == "ecs-il-misc" ]]; then
   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
# elif [[ "$CIRCLE_BRANCH" == "<THE_BRANCH_YOU_WANT_TO_DEPLOY>" ]]; then
#   IAM_ROLE_ARN="arn:aws:iam::<ACCOUNT_ID>:role/allow-auto-deploy-from-other-accounts"
#   ACCOUNT="<ACCOUNT_NAME>"
#   REGIONS=( "eu-west-1" )
#   ROS_ENV="<WHICH_ROS_ENV_YOU_WANT_TO_DEPLOY_TO>"
#   SERVICES=( "rosapi" "rosworker" "tlogprocessor" "retryProcessor" )
#   echo "On $CIRCLE_BRANCH branch. Deploying $SERVICES to $ACCOUNT in $REGIONS"
else
  echo "Did not find release tag or master branch, so skipping deploy."
  #exit 0
fi

deploy