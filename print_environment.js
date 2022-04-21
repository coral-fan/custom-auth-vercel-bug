var os = require("os");
var fs = require("fs");

var vars = (process.config && process.config.variables) || {};
var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
var abi = process.versions.modules; // TODO: support old node where this is undef
var runtime = isElectron() ? "electron" : isNwjs() ? "node-webkit" : "node";

var arch = os.arch();
var platform = os.platform();
var libc = process.env.LIBC || (isAlpine(platform) ? "musl" : "glibc");
var armv =
  process.env.ARM_VERSION || (arch === "arm64" ? "8" : vars.arm_version) || "";
var uv = (process.versions.uv || "").split(".")[0];

var target = [
  "platform=" + platform,
  "arch=" + arch,
  "runtime=" + runtime,
  "abi=" + abi,
  "uv=" + uv,
  armv ? "armv=" + armv : "",
  "libc=" + libc,
  "node=" + process.versions.node,
  process.versions.electron ? "electron=" + process.versions.electron : "",
  typeof __webpack_require__ === "function" ? "webpack=true" : "", // eslint-disable-line
]
  .filter(Boolean)
  .join(" ");

console.log(target);

function isNwjs() {
  return !!(process.versions && process.versions.nw);
}

function isElectron() {
  if (process.versions && process.versions.electron) return true;
  if (process.env.ELECTRON_RUN_AS_NODE) return true;
  return (
    typeof window !== "undefined" &&
    window.process &&
    window.process.type === "renderer"
  );
}

function isAlpine(platform) {
  return platform === "linux" && fs.existsSync("/etc/alpine-release");
}
