#!/bin/bash
# Script to download external dependencies for local use - macOS version

# Create necessary directories
mkdir -p static/fonts
mkdir -p static/js

# Download Inter font files
echo "Downloading Inter font files..."

# Add a user agent to the request - Google Fonts requires this
curl -sL "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36" | \
  grep -o "https://[^[:space:]]*\.woff2" | \
  while read -r url; do
    filename=$(basename "$url")
    echo "  Downloading $filename"
    curl -sL "$url" -o "static/fonts/$filename"
    
    # Create corresponding .woff filename
    woff_filename="${filename%.woff2}.woff"
    echo "  (Would convert to $woff_filename if conversion tool was available)"
  done

# Download directly the Inter font files as a fallback
if [ ! "$(ls -A static/fonts)" ]; then
  echo "Direct download failed. Using fallback method to download font files..."
  
  # Create array of font weights and styles
  weights=(400 500 600 700)
  
  for weight in "${weights[@]}"; do
    url="https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2"
    filename="inter-v12-latin-${weight}.woff2"
    echo "  Downloading $filename"
    curl -sL "$url" -o "static/fonts/$filename"
    
    woff_filename="inter-v12-latin-${weight}.woff"
    echo "  (Would convert to $woff_filename if conversion tool was available)"
  done
fi

# Check if font files were downloaded
if [ ! "$(ls -A static/fonts)" ]; then
  echo "Error: Failed to download font files. Please download them manually."
  echo "You can download Inter font files from https://fonts.google.com/specimen/Inter"
  echo "and place them in the static/fonts directory."
  exit 1
else
  echo "Font files downloaded successfully!"
fi

# Check if Homebrew is installed
if command -v brew &> /dev/null; then
  echo ""
  echo "Note: If you want to convert woff2 to woff format, you can install woff2 tools with Homebrew:"
  echo "  brew install woff2"
  echo ""
  echo "After installation, you can convert files with:"
  echo "  for file in static/fonts/*.woff2; do"
  echo "    woff2_decompress \"\$file\""
  echo "  done"
else
  echo ""
  echo "Note: For font format conversion, you can install Homebrew (https://brew.sh/)"
  echo "and then install woff2 tools with 'brew install woff2'"
fi

echo ""
echo "Download completed! Font files are available in static/fonts/"
echo "You can now build your Hugo site with these local font dependencies."