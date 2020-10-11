#!/usr/bin env
set -e

git clone https://$MAIN_REPO main-repo
cd main-repo
git remote set-url origin https://$GITHUB_TOKEN@$MAIN_REPO
git config --global user.name "Deployment Bot (from Travis CI)"
git config --global user.email "deploy@travis-ci.org"
git submodule update --init
git submodule foreach --recursive git fetch --all
git submodule foreach --recursive git reset --hard origin/master
git add .

if [[ $(git commit -m "Update submodules" | grep 'nothing to commit') ]]; then
  curl -d '{"request":"master"}' -H "Content-Type: application/json" -H "Travis-API-Version: 3" -H "User-Agent: API Explorer" -H "Authorization: token $TRAVIS_TOKEN" -X POST https://api.travis-ci.org/repo/COSCUP%2F2020/requests
  exit 0
fi

git push