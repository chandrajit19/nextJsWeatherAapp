// components/TempChecklist.tsx
"use client";
import React from "react";

type Props = {
  tempC: number | null; // Celsius, or null if unknown
};

export default function TempChecklist({ tempC }: Props) {
  // returns JSX lists based on temp only (no styling)
  if (tempC === null) {
    return (
      <div>
        <h3>Checklist (Temperature unknown)</h3>
        <p>Weather not available. Basic items:</p>
        <ul>
          <li>ID & phone (charged)</li>
          <li>Water bottle</li>
          <li>Light jacket / something warm</li>
        </ul>
      </div>
    );
  }

  if (tempC <= 0) {
    return (
      <div>
        <h3>Very Cold & Freezing (&le; 0°C)</h3>
        <p>Must-haves:</p>
        <ul>
          <li>Heavy insulated coat / parka</li>
          <li>Thermal base layers (top + bottom)</li>
          <li>Wool socks + insulated waterproof boots</li>
          <li>Insulated gloves, warm hat, scarf</li>
        </ul>
        <p>Nice-to-have:</p>
        <ul>
          <li>Hand warmers, spare gloves/socks</li>
          <li>Balaclava / face protection</li>
        </ul>
        <p>Precautions:</p>
        <ul>
          <li>Keep batteries close to body (cold drains them)</li>
          <li>Avoid wet clothes (hypothermia risk)</li>
        </ul>
      </div>
    );
  }

  if (tempC > 0 && tempC <= 10) {
    return (
      <div>
        <h3>Cold (0–10°C)</h3>
        <p>Must-haves:</p>
        <ul>
          <li>Warm jacket (fleece/down)</li>
          <li>Long-sleeve base + mid-layer</li>
          <li>Closed shoes and warm socks</li>
        </ul>
        <p>Nice-to-have:</p>
        <ul>
          <li>Waterproof shell, light gloves, beanie</li>
        </ul>
        <p>Precautions:</p>
        <ul>
          <li>Layering: add/remove indoors</li>
        </ul>
      </div>
    );
  }

  if (tempC > 10 && tempC <= 20) {
    return (
      <div>
        <h3>Cool / Mild (10–20°C)</h3>
        <p>Must-haves:</p>
        <ul>
          <li>Light jacket or hoodie</li>
          <li>Long sleeves or T-shirts</li>
          <li>Comfortable shoes</li>
        </ul>
        <p>Nice-to-have:</p>
        <ul>
          <li>Light scarf for evening</li>
        </ul>
        <p>Precautions:</p>
        <ul>
          <li>Morning/evening may be cooler — keep packable jacket</li>
        </ul>
      </div>
    );
  }

  if (tempC > 20 && tempC <= 25) {
    return (
      <div>
        <h3>Warm Comfortable (20–25°C)</h3>
        <p>Must-haves:</p>
        <ul>
          <li>Breathable T-shirts / polos</li>
          <li>Light trousers or shorts</li>
          <li>Sunglasses + sunscreen (SPF 30+)</li>
        </ul>
        <p>Nice-to-have:</p>
        <ul>
          <li>Hat/cap, small water bottle</li>
        </ul>
        <p>Precautions:</p>
        <ul>
          <li>Avoid heavy fabrics — prefer linen/technical blends</li>
        </ul>
      </div>
    );
  }

  if (tempC > 25 && tempC <= 35) {
    return (
      <div>
        <h3>Hot (25–35°C)</h3>
        <p>Must-haves:</p>
        <ul>
          <li>Lightweight breathable clothes</li>
          <li>Wide-brim hat / cap</li>
          <li>Sunscreen, sunglasses, large water bottle</li>
        </ul>
        <p>Nice-to-have:</p>
        <ul>
          <li>Electrolytes, cooling towel</li>
        </ul>
        <p>Precautions:</p>
        <ul>
          <li>Avoid midday sun; hydrate frequently</li>
        </ul>
      </div>
    );
  }

  // tempC > 35
  return (
    <div>
      <h3>Very Hot / Extreme (&gt;35°C)</h3>
      <p>Must-haves:</p>
      <ul>
        <li>Max hydration + electrolyte plan</li>
        <li>UV protection (hat, high-SPF sunscreen)</li>
        <li>Lightweight long sleeves for sun protection</li>
      </ul>
      <p>Nice-to-have:</p>
      <ul>
        <li>Portable shade / umbrella, cooling pack</li>
      </ul>
      <p>Precautions:</p>
      <ul>
        <li>Reconsider long outdoor plans; limit exposure</li>
      </ul>
    </div>
  );
}
