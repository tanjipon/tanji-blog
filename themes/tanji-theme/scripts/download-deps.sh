#!/bin/bash
# Script to download external dependencies for local use

# Create necessary directories
mkdir -p static/fonts
mkdir -p static/js

# Download Inter font files
echo "Downloading Inter font files..."
curl -sL "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" | \
  grep -oP "https://(.*?).woff2" | \
  while read -r url; do
    filename=$(basename "$url")
    echo "  Downloading $filename"
    curl -sL "$url" -o "static/fonts/$filename"
  done

# Convert woff2 to woff format using woff2_decompress if available
if command -v woff2_decompress &> /dev/null; then
  echo "Converting woff2 to woff format..."
  for file in static/fonts/*.woff2; do
    woff_file="${file%.woff2}.woff"
    woff2_decompress "$file"
  done
else
  echo "woff2_decompress not found, skipping woff conversion"
  echo "Install with: apt-get install woff2 (or equivalent for your system)"
fi

echo "Download completed!"