# scienceleadership-narratives

## Release Process
1. Commit or merge changes into the `master` branch
2. Run from the root of the repository: `./update-build.sh`
3. Inspect new commits to `builds/v1` branch
4. Push `builds/v1` branch: `git push origin builds/v1`
5. Push tags: `git push --tags`
6. Add release notes to new tag on GitHub
