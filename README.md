# Ionic 3 Starter Template

This template is the tabs-starter with some additional work. It contains a set of different custom components and a simple http call to a JSON file.
Furthermore, it has search implemented with a loader that shows up before the data has been rendered.
There is no platform specific styling on any component other than the basic differences implemented in Ionic 3.

## Getting Started

To begin using this template, choose one of the following options to get started:
* Clone the repo: `git clone https://github.com/AnastasiosF/payslip-task.git`



## Start the project
The project is started with the regular ionic commands.

1. Run `npm install` to install all dependencies.
2. Run `ionic serve` to start the development environment.
3. To build the project run `ionic build`
4. Then `ionic capacitor add android` or `ionic capacitor add ios` In order for you to build an iOS app, you need to run on MacOS.
5. Then open Android Studio or Xcode and run each project `android` or `ios` folder.


## Important notes
I have only test the project on Android and only on emulator. I have not tested it on iOS.


## Documentation
* On file `src/data/MockData.ts` you will find the `const SAMPLE_PDF_URL` you can change the URL to any other file you want to download.
* Also on the same file you will find the `const DATA_LENGTH` which is the length of the data that will be rendered on the screen. 
You can change it to any number you want(max 100). **Don't go higher beacause I havent implemented `Virtual Scrolling`.**
