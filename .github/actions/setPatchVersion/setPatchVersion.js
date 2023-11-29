const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const { existsSync, readFileSync, writeFileSync } = require('fs');



const workspace = process.env.GITHUB_WORKSPACE || path.dirname(__dirname);
console.log('process.env.GITHUB_WORKSPACE', process.env.GITHUB_WORKSPACE);
console.log('workspace', workspace);

function getPackageJson() {
  const pathToPackage = path.join(workspace, 'package.json');
  if (!existsSync(pathToPackage)) throw new Error("package.json could not be found in your project's root.");
  return require(pathToPackage);
}

try {

  const nextMinorVersion = core.getInput('version');
  const nextPatchVersion = core.getInput('run_number')

  console.log({ nextMinorVersion, nextPatchVersion })

  const pkg = getPackageJson();

  const [major] = pkg.version.split('.');

  const nextVersion = `${Number(major) - 1}.${nextMinorVersion}.${nextPatchVersion}`;

  const file = readFileSync(path.join(workspace, 'package.json'), 'utf-8');
  const newFile = file.replace(pkg.version, nextVersion);
  writeFileSync(path.join(workspace, 'package.json'), newFile, 'utf-8');

  core.setOutput("time", 'yes');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
