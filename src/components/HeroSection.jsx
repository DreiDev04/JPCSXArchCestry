import React from "react";
import Cards from "./Cards";

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
        <Cards image={"./src/assets/SKLauncherPage.png"} text={textContent} />

        <h2 className="py-4 text-start">Step 2</h2>
        <Cards image={"./src/assets/DownloadSK.png"} text={"Download the Windows \"exe\"  file"} />

        <h2 className="py-4 text-start">Step 3</h2>
        <Cards image={"./src/assets/save.png"} text={"Save to desired location"} />

        <h2 className="py-4 text-start">Step 4</h2>
        <Cards image={"./src/assets/LaunchApp.png"} text={"Launch the app then choose offline mode"} />

        <h2 className="py-4 text-start">Step 5</h2>
        <Cards image={"./src/assets/OfflineMode.png"} text={"Set your username to TeamName_Username. Then Login Offline"} />

        <h2 className="py-4 text-start">Step 6</h2>
        <Cards image={"./src/assets/PlusManager.png"} text={"Click the \"+\" sign beside Installation Manager"} />

        <h2 className="py-4 text-start">Step 7</h2>
        <Cards image={"./src/assets/choose120.png"} text={"Name it to Minecraft ver 1.20 then choose the version Release: 1.20 then save"} />

        <h2 className="py-4 text-start">Step 7</h2>
        <Cards image={"./src/assets/play.png"} text={"Click the downloader version then Play"} />

        <h2 className="py-4 text-start">Step 8</h2>
        <Cards image={"./src/assets/minecraft.png"} text={"HAHAHEHE Ang galing mo!"} />

      </div>
    </section>
  );
}

export default HeroSection;
