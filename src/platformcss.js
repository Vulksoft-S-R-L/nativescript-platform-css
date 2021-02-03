"use strict";

const Page = require("@nativescript/core/ui/page").Page;
const Device = require("@nativescript/core/platform").Device;
const Screen = require("@nativescript/core/platform").Screen;

let groupings = [1280, 1024, 800, 600, 540, 480, 400, 360, 320, 240];

const getSize = (size) => {
  return groupings.find((current) => size >= current);
};

const onPageLoad = (args) => {
  const currentPage = args.object;
  const platform = Device.os.toLowerCase();
  let classes = [platform];

  // Add size of screen
  const size =
    Screen.mainScreen.widthDIPs < Screen.mainScreen.heightDIPs
      ? Screen.mainScreen.widthDIPs
      : Screen.mainScreen.heightDIPS;
  classes.push(`${platform}${getSize(size)}`);
  classes.push(`screen${getSize(size)}`);

  // Add device name
  const deviceName =
    Device.manufacturer.toLowerCase().replace(/\s/g, "") +
    Device.model.toLowerCase().replace(/\s/g, "");
  classes.push(deviceName);

  console.log(classes);

  if (currentPage) {
    currentPage.className += " " + classes.join(" ");
  }

  global.platformClass = classes;
};

// Setup Events
Page.on(Page.navigatingToEvent, onPageLoad);
Page.on(Page.showingModallyEvent, onPageLoad);

module.exports = onPageLoad;
