# 🏎️ Logitech G29 & BeamNG.drive Utility 🕹️

![node.js test workflow](https://github.com/artis101/beamng-logitech-g29-leds/actions/workflows/node.js.yml/badge.svg)

Hi there! 👋 This is a utility designed and developed to connect your Logitech G29 steering wheel's LEDs with the BeamNG.drive game by reading the car's RPM data in real-time. Pretty cool, right? 🚀

## 🎯 What does it do?

### TL;DR here's a video of it in action

![GIF showing the utility in action](https://raw.githubusercontent.com/artis101/beamng-logitech-g29-leds/main/beamng-logitech-g29-leds.gif)

This utility makes your gaming experience more immersive by syncing your Logitech G29's LED indicators with your in-game vehicle's RPM data. As you rev up your car in the game, the LED indicators on your steering wheel will react accordingly.

Before BeamNG.drive is connected, the utility is in the test mode where the LEDs respond to the gas pedal.

Once the game is connected, it switches to the game mode where the LEDs respond to the car's RPM in the game.

You can enter the Max RPM of the car you're using at any time by typing the number of RPM in and pressing Enter. The default is 7000 RPM.

## 🛠️ Main Dependencies

1. **Node.js:** The utility is built with Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.
2. **logitech-g29:** This Node.js module allows us to interface with the Logitech G29 steering wheel.
3. **dgram:** This is a Node.js module that provides an implementation of UDP Datagram sockets.

## 💻 How to use it?

### What you need first

This is a **command-line program**, so everything happens in a terminal window — no icons to click. You need two things:

1. **Node.js** (version 18 or newer). If you don't have it, download and install the "LTS" version from [nodejs.org](https://nodejs.org/en/download/).
2. A **terminal** (already on your computer):
   - **Windows:** press `Win + R`, type `cmd`, press Enter (or use PowerShell from the Start menu)
   - **macOS:** press `Cmd + Space`, type `Terminal`, press Enter
   - **Linux:** press `Ctrl + Alt + T`

Type each of the commands below into that window, pressing Enter after each one.

### Step-by-step setup

Clone the repository (downloads this project):

```bash
git clone https://github.com/artis101/beamng-logitech-g29-leds
```

Move into the project folder:

```bash
cd beamng-logitech-g29-leds
```

Install the dependencies:

```bash
npm install
```

Run the utility:

```bash
npm start
```

> 💡 On Linux you may need extra permissions to talk to the wheel over USB. If you get a "cannot find or open" error, try running with `sudo` or set up the appropriate udev rules for your distribution.
>
> 🎮 **Supported wheels:** the underlying [`logitech-g29`](https://www.npmjs.com/package/logitech-g29) library supports the Logitech **G29** (and G290). The **G923** and **G920** are *not* currently detected by this library — see [issue #5](https://github.com/artis101/beamng-logitech-g29-leds/issues/5).

### While it's running

- Before BeamNG.drive connects, the utility runs in **test mode**: the LEDs respond to your gas pedal so you can verify everything works.
- Once BeamNG.drive sends data, it switches to **game mode**: LEDs reflect the car's RPM in real time.
- Type any number and press Enter to change the Max RPM on the fly (default: 7000). Type `test` to return to test mode, or `q` / `quit` / `exit` to quit.

That's it! Enjoy your immersive gaming experience. 🎮

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.

## 📄 License

This project is MIT licensed.

## 🧔 Author

Artis

Happy gaming! 🥳
