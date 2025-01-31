import {
  createModuleBuild,
  createTestBuild,
  createBrowserTestBuild,
} from './rollup-config-factory.mjs';

const outputDir = 'build';
const includeTestCoverage = true;

export default [
  createModuleBuild(outputDir, includeTestCoverage),
  createTestBuild(outputDir, includeTestCoverage),
  createBrowserTestBuild(outputDir, includeTestCoverage),
];
