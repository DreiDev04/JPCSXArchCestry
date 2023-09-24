import React from "react";

function HeroSection() {
  const textContent =
    'Download the <a href="https://skmedix.pl" target="_blank" rel="noopener noreferrer">SKLauncher</a> from the official website.';

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h1 className="display-4 text-start">
          How to Install Minecraft Launcher?
        </h1>

        <h2 className="py-4 text-start">Step 1</h2>
        <div>
          <p className="lead text-start">
            Download the{" "}
            <a
              href="https://skmedix.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              SKLauncher
            </a>{" "}
            from the official website.
            <a
              href="https://skmedix.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/SKLauncherPage.png"
                alt="SKLauncher"
                className="img-fluid mx-auto d-block"
              />
            </a>
          </p>
        </div>

        <h2 className="py-4 text-start">Step 2</h2>
        <div>
          <p className="lead text-start">
            Download the Windows "exe"  file
            <img
              src="./src/assets/DownloadSK.png"
              alt="Download SK"
              className="img-fluid mx-auto d-block"
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 3</h2>
        <div>
          <p className="lead text-start">
            Save to the desired location
            <img
              src="./src/assets/save.png"
              alt="Save"
              className="img-fluid mx-auto d-block"
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 4</h2>
        <div>
          <p className="lead text-start">
            Launch the app then choose offline mode
            <img
              src="./src/assets/LaunchApp.png"
              alt="Launch App"
              className="img-fluid mx-auto d-block "
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 5</h2>
        <div>
          <p className="lead text-start">
            Set your username to TeamName_Username. Then Login Offline
            <img
              src="./src/assets/OfflineMode.png"
              alt="Offline Mode"
              className="img-fluid mx-auto d-block "
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 6</h2>
        <div>
          <p className="lead text-start">
            Click the "+" sign beside Installation Manager
            <img
              src="./src/assets/PlusManager.png"
              alt="Plus Manager"
              className="img-fluid mx-auto d-block"
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 7</h2>
        <div>
          <p className="lead text-start">
            Name it to Minecraft ver 1.20 then choose the version Release: 1.20 then save
            <img
              src="./src/assets/choose120.png"
              alt="Choose 1.20"
              className="img-fluid mx-auto d-block"
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 8</h2>
        <div>
          <p className="lead text-start">
            Click the downloader version then Play
            <img
              src="./src/assets/play.png"
              alt="Play"
              className="img-fluid mx-auto d-block"
            />
          </p>
        </div>

        <h2 className="py-4 text-start">Step 9</h2>
        <div>
          <p className="lead text-start">
            HAHAHEHE Ang galing mo!
            <img
              src="./src/assets/minecraft.png"
              alt="Minecraft"
              className="img-fluid mx-auto d-block"
            />
          </p>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
