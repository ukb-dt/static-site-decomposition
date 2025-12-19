#!/usr/bin/env bash

# ----------------------------------------
# Ukubona static site scaffold generator
# ----------------------------------------

set -e

ROOT="."
LINKS="$ROOT/links"

echo "📁 Generating directory tree..."

# Create root-level files
touch "$ROOT/index.html"

# Core directories
mkdir -p \
  "$LINKS/html/sections" \
  "$LINKS/html/pages" \
  "$LINKS/html/fragments" \
  "$LINKS/css" \
  "$LINKS/js" \
  "$LINKS/img/logos" \
  "$LINKS/img/diagrams" \
  "$LINKS/img/gallery" \
  "$LINKS/vendor/mathjax" \
  "$LINKS/vendor/fonts" \
  "$ROOT/source"

# Section HTML files
for f in header nav section-01 section-02 section-03 footer; do
  touch "$LINKS/html/sections/$f.html"
done

# Page HTML files
for f in geometry topology algebra discrete pentads; do
  touch "$LINKS/html/pages/$f.html"
done

# Fragment HTML files
for f in tables blockquotes footnotes; do
  touch "$LINKS/html/fragments/$f.html"
done

# CSS files
for f in core layout components themes responsive; do
  touch "$LINKS/css/$f.css"
done

# JS files
for f in theme menu scroll mathjax; do
  touch "$LINKS/js/$f.js"
done

# Source monolith archive
touch "$ROOT/source/monolith.html"

echo "✅ Directory tree created successfully."
echo
echo "Next steps:"
echo "  - Edit index.html (pure HTML, no JS)"
echo "  - Move styles into links/css/"
echo "  - Split JS logic into links/js/"
echo "  - Archive original file in source/monolith.html"
